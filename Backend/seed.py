"""Run once to populate default data for user id=1."""
from datetime import datetime, timezone
from database import SessionLocal, engine, Base
import models

Base.metadata.create_all(bind=engine)

NOW = datetime.now(timezone.utc).isoformat()

DEFAULT_QUESTS = [
    {"id": "d1", "title": "Code for 30 minutes 💻", "category": "daily", "xp_reward": 20, "coin_reward": 10},
    {"id": "d2", "title": "Drink 6-8 glasses of water 💧", "category": "daily", "xp_reward": 10, "coin_reward": 5},
    {"id": "d3", "title": "Take supplements 💊", "category": "daily", "xp_reward": 10, "coin_reward": 5},
    {"id": "d4", "title": "Sleep before midnight 🌙", "category": "daily", "xp_reward": 15, "coin_reward": 8},
    {"id": "d5", "title": "Self-care routine ✨", "category": "daily", "xp_reward": 10, "coin_reward": 5},
    {"id": "w1", "title": "Push code to GitHub 🐙", "category": "weekly", "xp_reward": 50, "coin_reward": 25},
    {"id": "w2", "title": "Solve a LeetCode problem 🧮", "category": "weekly", "xp_reward": 60, "coin_reward": 30},
    {"id": "w3", "title": "Read 1 chapter (tech or fiction) 📚", "category": "weekly", "xp_reward": 30, "coin_reward": 15},
    {"id": "w4", "title": "Exercise 3 times 🏃‍♀️", "category": "weekly", "xp_reward": 50, "coin_reward": 20},
    {"id": "c1", "title": "Finish a side project ✨", "category": "custom", "xp_reward": 100, "coin_reward": 50},
]

DEFAULT_SKILLS = [
    {"id": "python",    "name": "Python",        "icon": "🐍", "level": 1, "xp": 30, "xp_to_next": 80,  "color": "#3776ab", "bg_color": "#dbeafe", "category": "Programming", "description": "The cozy coding language ✨"},
    {"id": "js",        "name": "JavaScript",    "icon": "⚡", "level": 1, "xp": 15, "xp_to_next": 80,  "color": "#ca8a04", "bg_color": "#fef9c3", "category": "Programming", "description": "Make the web magical 🌐"},
    {"id": "ts",        "name": "TypeScript",    "icon": "💙", "level": 1, "xp": 20, "xp_to_next": 80,  "color": "#3178c6", "bg_color": "#eff6ff", "category": "Programming", "description": "Types are your best friend"},
    {"id": "algo",      "name": "Algorithms",    "icon": "🧮", "level": 1, "xp": 5,  "xp_to_next": 80,  "color": "#7e57c2", "bg_color": "#ede7f6", "category": "Programming", "description": "Big brain energy 🧠"},
    {"id": "db",        "name": "Databases",     "icon": "🗄️", "level": 1, "xp": 10, "xp_to_next": 80,  "color": "#ea580c", "bg_color": "#ffedd5", "category": "Programming", "description": "All the data lives here 💾"},
    {"id": "git",       "name": "Git & DevOps",  "icon": "🌿", "level": 1, "xp": 20, "xp_to_next": 80,  "color": "#16a34a", "bg_color": "#dcfce7", "category": "Programming", "description": "Commit, push, repeat 🚀"},
    {"id": "web",       "name": "Web Dev",       "icon": "🌐", "level": 2, "xp": 40, "xp_to_next": 128, "color": "#e91e63", "bg_color": "#fce4ec", "category": "Programming", "description": "Frontend queen 👑"},
    {"id": "cpp",       "name": "C++",           "icon": "⚙️", "level": 1, "xp": 0,  "xp_to_next": 80,  "color": "#0369a1", "bg_color": "#e0f2fe", "category": "Programming", "description": "Low-level power 💪"},
    {"id": "sysdesign", "name": "System Design", "icon": "🏗️", "level": 1, "xp": 0,  "xp_to_next": 80,  "color": "#92400e", "bg_color": "#fef3c7", "category": "Programming", "description": "Architect mode on 🎯"},
    {"id": "uiux",      "name": "UI/UX Design",  "icon": "🎀", "level": 1, "xp": 40, "xp_to_next": 60,  "color": "#db2777", "bg_color": "#fce7f3", "category": "Creative",    "description": "Pretty & usable ✨"},
    {"id": "creativity","name": "Creativity",    "icon": "🎨", "level": 1, "xp": 35, "xp_to_next": 60,  "color": "#7c3aed", "bg_color": "#f3e8ff", "category": "Creative",    "description": "Express yourself 🌈"},
    {"id": "writing",   "name": "Writing",       "icon": "📝", "level": 1, "xp": 10, "xp_to_next": 60,  "color": "#0d9488", "bg_color": "#f0fdfa", "category": "Creative",    "description": "Words have power 💬"},
    {"id": "wellness",  "name": "Wellness",      "icon": "🌸", "level": 1, "xp": 20, "xp_to_next": 50,  "color": "#be185d", "bg_color": "#fdf2f8", "category": "Life",        "description": "Body & mind first 💕"},
    {"id": "social",    "name": "Social",        "icon": "💫", "level": 1, "xp": 5,  "xp_to_next": 50,  "color": "#0891b2", "bg_color": "#ecfeff", "category": "Life",        "description": "Networking & vibes 🤝"},
    {"id": "focus",     "name": "Focus",         "icon": "🎯", "level": 1, "xp": 0,  "xp_to_next": 50,  "color": "#d97706", "bg_color": "#fffbeb", "category": "Life",        "description": "Eyes on the prize 🏆"},
    {"id": "selfcare",  "name": "Self-care",     "icon": "💅", "level": 1, "xp": 30, "xp_to_next": 50,  "color": "#c026d3", "bg_color": "#fdf4ff", "category": "Life",        "description": "Treat yourself! 🛁"},
    {"id": "study",     "name": "Study Habits",  "icon": "📚", "level": 1, "xp": 15, "xp_to_next": 50,  "color": "#4f46e5", "bg_color": "#eef2ff", "category": "Life",        "description": "Consistent & cozy 🏡"},
]


def seed():
    db = SessionLocal()
    try:
        if db.query(models.User).first():
            print("Database already seeded.")
            return

        user = models.User(username="sofia")
        db.add(user)
        db.flush()

        character = models.Character(user_id=user.id)
        db.add(character)

        for q in DEFAULT_QUESTS:
            db.add(models.Quest(user_id=user.id, completed=False, created_at=NOW, **q))

        for s in DEFAULT_SKILLS:
            db.add(models.Skill(user_id=user.id, **s))

        db.commit()
        print("Database seeded successfully!")
    finally:
        db.close()


if __name__ == "__main__":
    seed()
