from pydantic import BaseModel
from typing import Optional


class CharacterSchema(BaseModel):
    name: str
    title: str
    level: int
    xp: int
    xpToNext: int
    hp: int
    maxHp: int
    mana: int
    maxMana: int
    coins: int
    streak: int
    lastCheckIn: Optional[str]
    theme: str
    hairStyle: str
    hairColor: str
    dressColor: str
    avatarMood: str
    eyeColor: str
    skinTone: str
    accessory: str
    accessoryColor: str

    class Config:
        from_attributes = True


class CharacterUpdate(BaseModel):
    name: Optional[str] = None
    title: Optional[str] = None
    level: Optional[int] = None
    xp: Optional[int] = None
    xpToNext: Optional[int] = None
    hp: Optional[int] = None
    maxHp: Optional[int] = None
    mana: Optional[int] = None
    maxMana: Optional[int] = None
    coins: Optional[int] = None
    streak: Optional[int] = None
    lastCheckIn: Optional[str] = None
    theme: Optional[str] = None
    hairStyle: Optional[str] = None
    hairColor: Optional[str] = None
    dressColor: Optional[str] = None
    avatarMood: Optional[str] = None
    eyeColor: Optional[str] = None
    skinTone: Optional[str] = None
    accessory: Optional[str] = None
    accessoryColor: Optional[str] = None


class QuestSchema(BaseModel):
    id: str
    title: str
    category: str
    completed: bool
    xpReward: int
    coinReward: int
    createdAt: str

    class Config:
        from_attributes = True


class QuestCreate(BaseModel):
    title: str
    category: str  # daily | weekly | custom


class SkillSchema(BaseModel):
    id: str
    name: str
    icon: str
    level: int
    xp: int
    xpToNext: int
    color: str
    bgColor: str
    category: str
    description: str

    class Config:
        from_attributes = True


class SkillXpUpdate(BaseModel):
    amount: int


class GameDataSchema(BaseModel):
    character: CharacterSchema
    quests: list[QuestSchema]
    skills: list[SkillSchema]
