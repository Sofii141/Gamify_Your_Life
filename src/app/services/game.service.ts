import { Injectable, signal, computed } from '@angular/core';
import { Character, Quest, Skill, GameData } from '../models/game.models';

@Injectable({ providedIn: 'root' })
export class GameService {
  private readonly KEY = 'gamify-life-v1';

  character = signal<Character>(this.defaultCharacter());
  quests = signal<Quest[]>(this.defaultQuests());
  skills = signal<Skill[]>(this.defaultSkills());

  dailyQuests = computed(() => this.quests().filter(q => q.category === 'daily'));
  weeklyQuests = computed(() => this.quests().filter(q => q.category === 'weekly'));
  customQuests = computed(() => this.quests().filter(q => q.category === 'custom'));
  completedToday = computed(() => this.quests().filter(q => q.completed).length);
  xpPercent = computed(() => Math.min(100, (this.character().xp / this.character().xpToNext) * 100));
  hpPercent = computed(() => (this.character().hp / this.character().maxHp) * 100);
  manaPercent = computed(() => (this.character().mana / this.character().maxMana) * 100);

  levelUpNotification = signal(false);

  constructor() {
    this.load();
  }

  private defaultCharacter(): Character {
    return {
      name: 'Sofia',
      title: 'Cozy Witch',
      level: 1,
      xp: 0,
      xpToNext: 100,
      hp: 100,
      maxHp: 100,
      mana: 50,
      maxMana: 50,
      coins: 50,
      streak: 0,
      lastCheckIn: null,
      theme: 'coquette',
      hairColor: '#fdb4d0',
      dressColor: '#f2b7b6',
      avatarMood: 'happy'
    };
  }

  private defaultQuests(): Quest[] {
    return [
      { id: '1', title: 'Take supplements', category: 'daily', completed: false, xpReward: 10, coinReward: 5, createdAt: new Date().toISOString() },
      { id: '2', title: 'Sleep early', category: 'daily', completed: false, xpReward: 15, coinReward: 8, createdAt: new Date().toISOString() },
      { id: '3', title: 'Drink 6-8 glasses of water', category: 'daily', completed: false, xpReward: 10, coinReward: 5, createdAt: new Date().toISOString() },
      { id: '4', title: 'Have a healthy meal', category: 'daily', completed: false, xpReward: 20, coinReward: 10, createdAt: new Date().toISOString() },
      { id: '5', title: 'Exercise for 30 min', category: 'weekly', completed: false, xpReward: 50, coinReward: 25, createdAt: new Date().toISOString() },
      { id: '6', title: 'Read a chapter', category: 'weekly', completed: false, xpReward: 30, coinReward: 15, createdAt: new Date().toISOString() },
    ];
  }

  private defaultSkills(): Skill[] {
    return [
      { id: '1', name: 'Wellness', icon: '🌸', level: 1, xp: 20, xpToNext: 50, color: '#d4638a', bgColor: '#fce4ec', category: 'Physical', description: 'Take care of your body' },
      { id: '2', name: 'Knowledge', icon: '📚', level: 1, xp: 10, xpToNext: 50, color: '#5a7a3a', bgColor: '#e8f5e9', category: 'Mental', description: 'Learn something new daily' },
      { id: '3', name: 'Creativity', icon: '🎨', level: 1, xp: 35, xpToNext: 50, color: '#7b5ea7', bgColor: '#ede7f6', category: 'Creative', description: 'Express your art' },
      { id: '4', name: 'Social', icon: '💫', level: 1, xp: 5, xpToNext: 50, color: '#2a7a8a', bgColor: '#e0f7fa', category: 'Social', description: 'Connect with others' },
      { id: '5', name: 'Focus', icon: '🎯', level: 1, xp: 0, xpToNext: 50, color: '#8a6a2a', bgColor: '#fff8e1', category: 'Mental', description: 'Achieve your goals' },
      { id: '6', name: 'Adventure', icon: '✨', level: 1, xp: 15, xpToNext: 50, color: '#c45a3a', bgColor: '#fbe9e7', category: 'Physical', description: 'Explore the world' },
    ];
  }

  checkIn(): boolean {
    const today = new Date().toDateString();
    const c = this.character();
    if (c.lastCheckIn === today) return false;

    this.character.update(ch => ({
      ...ch,
      streak: ch.streak + 1,
      lastCheckIn: today,
      xp: ch.xp + 25,
      coins: ch.coins + 15
    }));
    this.checkLevelUp();
    this.save();
    return true;
  }

  canCheckIn(): boolean {
    return this.character().lastCheckIn !== new Date().toDateString();
  }

  toggleQuest(questId: string): void {
    const quest = this.quests().find(q => q.id === questId);
    if (!quest) return;

    const wasCompleted = quest.completed;
    this.quests.update(qs => qs.map(q => q.id === questId ? { ...q, completed: !q.completed } : q));

    if (!wasCompleted) {
      this.character.update(c => ({ ...c, xp: c.xp + quest.xpReward, coins: c.coins + quest.coinReward }));
      this.checkLevelUp();
    } else {
      this.character.update(c => ({ ...c, xp: Math.max(0, c.xp - quest.xpReward), coins: Math.max(0, c.coins - quest.coinReward) }));
    }
    this.save();
  }

  addQuest(title: string, category: 'daily' | 'weekly' | 'custom'): void {
    const rewards = { daily: [10, 5], weekly: [30, 15], custom: [20, 10] };
    const [xp, coins] = rewards[category];
    this.quests.update(qs => [...qs, {
      id: Date.now().toString(),
      title, category,
      completed: false,
      xpReward: xp,
      coinReward: coins,
      createdAt: new Date().toISOString()
    }]);
    this.save();
  }

  deleteQuest(questId: string): void {
    this.quests.update(qs => qs.filter(q => q.id !== questId));
    this.save();
  }

  updateCharacter(updates: Partial<Character>): void {
    this.character.update(c => ({ ...c, ...updates }));
    this.save();
  }

  gainSkillXp(skillId: string, amount: number): void {
    this.skills.update(ss => ss.map(s => {
      if (s.id !== skillId) return s;
      const newXp = s.xp + amount;
      if (newXp >= s.xpToNext) {
        return { ...s, level: s.level + 1, xp: newXp - s.xpToNext, xpToNext: Math.floor(s.xpToNext * 1.8) };
      }
      return { ...s, xp: newXp };
    }));
    this.save();
  }

  resetDailyQuests(): void {
    this.quests.update(qs => qs.map(q => q.category === 'daily' ? { ...q, completed: false } : q));
    this.save();
  }

  private checkLevelUp(): void {
    const c = this.character();
    if (c.xp >= c.xpToNext) {
      this.character.update(ch => ({
        ...ch,
        level: ch.level + 1,
        xp: ch.xp - ch.xpToNext,
        xpToNext: Math.floor(ch.xpToNext * 1.6),
        maxHp: ch.maxHp + 10,
        hp: ch.maxHp + 10,
        maxMana: ch.maxMana + 5,
        mana: ch.maxMana + 5,
        coins: ch.coins + 50
      }));
      this.levelUpNotification.set(true);
      setTimeout(() => this.levelUpNotification.set(false), 3000);
    }
  }

  private save(): void {
    try {
      localStorage.setItem(this.KEY, JSON.stringify({
        character: this.character(),
        quests: this.quests(),
        skills: this.skills()
      } as GameData));
    } catch { }
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return;
      const data: GameData = JSON.parse(raw);
      if (data.character) this.character.set({ ...this.defaultCharacter(), ...data.character });
      if (data.quests) this.quests.set(data.quests);
      if (data.skills) this.skills.set(data.skills);
    } catch { }
  }
}
