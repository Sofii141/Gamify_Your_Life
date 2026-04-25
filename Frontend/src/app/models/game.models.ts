export interface Character {
  name: string;
  title: string;
  level: number;
  xp: number;
  xpToNext: number;
  hp: number;
  maxHp: number;
  mana: number;
  maxMana: number;
  coins: number;
  streak: number;
  lastCheckIn: string | null;
  theme: 'coquette' | 'sage' | 'dreamy' | 'sunset' | 'misty' | 'coral' | 'terra' | 'blush' | 'midnight';
  hairStyle: 'long' | 'short' | 'twintails' | 'ponytail' | 'spiky';
  hairColor: string;
  dressColor: string;
  avatarMood: 'happy' | 'neutral' | 'tired' | 'excited';
  eyeColor: string;
  skinTone: string;
  accessory: 'none' | 'headphones' | 'bow' | 'star-clips' | 'glasses' | 'cat-ears' | 'flower' | 'crown' | 'halo';
  accessoryColor: string;
}

export interface Quest {
  id: string;
  title: string;
  category: 'daily' | 'weekly' | 'custom';
  completed: boolean;
  xpReward: number;
  coinReward: number;
  createdAt: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  level: number;
  xp: number;
  xpToNext: number;
  color: string;
  bgColor: string;
  category: string;
  description: string;
}

export interface GameData {
  character: Character;
  quests: Quest[];
  skills: Skill[];
}
