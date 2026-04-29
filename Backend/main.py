from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthCredentials
from sqlalchemy.orm import Session
from datetime import datetime, timezone, timedelta
import math
import os
from jose import JWTError, jwt
from passlib.context import CryptContext

from database import get_db, engine, Base
import models
import schemas

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Gamify Life API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200", "https://gamify-frontend.onrender.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Auth config ──
SECRET_KEY = os.getenv("SECRET_KEY", "dev-secret-key-change-in-production")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 10080  # 7 days

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
security = HTTPBearer()


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain: str, hashed: str) -> bool:
    return pwd_context.verify(plain, hashed)


def create_access_token(user_id: int, username: str) -> str:
    payload = {
        "user_id": user_id,
        "username": username,
        "exp": datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)


def get_current_user(credentials: HTTPAuthCredentials = Depends(security), db: Session = Depends(get_db)) -> models.User:
    try:
        payload = jwt.decode(credentials.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: int = payload.get("user_id")
        if user_id is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        user = db.get(models.User, user_id)
        if not user:
            raise HTTPException(status_code=401, detail="User not found")
        return user
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")


# ── Auth routes ──────────────────────────────────────────────────────────────

@app.post("/api/auth/signup", response_model=schemas.TokenResponse)
def signup(req: schemas.UserSignup, db: Session = Depends(get_db)):
    """Create new user account and return token."""
    # Check if user exists
    if db.query(models.User).filter(models.User.email == req.email).first():
        raise HTTPException(status_code=400, detail="Email already registered")
    if db.query(models.User).filter(models.User.username == req.username).first():
        raise HTTPException(status_code=400, detail="Username already taken")

    # Create user
    user = models.User(
        username=req.username,
        email=req.email,
        password_hash=hash_password(req.password),
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    # Create character for user
    character = models.Character(user_id=user.id)
    db.add(character)
    db.commit()

    # Seed skills for user
    skills_data = [
        {"id": "python", "name": "Python", "icon": "🐍", "category": "Programming", "color": "#3776ab", "bg_color": "#dbeafe", "description": "Backend development"},
        {"id": "js", "name": "JavaScript", "icon": "⚡", "category": "Programming", "color": "#f7df1e", "bg_color": "#fffbeb", "description": "Web scripting"},
        {"id": "ts", "name": "TypeScript", "icon": "📘", "category": "Programming", "color": "#3178c6", "bg_color": "#eff6ff", "description": "Type-safe JS"},
        {"id": "algo", "name": "Algorithms", "icon": "📊", "category": "Programming", "color": "#11998e", "bg_color": "#ccfbf1", "description": "Problem solving"},
        {"id": "db", "name": "Databases", "icon": "🗄️", "category": "Programming", "color": "#336791", "bg_color": "#f0f9ff", "description": "Data management"},
        {"id": "git", "name": "Git", "icon": "📁", "category": "Programming", "color": "#f34f29", "bg_color": "#fef2f2", "description": "Version control"},
        {"id": "cpp", "name": "C++", "category": "Programming", "color": "#00599c", "bg_color": "#f0f4f8", "icon": "⚙️", "description": "Systems programming"},
        {"id": "web", "name": "Web Dev", "icon": "🌐", "category": "Programming", "color": "#ff6b6b", "bg_color": "#ffe0e0", "description": "Full-stack web"},
        {"id": "sysdesign", "name": "System Design", "icon": "🏗️", "category": "Programming", "color": "#1a5f7a", "bg_color": "#ecf0f1", "description": "Scalable systems"},
        {"id": "creativity", "name": "Creativity", "icon": "✨", "category": "Creative", "color": "#e74c3c", "bg_color": "#fdeaea", "description": "Creative thinking"},
        {"id": "writing", "name": "Writing", "icon": "✍️", "category": "Creative", "color": "#8e44ad", "bg_color": "#f4ecf7", "description": "Writing skills"},
        {"id": "uiux", "name": "UI/UX Design", "icon": "🎨", "category": "Creative", "color": "#7c3aed", "bg_color": "#f3e8ff", "description": "Design & UX"},
        {"id": "wellness", "name": "Wellness", "icon": "🌿", "category": "Life", "color": "#27ae60", "bg_color": "#eafaf1", "description": "Health & wellness"},
        {"id": "focus", "name": "Focus", "icon": "🎯", "category": "Life", "color": "#f39c12", "bg_color": "#fef5e7", "description": "Deep focus"},
        {"id": "social", "name": "Social Skills", "icon": "🤝", "category": "Life", "color": "#e91e63", "bg_color": "#fce4ec", "description": "Communication"},
        {"id": "selfcare", "name": "Self-care", "icon": "💆", "category": "Life", "color": "#9b59b6", "bg_color": "#f4ecf7", "description": "Self-care practices"},
        {"id": "study", "name": "Study", "icon": "📚", "category": "Life", "color": "#3498db", "bg_color": "#ebf5fb", "description": "Learning & study"},
    ]

    for skill_data in skills_data:
        skill = models.Skill(
            id=skill_data["id"],
            user_id=user.id,
            name=skill_data["name"],
            icon=skill_data["icon"],
            level=1,
            xp=0,
            xp_to_next=100,
            color=skill_data["color"],
            bg_color=skill_data["bg_color"],
            category=skill_data["category"],
            description=skill_data["description"],
        )
        db.add(skill)
    db.commit()

    token = create_access_token(user.id, user.username)
    return schemas.TokenResponse(access_token=token, user_id=user.id, username=user.username)


@app.post("/api/auth/login", response_model=schemas.TokenResponse)
def login(req: schemas.UserLogin, db: Session = Depends(get_db)):
    """Authenticate user and return token."""
    user = db.query(models.User).filter(models.User.email == req.email).first()
    if not user or not verify_password(req.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    token = create_access_token(user.id, user.username)
    return schemas.TokenResponse(access_token=token, user_id=user.id, username=user.username)


@app.get("/api/auth/me", response_model=schemas.UserInfo)
def get_me(user: models.User = Depends(get_current_user)):
    """Get current user info."""
    return schemas.UserInfo(
        id=user.id,
        username=user.username,
        email=user.email,
        created_at=user.created_at.isoformat(),
    )


def get_or_404(db: Session, model, id):
    obj = db.get(model, id)
    if not obj:
        raise HTTPException(status_code=404, detail=f"{model.__name__} not found")
    return obj


def char_to_schema(c: models.Character) -> schemas.CharacterSchema:
    return schemas.CharacterSchema(
        name=c.name, title=c.title, level=c.level,
        xp=c.xp, xpToNext=c.xp_to_next,
        hp=c.hp, maxHp=c.max_hp, mana=c.mana, maxMana=c.max_mana,
        coins=c.coins, streak=c.streak, lastCheckIn=c.last_check_in,
        theme=c.theme, hairStyle=c.hair_style, hairColor=c.hair_color,
        dressColor=c.dress_color, avatarMood=c.avatar_mood,
        eyeColor=c.eye_color, skinTone=c.skin_tone,
        accessory=c.accessory, accessoryColor=c.accessory_color,
    )


def quest_to_schema(q: models.Quest) -> schemas.QuestSchema:
    return schemas.QuestSchema(
        id=q.id, title=q.title, category=q.category, completed=q.completed,
        xpReward=q.xp_reward, coinReward=q.coin_reward, createdAt=q.created_at,
    )


def skill_to_schema(s: models.Skill) -> schemas.SkillSchema:
    return schemas.SkillSchema(
        id=s.id, name=s.name, icon=s.icon, level=s.level, xp=s.xp,
        xpToNext=s.xp_to_next, color=s.color, bgColor=s.bg_color,
        category=s.category, description=s.description,
    )


# ── Game data ──────────────────────────────────────────────────────────────

@app.get("/api/game", response_model=schemas.GameDataSchema)
def get_game(user: models.User = Depends(get_current_user)):
    return schemas.GameDataSchema(
        character=char_to_schema(user.character),
        quests=[quest_to_schema(q) for q in user.quests],
        skills=[skill_to_schema(s) for s in user.skills],
    )


# ── Character ──────────────────────────────────────────────────────────────

@app.put("/api/character", response_model=schemas.CharacterSchema)
def update_character(updates: schemas.CharacterUpdate, user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if not user.character:
        raise HTTPException(status_code=404, detail="Character not found.")
    c = user.character
    field_map = {
        "name": "name", "title": "title", "level": "level",
        "xp": "xp", "xpToNext": "xp_to_next",
        "hp": "hp", "maxHp": "max_hp", "mana": "mana", "maxMana": "max_mana",
        "coins": "coins", "streak": "streak", "lastCheckIn": "last_check_in",
        "theme": "theme", "hairStyle": "hair_style", "hairColor": "hair_color",
        "dressColor": "dress_color", "avatarMood": "avatar_mood",
        "eyeColor": "eye_color", "skinTone": "skin_tone",
        "accessory": "accessory", "accessoryColor": "accessory_color",
    }
    for schema_field, db_field in field_map.items():
        val = getattr(updates, schema_field)
        if val is not None:
            setattr(c, db_field, val)
    db.commit()
    db.refresh(c)
    return char_to_schema(c)


@app.post("/api/character/check-in", response_model=schemas.CharacterSchema)
def check_in(user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    if not user.character:
        raise HTTPException(status_code=404, detail="Character not found.")
    c = user.character
    today = datetime.now(timezone.utc).strftime("%a %b %d %Y")
    if c.last_check_in == today:
        raise HTTPException(status_code=400, detail="Already checked in today.")
    c.streak += 1
    c.last_check_in = today
    c.xp += 25
    c.coins += 15
    _check_level_up(c)
    db.commit()
    db.refresh(c)
    return char_to_schema(c)


def _check_level_up(c: models.Character):
    if c.xp >= c.xp_to_next:
        c.level += 1
        c.xp -= c.xp_to_next
        c.xp_to_next = math.floor(c.xp_to_next * 1.6)
        c.max_hp += 10
        c.hp = c.max_hp
        c.max_mana += 5
        c.mana = c.max_mana
        c.coins += 50


# ── Quests ─────────────────────────────────────────────────────────────────

@app.get("/api/quests", response_model=list[schemas.QuestSchema])
def get_quests(user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    quests = db.query(models.Quest).filter(models.Quest.user_id == user.id).all()
    return [quest_to_schema(q) for q in quests]


@app.post("/api/quests", response_model=schemas.QuestSchema)
def add_quest(body: schemas.QuestCreate, user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    rewards = {"daily": (10, 5), "weekly": (30, 15), "custom": (20, 10)}
    xp, coins = rewards.get(body.category, (10, 5))
    quest = models.Quest(
        id=str(int(datetime.now(timezone.utc).timestamp() * 1000)),
        user_id=user.id, title=body.title, category=body.category,
        completed=False, xp_reward=xp, coin_reward=coins,
        created_at=datetime.now(timezone.utc).isoformat(),
    )
    db.add(quest)
    db.commit()
    db.refresh(quest)
    return quest_to_schema(quest)


@app.put("/api/quests/{quest_id}/toggle", response_model=schemas.GameDataSchema)
def toggle_quest(quest_id: str, user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    quest = db.get(models.Quest, quest_id)
    if not quest or quest.user_id != user.id:
        raise HTTPException(status_code=404, detail="Quest not found.")
    c = user.character
    completing = not quest.completed
    quest.completed = completing
    if completing:
        c.xp += quest.xp_reward
        c.coins += quest.coin_reward
        _check_level_up(c)
    else:
        c.xp = max(0, c.xp - quest.xp_reward)
        c.coins = max(0, c.coins - quest.coin_reward)
    db.commit()
    return schemas.GameDataSchema(
        character=char_to_schema(user.character),
        quests=[quest_to_schema(q) for q in user.quests],
        skills=[skill_to_schema(s) for s in user.skills],
    )


@app.delete("/api/quests/{quest_id}")
def delete_quest(quest_id: str, db: Session = Depends(get_db)):
    quest = db.get(models.Quest, quest_id)
    if not quest:
        raise HTTPException(status_code=404, detail="Quest not found.")
    db.delete(quest)
    db.commit()
    return {"ok": True}


@app.post("/api/quests/reset-daily", response_model=list[schemas.QuestSchema])
def reset_daily(user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    quests = db.query(models.Quest).filter(
        models.Quest.user_id == user.id,
        models.Quest.category == "daily"
    ).all()
    for q in quests:
        q.completed = False
    db.commit()
    all_quests = db.query(models.Quest).filter(models.Quest.user_id == user.id).all()
    return [quest_to_schema(q) for q in all_quests]


# ── Skills ─────────────────────────────────────────────────────────────────

@app.get("/api/skills", response_model=list[schemas.SkillSchema])
def get_skills(user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    skills = db.query(models.Skill).filter(models.Skill.user_id == user.id).all()
    return [skill_to_schema(s) for s in skills]


@app.put("/api/skills/{skill_id}/xp", response_model=schemas.SkillSchema)
def gain_skill_xp(skill_id: str, body: schemas.SkillXpUpdate, user: models.User = Depends(get_current_user), db: Session = Depends(get_db)):
    skill = db.get(models.Skill, skill_id)
    if not skill or skill.user_id != user.id:
        raise HTTPException(status_code=404, detail="Skill not found.")
    skill.xp += body.amount
    if skill.xp >= skill.xp_to_next:
        skill.level += 1
        skill.xp -= skill.xp_to_next
        skill.xp_to_next = math.floor(skill.xp_to_next * 1.8)
    db.commit()
    db.refresh(skill)
    return skill_to_schema(skill)
