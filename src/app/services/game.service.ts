import { Injectable, signal, computed } from '@angular/core';
import { Character, Quest, Skill, GameData } from '../models/game.models';

@Injectable({ providedIn: 'root' })
export class GameService {
  private readonly KEY = 'gamify-life-v2';

  character = signal<Character>(this.defaultCharacter());
  quests    = signal<Quest[]>(this.defaultQuests());
  skills    = signal<Skill[]>(this.defaultSkills());

  dailyQuests   = computed(() => this.quests().filter(q => q.category === 'daily'));
  weeklyQuests  = computed(() => this.quests().filter(q => q.category === 'weekly'));
  customQuests  = computed(() => this.quests().filter(q => q.category === 'custom'));
  xpPercent     = computed(() => Math.min(100, (this.character().xp / this.character().xpToNext) * 100));
  hpPercent     = computed(() => (this.character().hp / this.character().maxHp) * 100);
  manaPercent   = computed(() => (this.character().mana / this.character().maxMana) * 100);

  totalSkillXp  = computed(() => this.skills().reduce((a, s) => a + s.xp + (s.level - 1) * s.xpToNext, 0));
  avgSkillLevel = computed(() => {
    const ss = this.skills();
    return ss.length ? +(ss.reduce((a, s) => a + s.level, 0) / ss.length).toFixed(1) : 0;
  });

  levelUpNotification = signal(false);
  practicingSkill     = signal<string | null>(null);
  levelledSkill       = signal<string | null>(null);

  constructor() { this.load(); }

  /* ── Defaults ── */
  private defaultCharacter(): Character {
    return {
      name: 'Sofia', title: 'Cozy Dev', level: 1,
      xp: 0, xpToNext: 100,
      hp: 100, maxHp: 100, mana: 50, maxMana: 50,
      coins: 50, streak: 0, lastCheckIn: null,
      theme: 'coquette', hairColor: '#fdb4d0', dressColor: '#f48fb1',
      avatarMood: 'happy',
      eyeColor: '#8b5cf6', skinTone: '#ffdec9',
      accessory: 'none', accessoryColor: '#f48fb1'
    };
  }

  private defaultQuests(): Quest[] {
    const now = new Date().toISOString();
    return [
      // Daily
      { id: 'd1', title: 'Code for 30 minutes 💻', category: 'daily', completed: false, xpReward: 20, coinReward: 10, createdAt: now },
      { id: 'd2', title: 'Drink 6-8 glasses of water 💧', category: 'daily', completed: false, xpReward: 10, coinReward: 5, createdAt: now },
      { id: 'd3', title: 'Take supplements 💊', category: 'daily', completed: false, xpReward: 10, coinReward: 5, createdAt: now },
      { id: 'd4', title: 'Sleep before midnight 🌙', category: 'daily', completed: false, xpReward: 15, coinReward: 8, createdAt: now },
      { id: 'd5', title: 'Self-care routine ✨', category: 'daily', completed: false, xpReward: 10, coinReward: 5, createdAt: now },
      // Weekly
      { id: 'w1', title: 'Push code to GitHub 🐙', category: 'weekly', completed: false, xpReward: 50, coinReward: 25, createdAt: now },
      { id: 'w2', title: 'Solve a LeetCode problem 🧮', category: 'weekly', completed: false, xpReward: 60, coinReward: 30, createdAt: now },
      { id: 'w3', title: 'Read 1 chapter (tech or fiction) 📚', category: 'weekly', completed: false, xpReward: 30, coinReward: 15, createdAt: now },
      { id: 'w4', title: 'Exercise 3 times 🏃‍♀️', category: 'weekly', completed: false, xpReward: 50, coinReward: 20, createdAt: now },
      // Custom
      { id: 'c1', title: 'Finish a side project ✨', category: 'custom', completed: false, xpReward: 100, coinReward: 50, createdAt: now },
    ];
  }

  private defaultSkills(): Skill[] {
    return [
      // ── Programming ──
      { id: 'python',    name: 'Python',         icon: '🐍', level: 1, xp: 30, xpToNext: 80, color: '#3776ab', bgColor: '#dbeafe', category: 'Programming', description: 'The cozy coding language ✨' },
      { id: 'js',        name: 'JavaScript',     icon: '⚡', level: 1, xp: 15, xpToNext: 80, color: '#ca8a04', bgColor: '#fef9c3', category: 'Programming', description: 'Make the web magical 🌐' },
      { id: 'ts',        name: 'TypeScript',     icon: '💙', level: 1, xp: 20, xpToNext: 80, color: '#3178c6', bgColor: '#eff6ff', category: 'Programming', description: 'Types are your best friend' },
      { id: 'algo',      name: 'Algorithms',     icon: '🧮', level: 1, xp: 5,  xpToNext: 80, color: '#7e57c2', bgColor: '#ede7f6', category: 'Programming', description: 'Big brain energy 🧠' },
      { id: 'db',        name: 'Databases',      icon: '🗄️', level: 1, xp: 10, xpToNext: 80, color: '#ea580c', bgColor: '#ffedd5', category: 'Programming', description: 'All the data lives here 💾' },
      { id: 'git',       name: 'Git & DevOps',   icon: '🌿', level: 1, xp: 20, xpToNext: 80, color: '#16a34a', bgColor: '#dcfce7', category: 'Programming', description: 'Commit, push, repeat 🚀' },
      { id: 'web',       name: 'Web Dev',        icon: '🌐', level: 2, xp: 40, xpToNext: 128, color: '#e91e63', bgColor: '#fce4ec', category: 'Programming', description: 'Frontend queen 👑' },
      { id: 'cpp',       name: 'C++',            icon: '⚙️', level: 1, xp: 0,  xpToNext: 80, color: '#0369a1', bgColor: '#e0f2fe', category: 'Programming', description: 'Low-level power 💪' },
      { id: 'sysdesign', name: 'System Design',  icon: '🏗️', level: 1, xp: 0,  xpToNext: 80, color: '#92400e', bgColor: '#fef3c7', category: 'Programming', description: 'Architect mode on 🎯' },
      // ── Creative ──
      { id: 'uiux',      name: 'UI/UX Design',   icon: '🎀', level: 1, xp: 40, xpToNext: 60, color: '#db2777', bgColor: '#fce7f3', category: 'Creative', description: 'Pretty & usable ✨' },
      { id: 'creativity',name: 'Creativity',     icon: '🎨', level: 1, xp: 35, xpToNext: 60, color: '#7c3aed', bgColor: '#f3e8ff', category: 'Creative', description: 'Express yourself 🌈' },
      { id: 'writing',   name: 'Writing',        icon: '📝', level: 1, xp: 10, xpToNext: 60, color: '#0d9488', bgColor: '#f0fdfa', category: 'Creative', description: 'Words have power 💬' },
      // ── Life ──
      { id: 'wellness',  name: 'Wellness',       icon: '🌸', level: 1, xp: 20, xpToNext: 50, color: '#be185d', bgColor: '#fdf2f8', category: 'Life', description: 'Body & mind first 💕' },
      { id: 'social',    name: 'Social',         icon: '💫', level: 1, xp: 5,  xpToNext: 50, color: '#0891b2', bgColor: '#ecfeff', category: 'Life', description: 'Networking & vibes 🤝' },
      { id: 'focus',     name: 'Focus',          icon: '🎯', level: 1, xp: 0,  xpToNext: 50, color: '#d97706', bgColor: '#fffbeb', category: 'Life', description: 'Eyes on the prize 🏆' },
      { id: 'selfcare',  name: 'Self-care',      icon: '💅', level: 1, xp: 30, xpToNext: 50, color: '#c026d3', bgColor: '#fdf4ff', category: 'Life', description: 'Treat yourself! 🛁' },
      { id: 'study',     name: 'Study Habits',   icon: '📚', level: 1, xp: 15, xpToNext: 50, color: '#4f46e5', bgColor: '#eef2ff', category: 'Life', description: 'Consistent & cozy 🏡' },
    ];
  }

  /* ── Actions ── */
  checkIn(): boolean {
    const today = new Date().toDateString();
    if (this.character().lastCheckIn === today) return false;
    this.character.update(c => ({ ...c, streak: c.streak + 1, lastCheckIn: today, xp: c.xp + 25, coins: c.coins + 15 }));
    this.checkLevelUp();
    this.save();
    return true;
  }

  canCheckIn(): boolean { return this.character().lastCheckIn !== new Date().toDateString(); }

  toggleQuest(questId: string): void {
    const quest = this.quests().find(q => q.id === questId);
    if (!quest) return;
    const completing = !quest.completed;
    this.quests.update(qs => qs.map(q => q.id === questId ? { ...q, completed: !q.completed } : q));
    this.character.update(c => ({
      ...c,
      xp:    completing ? c.xp + quest.xpReward    : Math.max(0, c.xp - quest.xpReward),
      coins: completing ? c.coins + quest.coinReward : Math.max(0, c.coins - quest.coinReward)
    }));
    if (completing) this.checkLevelUp();
    this.save();
  }

  addQuest(title: string, category: 'daily' | 'weekly' | 'custom'): void {
    const rewards: Record<string, [number, number]> = { daily: [10, 5], weekly: [30, 15], custom: [20, 10] };
    const [xp, coins] = rewards[category];
    this.quests.update(qs => [...qs, { id: Date.now().toString(), title, category, completed: false, xpReward: xp, coinReward: coins, createdAt: new Date().toISOString() }]);
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
    this.practicingSkill.set(skillId);
    let didLevelUp = false;
    this.skills.update(ss => ss.map(s => {
      if (s.id !== skillId) return s;
      const newXp = s.xp + amount;
      if (newXp >= s.xpToNext) {
        didLevelUp = true;
        return { ...s, level: s.level + 1, xp: newXp - s.xpToNext, xpToNext: Math.floor(s.xpToNext * 1.8) };
      }
      return { ...s, xp: newXp };
    }));
    if (didLevelUp) {
      this.levelledSkill.set(skillId);
      setTimeout(() => this.levelledSkill.set(null), 2500);
    }
    setTimeout(() => this.practicingSkill.set(null), 900);
    this.save();
  }

  resetDailyQuests(): void {
    this.quests.update(qs => qs.map(q => q.category === 'daily' ? { ...q, completed: false } : q));
    this.save();
  }

  private checkLevelUp(): void {
    if (this.character().xp >= this.character().xpToNext) {
      this.character.update(c => ({
        ...c, level: c.level + 1, xp: c.xp - c.xpToNext,
        xpToNext: Math.floor(c.xpToNext * 1.6),
        maxHp: c.maxHp + 10, hp: c.maxHp + 10,
        maxMana: c.maxMana + 5, mana: c.maxMana + 5, coins: c.coins + 50
      }));
      this.levelUpNotification.set(true);
      setTimeout(() => this.levelUpNotification.set(false), 3000);
    }
  }

  private save(): void {
    try { localStorage.setItem(this.KEY, JSON.stringify({ character: this.character(), quests: this.quests(), skills: this.skills() } as GameData)); } catch { }
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return;
      const data: GameData = JSON.parse(raw);
      if (data.character) this.character.set({ ...this.defaultCharacter(), ...data.character });
      if (data.quests)    this.quests.set(data.quests);
      if (data.skills)    this.skills.set(data.skills);
    } catch { }
  }
}
