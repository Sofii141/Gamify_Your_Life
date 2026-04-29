import {
  HttpClient,
  __spreadProps,
  __spreadValues,
  computed,
  environment,
  inject,
  signal,
  ɵɵdefineInjectable
} from "./chunk-2HLPR2EO.js";

// src/app/services/api.service.ts
var ApiService = class _ApiService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = environment.apiUrl;
  }
  getGame() {
    return this.http.get(`${this.base}/game`);
  }
  updateCharacter(updates) {
    return this.http.put(`${this.base}/character`, updates);
  }
  checkIn() {
    return this.http.post(`${this.base}/character/check-in`, {});
  }
  addQuest(title, category) {
    return this.http.post(`${this.base}/quests`, { title, category });
  }
  toggleQuest(questId) {
    return this.http.put(`${this.base}/quests/${questId}/toggle`, {});
  }
  deleteQuest(questId) {
    return this.http.delete(`${this.base}/quests/${questId}`);
  }
  resetDailyQuests() {
    return this.http.post(`${this.base}/quests/reset-daily`, {});
  }
  gainSkillXp(skillId, amount) {
    return this.http.put(`${this.base}/skills/${skillId}/xp`, { amount });
  }
  static {
    this.\u0275fac = function ApiService_Factory(t) {
      return new (t || _ApiService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/game.service.ts
var GameService = class _GameService {
  constructor() {
    this.LOCAL_KEY = "gamify-life-v2";
    this.api = inject(ApiService);
    this.character = signal(this.defaultCharacter());
    this.quests = signal(this.defaultQuests());
    this.skills = signal(this.defaultSkills());
    this.loading = signal(true);
    this.dailyQuests = computed(() => this.quests().filter((q) => q.category === "daily"));
    this.weeklyQuests = computed(() => this.quests().filter((q) => q.category === "weekly"));
    this.customQuests = computed(() => this.quests().filter((q) => q.category === "custom"));
    this.xpPercent = computed(() => Math.min(100, this.character().xp / this.character().xpToNext * 100));
    this.hpPercent = computed(() => this.character().hp / this.character().maxHp * 100);
    this.manaPercent = computed(() => this.character().mana / this.character().maxMana * 100);
    this.totalSkillXp = computed(() => this.skills().reduce((a, s) => a + s.xp + (s.level - 1) * s.xpToNext, 0));
    this.avgSkillLevel = computed(() => {
      const ss = this.skills();
      return ss.length ? +(ss.reduce((a, s) => a + s.level, 0) / ss.length).toFixed(1) : 0;
    });
    this.levelUpNotification = signal(false);
    this.practicingSkill = signal(null);
    this.levelledSkill = signal(null);
    this.loadFromBackend();
  }
  /* ── Load ── */
  loadFromBackend() {
    this.loadFromLocal();
    this.api.getGame().subscribe({
      next: (data) => {
        this.character.set(data.character);
        this.quests.set(data.quests);
        this.skills.set(data.skills);
        this.loading.set(false);
        this.saveLocal();
      },
      error: () => {
        console.warn("Backend unavailable, using local cache.");
        this.loading.set(false);
      }
    });
  }
  loadFromLocal() {
    try {
      const raw = localStorage.getItem(this.LOCAL_KEY);
      if (!raw)
        return;
      const data = JSON.parse(raw);
      if (data.character)
        this.character.set(__spreadValues(__spreadValues({}, this.defaultCharacter()), data.character));
      if (data.quests)
        this.quests.set(data.quests);
      if (data.skills)
        this.skills.set(data.skills);
    } catch {
    }
  }
  saveLocal() {
    try {
      localStorage.setItem(this.LOCAL_KEY, JSON.stringify({
        character: this.character(),
        quests: this.quests(),
        skills: this.skills()
      }));
    } catch {
    }
  }
  /* ── Actions ── */
  checkIn() {
    const today = (/* @__PURE__ */ new Date()).toDateString();
    if (this.character().lastCheckIn === today)
      return false;
    this.api.checkIn().subscribe({
      next: (c) => {
        this.character.set(c);
        this.saveLocal();
        this.triggerLevelUp();
      },
      error: () => {
        this.character.update((c) => __spreadProps(__spreadValues({}, c), { streak: c.streak + 1, lastCheckIn: today, xp: c.xp + 25, coins: c.coins + 15 }));
        this.checkLevelUp();
        this.saveLocal();
      }
    });
    return true;
  }
  canCheckIn() {
    return this.character().lastCheckIn !== (/* @__PURE__ */ new Date()).toDateString();
  }
  toggleQuest(questId) {
    const quest = this.quests().find((q) => q.id === questId);
    if (!quest)
      return;
    this.api.toggleQuest(questId).subscribe({
      next: (data) => {
        this.character.set(data.character);
        this.quests.set(data.quests);
        this.skills.set(data.skills);
        this.saveLocal();
        this.triggerLevelUp();
      },
      error: () => {
        const completing = !quest.completed;
        this.quests.update((qs) => qs.map((q) => q.id === questId ? __spreadProps(__spreadValues({}, q), { completed: !q.completed }) : q));
        this.character.update((c) => __spreadProps(__spreadValues({}, c), {
          xp: completing ? c.xp + quest.xpReward : Math.max(0, c.xp - quest.xpReward),
          coins: completing ? c.coins + quest.coinReward : Math.max(0, c.coins - quest.coinReward)
        }));
        if (completing)
          this.checkLevelUp();
        this.saveLocal();
      }
    });
  }
  addQuest(title, category) {
    this.api.addQuest(title, category).subscribe({
      next: (q) => {
        this.quests.update((qs) => [...qs, q]);
        this.saveLocal();
      },
      error: () => {
        const rewards = { daily: [10, 5], weekly: [30, 15], custom: [20, 10] };
        const [xp, coins] = rewards[category];
        this.quests.update((qs) => [...qs, { id: Date.now().toString(), title, category, completed: false, xpReward: xp, coinReward: coins, createdAt: (/* @__PURE__ */ new Date()).toISOString() }]);
        this.saveLocal();
      }
    });
  }
  deleteQuest(questId) {
    this.api.deleteQuest(questId).subscribe({
      next: () => {
        this.quests.update((qs) => qs.filter((q) => q.id !== questId));
        this.saveLocal();
      },
      error: () => {
        this.quests.update((qs) => qs.filter((q) => q.id !== questId));
        this.saveLocal();
      }
    });
  }
  updateCharacter(updates) {
    this.character.update((c) => __spreadValues(__spreadValues({}, c), updates));
    this.api.updateCharacter(updates).subscribe({
      next: (c) => {
        this.character.set(c);
        this.saveLocal();
      },
      error: () => {
        this.saveLocal();
      }
    });
  }
  gainSkillXp(skillId, amount) {
    this.practicingSkill.set(skillId);
    this.api.gainSkillXp(skillId, amount).subscribe({
      next: (updated) => {
        const wasLevel = this.skills().find((s) => s.id === skillId)?.level ?? 1;
        this.skills.update((ss) => ss.map((s) => s.id === skillId ? updated : s));
        if (updated.level > wasLevel) {
          this.levelledSkill.set(skillId);
          setTimeout(() => this.levelledSkill.set(null), 2500);
        }
        this.saveLocal();
      },
      error: () => {
        let didLevelUp = false;
        this.skills.update((ss) => ss.map((s) => {
          if (s.id !== skillId)
            return s;
          const newXp = s.xp + amount;
          if (newXp >= s.xpToNext) {
            didLevelUp = true;
            return __spreadProps(__spreadValues({}, s), { level: s.level + 1, xp: newXp - s.xpToNext, xpToNext: Math.floor(s.xpToNext * 1.8) });
          }
          return __spreadProps(__spreadValues({}, s), { xp: newXp });
        }));
        if (didLevelUp) {
          this.levelledSkill.set(skillId);
          setTimeout(() => this.levelledSkill.set(null), 2500);
        }
        this.saveLocal();
      }
    });
    setTimeout(() => this.practicingSkill.set(null), 900);
  }
  resetDailyQuests() {
    this.api.resetDailyQuests().subscribe({
      next: (quests) => {
        this.quests.set(quests);
        this.saveLocal();
      },
      error: () => {
        this.quests.update((qs) => qs.map((q) => q.category === "daily" ? __spreadProps(__spreadValues({}, q), { completed: false }) : q));
        this.saveLocal();
      }
    });
  }
  triggerLevelUp() {
    if (this.character().level > 1) {
      this.levelUpNotification.set(true);
      setTimeout(() => this.levelUpNotification.set(false), 3e3);
    }
  }
  checkLevelUp() {
    if (this.character().xp >= this.character().xpToNext) {
      this.character.update((c) => __spreadProps(__spreadValues({}, c), {
        level: c.level + 1,
        xp: c.xp - c.xpToNext,
        xpToNext: Math.floor(c.xpToNext * 1.6),
        maxHp: c.maxHp + 10,
        hp: c.maxHp + 10,
        maxMana: c.maxMana + 5,
        mana: c.maxMana + 5,
        coins: c.coins + 50
      }));
      this.levelUpNotification.set(true);
      setTimeout(() => this.levelUpNotification.set(false), 3e3);
    }
  }
  /* ── Defaults ── */
  defaultCharacter() {
    return {
      name: "Sofia",
      title: "Cozy Dev",
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
      theme: "coquette",
      hairStyle: "long",
      hairColor: "#1a1520",
      dressColor: "#c08040",
      avatarMood: "happy",
      eyeColor: "#8b5cf6",
      skinTone: "#ffdec9",
      accessory: "none",
      accessoryColor: "#f48fb1"
    };
  }
  defaultQuests() {
    const now = (/* @__PURE__ */ new Date()).toISOString();
    return [
      { id: "d1", title: "Code for 30 minutes \u{1F4BB}", category: "daily", completed: false, xpReward: 20, coinReward: 10, createdAt: now },
      { id: "d2", title: "Drink 6-8 glasses of water \u{1F4A7}", category: "daily", completed: false, xpReward: 10, coinReward: 5, createdAt: now },
      { id: "d3", title: "Take supplements \u{1F48A}", category: "daily", completed: false, xpReward: 10, coinReward: 5, createdAt: now },
      { id: "d4", title: "Sleep before midnight \u{1F319}", category: "daily", completed: false, xpReward: 15, coinReward: 8, createdAt: now },
      { id: "d5", title: "Self-care routine \u2728", category: "daily", completed: false, xpReward: 10, coinReward: 5, createdAt: now },
      { id: "w1", title: "Push code to GitHub \u{1F419}", category: "weekly", completed: false, xpReward: 50, coinReward: 25, createdAt: now },
      { id: "w2", title: "Solve a LeetCode problem \u{1F9EE}", category: "weekly", completed: false, xpReward: 60, coinReward: 30, createdAt: now },
      { id: "w3", title: "Read 1 chapter (tech or fiction) \u{1F4DA}", category: "weekly", completed: false, xpReward: 30, coinReward: 15, createdAt: now },
      { id: "w4", title: "Exercise 3 times \u{1F3C3}\u200D\u2640\uFE0F", category: "weekly", completed: false, xpReward: 50, coinReward: 20, createdAt: now },
      { id: "c1", title: "Finish a side project \u2728", category: "custom", completed: false, xpReward: 100, coinReward: 50, createdAt: now }
    ];
  }
  defaultSkills() {
    return [
      { id: "python", name: "Python", icon: "\u{1F40D}", level: 1, xp: 30, xpToNext: 80, color: "#3776ab", bgColor: "#dbeafe", category: "Programming", description: "The cozy coding language \u2728" },
      { id: "js", name: "JavaScript", icon: "\u26A1", level: 1, xp: 15, xpToNext: 80, color: "#ca8a04", bgColor: "#fef9c3", category: "Programming", description: "Make the web magical \u{1F310}" },
      { id: "ts", name: "TypeScript", icon: "\u{1F499}", level: 1, xp: 20, xpToNext: 80, color: "#3178c6", bgColor: "#eff6ff", category: "Programming", description: "Types are your best friend" },
      { id: "algo", name: "Algorithms", icon: "\u{1F9EE}", level: 1, xp: 5, xpToNext: 80, color: "#7e57c2", bgColor: "#ede7f6", category: "Programming", description: "Big brain energy \u{1F9E0}" },
      { id: "db", name: "Databases", icon: "\u{1F5C4}\uFE0F", level: 1, xp: 10, xpToNext: 80, color: "#ea580c", bgColor: "#ffedd5", category: "Programming", description: "All the data lives here \u{1F4BE}" },
      { id: "git", name: "Git & DevOps", icon: "\u{1F33F}", level: 1, xp: 20, xpToNext: 80, color: "#16a34a", bgColor: "#dcfce7", category: "Programming", description: "Commit, push, repeat \u{1F680}" },
      { id: "web", name: "Web Dev", icon: "\u{1F310}", level: 2, xp: 40, xpToNext: 128, color: "#e91e63", bgColor: "#fce4ec", category: "Programming", description: "Frontend queen \u{1F451}" },
      { id: "cpp", name: "C++", icon: "\u2699\uFE0F", level: 1, xp: 0, xpToNext: 80, color: "#0369a1", bgColor: "#e0f2fe", category: "Programming", description: "Low-level power \u{1F4AA}" },
      { id: "sysdesign", name: "System Design", icon: "\u{1F3D7}\uFE0F", level: 1, xp: 0, xpToNext: 80, color: "#92400e", bgColor: "#fef3c7", category: "Programming", description: "Architect mode on \u{1F3AF}" },
      { id: "uiux", name: "UI/UX Design", icon: "\u{1F380}", level: 1, xp: 40, xpToNext: 60, color: "#db2777", bgColor: "#fce7f3", category: "Creative", description: "Pretty & usable \u2728" },
      { id: "creativity", name: "Creativity", icon: "\u{1F3A8}", level: 1, xp: 35, xpToNext: 60, color: "#7c3aed", bgColor: "#f3e8ff", category: "Creative", description: "Express yourself \u{1F308}" },
      { id: "writing", name: "Writing", icon: "\u{1F4DD}", level: 1, xp: 10, xpToNext: 60, color: "#0d9488", bgColor: "#f0fdfa", category: "Creative", description: "Words have power \u{1F4AC}" },
      { id: "wellness", name: "Wellness", icon: "\u{1F338}", level: 1, xp: 20, xpToNext: 50, color: "#be185d", bgColor: "#fdf2f8", category: "Life", description: "Body & mind first \u{1F495}" },
      { id: "social", name: "Social", icon: "\u{1F4AB}", level: 1, xp: 5, xpToNext: 50, color: "#0891b2", bgColor: "#ecfeff", category: "Life", description: "Networking & vibes \u{1F91D}" },
      { id: "focus", name: "Focus", icon: "\u{1F3AF}", level: 1, xp: 0, xpToNext: 50, color: "#d97706", bgColor: "#fffbeb", category: "Life", description: "Eyes on the prize \u{1F3C6}" },
      { id: "selfcare", name: "Self-care", icon: "\u{1F485}", level: 1, xp: 30, xpToNext: 50, color: "#c026d3", bgColor: "#fdf4ff", category: "Life", description: "Treat yourself! \u{1F6C1}" },
      { id: "study", name: "Study Habits", icon: "\u{1F4DA}", level: 1, xp: 15, xpToNext: 50, color: "#4f46e5", bgColor: "#eef2ff", category: "Life", description: "Consistent & cozy \u{1F3E1}" }
    ];
  }
  static {
    this.\u0275fac = function GameService_Factory(t) {
      return new (t || _GameService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GameService, factory: _GameService.\u0275fac, providedIn: "root" });
  }
};

export {
  GameService
};
//# sourceMappingURL=chunk-7DFMREMJ.js.map
