from sqlalchemy import Column, Integer, String, Boolean, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime, timezone
from database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, default="sofia")
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    character = relationship("Character", back_populates="user", uselist=False, cascade="all, delete-orphan")
    quests = relationship("Quest", back_populates="user", cascade="all, delete-orphan")
    skills = relationship("Skill", back_populates="user", cascade="all, delete-orphan")


class Character(Base):
    __tablename__ = "characters"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True)

    name = Column(String, default="Sofia")
    title = Column(String, default="Cozy Dev")
    level = Column(Integer, default=1)
    xp = Column(Integer, default=0)
    xp_to_next = Column(Integer, default=100)
    hp = Column(Integer, default=100)
    max_hp = Column(Integer, default=100)
    mana = Column(Integer, default=50)
    max_mana = Column(Integer, default=50)
    coins = Column(Integer, default=50)
    streak = Column(Integer, default=0)
    last_check_in = Column(String, nullable=True)

    theme = Column(String, default="coquette")
    hair_style = Column(String, default="long")
    hair_color = Column(String, default="#1a1520")
    dress_color = Column(String, default="#c08040")
    avatar_mood = Column(String, default="happy")
    eye_color = Column(String, default="#8b5cf6")
    skin_tone = Column(String, default="#ffdec9")
    accessory = Column(String, default="none")
    accessory_color = Column(String, default="#f48fb1")

    user = relationship("User", back_populates="character")


class Quest(Base):
    __tablename__ = "quests"

    id = Column(String, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String)
    category = Column(String)  # daily | weekly | custom
    completed = Column(Boolean, default=False)
    xp_reward = Column(Integer, default=10)
    coin_reward = Column(Integer, default=5)
    created_at = Column(String)

    user = relationship("User", back_populates="quests")


class Skill(Base):
    __tablename__ = "skills"

    id = Column(String, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    name = Column(String)
    icon = Column(String)
    level = Column(Integer, default=1)
    xp = Column(Integer, default=0)
    xp_to_next = Column(Integer, default=80)
    color = Column(String)
    bg_color = Column(String)
    category = Column(String)
    description = Column(String)

    user = relationship("User", back_populates="skills")
