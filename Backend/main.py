from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datetime import datetime, timezone
import math

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

USER_ID = 1  # single-user app


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
def get_game(db: Session = Depends(get_db)):
    user = db.get(models.User, USER_ID)
    if not user:
        raise HTTPException(status_code=404, detail="User not found. Run seed.py first.")
    return schemas.GameDataSchema(
        character=char_to_schema(user.character),
        quests=[quest_to_schema(q) for q in user.quests],
        skills=[skill_to_schema(s) for s in user.skills],
    )


# ── Character ──────────────────────────────────────────────────────────────

@app.put("/api/character", response_model=schemas.CharacterSchema)
def update_character(updates: schemas.CharacterUpdate, db: Session = Depends(get_db)):
    user = db.get(models.User, USER_ID)
    if not user or not user.character:
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
def check_in(db: Session = Depends(get_db)):
    user = db.get(models.User, USER_ID)
    if not user or not user.character:
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
def get_quests(db: Session = Depends(get_db)):
    quests = db.query(models.Quest).filter(models.Quest.user_id == USER_ID).all()
    return [quest_to_schema(q) for q in quests]


@app.post("/api/quests", response_model=schemas.QuestSchema)
def add_quest(body: schemas.QuestCreate, db: Session = Depends(get_db)):
    rewards = {"daily": (10, 5), "weekly": (30, 15), "custom": (20, 10)}
    xp, coins = rewards.get(body.category, (10, 5))
    quest = models.Quest(
        id=str(int(datetime.now(timezone.utc).timestamp() * 1000)),
        user_id=USER_ID, title=body.title, category=body.category,
        completed=False, xp_reward=xp, coin_reward=coins,
        created_at=datetime.now(timezone.utc).isoformat(),
    )
    db.add(quest)
    db.commit()
    db.refresh(quest)
    return quest_to_schema(quest)


@app.put("/api/quests/{quest_id}/toggle", response_model=schemas.GameDataSchema)
def toggle_quest(quest_id: str, db: Session = Depends(get_db)):
    quest = db.get(models.Quest, quest_id)
    if not quest:
        raise HTTPException(status_code=404, detail="Quest not found.")
    user = db.get(models.User, USER_ID)
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
def reset_daily(db: Session = Depends(get_db)):
    quests = db.query(models.Quest).filter(
        models.Quest.user_id == USER_ID,
        models.Quest.category == "daily"
    ).all()
    for q in quests:
        q.completed = False
    db.commit()
    all_quests = db.query(models.Quest).filter(models.Quest.user_id == USER_ID).all()
    return [quest_to_schema(q) for q in all_quests]


# ── Skills ─────────────────────────────────────────────────────────────────

@app.get("/api/skills", response_model=list[schemas.SkillSchema])
def get_skills(db: Session = Depends(get_db)):
    skills = db.query(models.Skill).filter(models.Skill.user_id == USER_ID).all()
    return [skill_to_schema(s) for s in skills]


@app.put("/api/skills/{skill_id}/xp", response_model=schemas.SkillSchema)
def gain_skill_xp(skill_id: str, body: schemas.SkillXpUpdate, db: Session = Depends(get_db)):
    skill = db.get(models.Skill, skill_id)
    if not skill:
        raise HTTPException(status_code=404, detail="Skill not found.")
    skill.xp += body.amount
    if skill.xp >= skill.xp_to_next:
        skill.level += 1
        skill.xp -= skill.xp_to_next
        skill.xp_to_next = math.floor(skill.xp_to_next * 1.8)
    db.commit()
    db.refresh(skill)
    return skill_to_schema(skill)
