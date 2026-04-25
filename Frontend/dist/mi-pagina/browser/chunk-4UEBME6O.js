import {
  CommonModule,
  GameService,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A4OUFFOQ.js";

// src/app/pages/skills-page/skills-page.component.ts
var _c0 = (a0) => ({ skill: a0 });
function SkillsPageComponent_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function SkillsPageComponent_button_41_Template_button_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedCategory.set(cat_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--cat-color", cat_r2.color);
    \u0275\u0275classProp("active", ctx_r2.selectedCategory() === cat_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.categoryCount(cat_r2.id));
  }
}
function SkillsPageComponent_ng_container_42_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SkillsPageComponent_ng_container_42_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SkillsPageComponent_ng_container_42_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 31);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const skillCard_r5 = \u0275\u0275reference(46);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", skillCard_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, skill_r4));
  }
}
function SkillsPageComponent_ng_container_42_ng_container_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SkillsPageComponent_ng_container_42_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SkillsPageComponent_ng_container_42_ng_container_14_ng_container_1_Template, 1, 0, "ng-container", 31);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const skill_r6 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const skillCard_r5 = \u0275\u0275reference(46);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", skillCard_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, skill_r6));
  }
}
function SkillsPageComponent_ng_container_42_ng_container_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SkillsPageComponent_ng_container_42_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SkillsPageComponent_ng_container_42_ng_container_21_ng_container_1_Template, 1, 0, "ng-container", 31);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const skill_r7 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const skillCard_r5 = \u0275\u0275reference(46);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", skillCard_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, skill_r7));
  }
}
function SkillsPageComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 25)(2, "div", 26)(3, "span");
    \u0275\u0275text(4, "\u{1F4BB}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Programming ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 27);
    \u0275\u0275template(7, SkillsPageComponent_ng_container_42_ng_container_7_Template, 2, 4, "ng-container", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 25)(9, "div", 29)(10, "span");
    \u0275\u0275text(11, "\u{1F3A8}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Creative ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 27);
    \u0275\u0275template(14, SkillsPageComponent_ng_container_42_ng_container_14_Template, 2, 4, "ng-container", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 25)(16, "div", 30)(17, "span");
    \u0275\u0275text(18, "\u{1F338}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Life ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 27);
    \u0275\u0275template(21, SkillsPageComponent_ng_container_42_ng_container_21_Template, 2, 4, "ng-container", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.programmingSkills());
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.creativeSkills());
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.lifeSkills());
  }
}
function SkillsPageComponent_ng_template_43_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SkillsPageComponent_ng_template_43_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SkillsPageComponent_ng_template_43_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 31);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const skill_r8 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const skillCard_r5 = \u0275\u0275reference(46);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", skillCard_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, skill_r8));
  }
}
function SkillsPageComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 27);
    \u0275\u0275template(2, SkillsPageComponent_ng_template_43_ng_container_2_Template, 2, 4, "ng-container", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.filteredSkills());
  }
}
function SkillsPageComponent_ng_template_45_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1, " +10 XP \u2728 ");
    \u0275\u0275elementEnd();
  }
}
function SkillsPageComponent_ng_template_45_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1, " \u{1F389} LEVEL UP! ");
    \u0275\u0275elementEnd();
  }
}
function SkillsPageComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("mouseenter", function SkillsPageComponent_ng_template_45_Template_div_mouseenter_0_listener() {
      const skill_r10 = \u0275\u0275restoreView(_r9).skill;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hoveredSkill.set(skill_r10.id));
    })("mouseleave", function SkillsPageComponent_ng_template_45_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hoveredSkill.set(null));
    });
    \u0275\u0275element(1, "div", 33);
    \u0275\u0275elementStart(2, "div", 34)(3, "div", 35)(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 37)(7, "span", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 40)(12, "div", 41);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 42);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 43)(17, "div", 44)(18, "span");
    \u0275\u0275text(19, "XP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 45);
    \u0275\u0275element(23, "div", 46)(24, "div", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 48);
    \u0275\u0275listener("click", function SkillsPageComponent_ng_template_45_Template_button_click_25_listener() {
      const skill_r10 = \u0275\u0275restoreView(_r9).skill;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.practice(skill_r10));
    });
    \u0275\u0275elementStart(26, "span", 49);
    \u0275\u0275text(27, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Practice ");
    \u0275\u0275elementStart(29, "span", 50);
    \u0275\u0275text(30, "+10 XP");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, SkillsPageComponent_ng_template_45_div_31_Template, 2, 0, "div", 51)(32, SkillsPageComponent_ng_template_45_div_32_Template, 2, 0, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r10 = ctx.skill;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--sk-color", skill_r10.color)("--sk-bg", skill_r10.bgColor);
    \u0275\u0275classProp("practicing", ctx_r2.isPracticing(skill_r10.id))("levelled-up", ctx_r2.isLevelling(skill_r10.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(skill_r10.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Lv.", skill_r10.level, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.stars(skill_r10.level));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(skill_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(skill_r10.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", skill_r10.xp, "/", skill_r10.xpToNext, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.xpPercent(skill_r10), "%")("background", skill_r10.color);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.xpBurst() === skill_r10.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLevelling(skill_r10.id));
  }
}
var SkillsPageComponent = class _SkillsPageComponent {
  constructor() {
    this.game = inject(GameService);
    this.selectedCategory = signal("All");
    this.hoveredSkill = signal(null);
    this.xpBurst = signal(null);
    this.categories = [
      { id: "All", icon: "\u2726", label: "All Skills", color: "var(--primary)" },
      { id: "Programming", icon: "\u{1F4BB}", label: "Programming", color: "#3776ab" },
      { id: "Creative", icon: "\u{1F3A8}", label: "Creative", color: "#7c3aed" },
      { id: "Life", icon: "\u{1F338}", label: "Life", color: "#be185d" }
    ];
    this.filteredSkills = computed(() => {
      const cat = this.selectedCategory();
      return cat === "All" ? this.game.skills() : this.game.skills().filter((s) => s.category === cat);
    });
    this.programmingSkills = computed(() => this.game.skills().filter((s) => s.category === "Programming"));
    this.creativeSkills = computed(() => this.game.skills().filter((s) => s.category === "Creative"));
    this.lifeSkills = computed(() => this.game.skills().filter((s) => s.category === "Life"));
    this.totalXpEarned = computed(() => this.game.skills().reduce((sum, s) => sum + s.xp, 0));
    this.masteredCount = computed(() => this.game.skills().filter((s) => s.level >= 5).length);
  }
  xpPercent(skill) {
    return Math.min(100, skill.xp / skill.xpToNext * 100);
  }
  stars(level) {
    const filled = Math.min(5, Math.floor((level - 1) / 2) + 1);
    return "\u2605".repeat(filled) + "\u2606".repeat(5 - filled);
  }
  practice(skill) {
    this.game.gainSkillXp(skill.id, 10);
    this.xpBurst.set(skill.id);
    setTimeout(() => this.xpBurst.set(null), 900);
  }
  isPracticing(id) {
    return this.game.practicingSkill() === id;
  }
  isLevelling(id) {
    return this.game.levelledSkill() === id;
  }
  categoryCount(cat) {
    if (cat === "All")
      return this.game.skills().length;
    return this.game.skills().filter((s) => s.category === cat).length;
  }
  static {
    this.\u0275fac = function SkillsPageComponent_Factory(t) {
      return new (t || _SkillsPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkillsPageComponent, selectors: [["app-skills-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 55, vars: 7, consts: [["filteredView", ""], ["skillCard", ""], [1, "skills-page"], [1, "skills-hero"], [1, "hero-text"], [1, "pixel", "hero-title"], [1, "hero-sub"], [1, "stats-chips"], [1, "stat-chip", "chip-blue"], [1, "chip-icon"], [1, "chip-val", "pixel"], [1, "chip-label"], [1, "stat-chip", "chip-pink"], [1, "stat-chip", "chip-purple"], [1, "stat-chip", "chip-green"], [1, "cat-filter"], ["class", "cat-btn", 3, "active", "--cat-color", "click", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "tip-banner"], [1, "tip-icon"], [1, "tip-text"], [1, "cat-btn", 3, "click"], [1, "cat-icon"], [1, "cat-label"], [1, "cat-count"], [1, "skill-section"], [1, "section-tag", "programming-tag"], [1, "grid-3"], [4, "ngFor", "ngForOf"], [1, "section-tag", "creative-tag"], [1, "section-tag", "life-tag"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "skill-card", 3, "mouseenter", "mouseleave"], [1, "card-orb"], [1, "card-top"], [1, "icon-wrap"], [1, "skill-emoji"], [1, "level-col"], [1, "level-badge", "pixel"], [1, "stars"], [1, "card-mid"], [1, "skill-name"], [1, "skill-desc"], [1, "xp-area"], [1, "xp-label"], [1, "xp-track"], [1, "xp-fill"], [1, "xp-shimmer"], [1, "practice-btn", 3, "click"], [1, "btn-spark"], [1, "btn-reward"], ["class", "xp-burst", 4, "ngIf"], ["class", "levelup-badge", 4, "ngIf"], [1, "xp-burst"], [1, "levelup-badge"]], template: function SkillsPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h1", 5);
        \u0275\u0275text(4, "\u2728 Skills & Abilities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 6);
        \u0275\u0275text(6, "Level up your craft, one practice at a time");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "span", 9);
        \u0275\u0275text(10, "\u{1F4BB}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div")(12, "div", 10);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11);
        \u0275\u0275text(15, "Tech Skills");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 12)(17, "span", 9);
        \u0275\u0275text(18, "\u2B50");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div")(20, "div", 10);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 11);
        \u0275\u0275text(23, "Avg Level");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 13)(25, "span", 9);
        \u0275\u0275text(26, "\u26A1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div")(28, "div", 10);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 11);
        \u0275\u0275text(31, "Total XP");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 14)(33, "span", 9);
        \u0275\u0275text(34, "\u{1F3C6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div")(36, "div", 10);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 11);
        \u0275\u0275text(39, "Skills");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(40, "div", 15);
        \u0275\u0275template(41, SkillsPageComponent_button_41_Template, 7, 7, "button", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(42, SkillsPageComponent_ng_container_42_Template, 22, 3, "ng-container", 17)(43, SkillsPageComponent_ng_template_43_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(45, SkillsPageComponent_ng_template_45_Template, 33, 21, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(47, "div", 18)(48, "span", 19);
        \u0275\u0275text(49, "\u{1F4A1}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "span", 20);
        \u0275\u0275text(51, "Click ");
        \u0275\u0275elementStart(52, "strong");
        \u0275\u0275text(53, "Practice");
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, " on any skill to earn XP. Complete quests for bigger rewards! Skills level up automatically when XP is full.");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const filteredView_r11 = \u0275\u0275reference(44);
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.programmingSkills().length);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.game.avgSkillLevel());
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.totalXpEarned());
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.game.skills().length);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedCategory() === "All")("ngIfElse", filteredView_r11);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet], styles: ['@charset "UTF-8";\n\n\n\n.skills-page[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.75rem;\n  max-width: 1200px;\n}\n.skills-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--primary-d);\n  margin-bottom: 0.4rem;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.stats-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.stat-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.65rem 1rem;\n  border-radius: 16px;\n  border: 2px solid;\n  min-width: 90px;\n}\n.chip-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  border-color: #93c5fd;\n}\n.chip-pink[_ngcontent-%COMP%] {\n  background: #fce7f3;\n  border-color: #f9a8d4;\n}\n.chip-purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  border-color: #c4b5fd;\n}\n.chip-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border-color: #86efac;\n}\n.chip-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.chip-val[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: var(--text);\n}\n.chip-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.cat-filter[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n}\n.cat-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.55rem 1.1rem;\n  border-radius: 999px;\n  border: 2px solid var(--border);\n  background: var(--bg-card);\n  font-family: "Nunito", sans-serif;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.cat-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--cat-color, var(--primary));\n  color: var(--text);\n  background: color-mix(in srgb, var(--cat-color, var(--primary)) 8%, white);\n  transform: translateY(-2px);\n}\n.cat-btn.active[_ngcontent-%COMP%] {\n  background: var(--cat-color, var(--primary));\n  border-color: var(--cat-color, var(--primary));\n  color: #fff;\n  box-shadow: 0 4px 14px color-mix(in srgb, var(--cat-color, var(--primary)) 40%, transparent);\n  transform: translateY(-2px);\n}\n.cat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.cat-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3);\n  padding: 0.1rem 0.45rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 800;\n}\n.cat-btn[_ngcontent-%COMP%]:not(.active)   .cat-count[_ngcontent-%COMP%] {\n  background: var(--primary-l);\n  color: var(--primary-d);\n}\n.skill-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.section-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.4rem 0.9rem;\n  border-radius: 10px;\n  font-weight: 800;\n  font-size: 0.88rem;\n  align-self: flex-start;\n}\n.programming-tag[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.creative-tag[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #6d28d9;\n}\n.life-tag[_ngcontent-%COMP%] {\n  background: #fdf2f8;\n  color: #9d174d;\n}\n.grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1rem;\n}\n.skill-card[_ngcontent-%COMP%] {\n  background: var(--sk-bg, #fff);\n  border: 2px solid color-mix(in srgb, var(--sk-color, var(--primary)) 18%, transparent);\n  border-radius: 20px;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  position: relative;\n  overflow: hidden;\n  cursor: default;\n  transition:\n    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),\n    box-shadow 0.25s,\n    border-color 0.25s;\n}\n.skill-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px) scale(1.02);\n  box-shadow: 0 14px 40px color-mix(in srgb, var(--sk-color) 22%, transparent);\n  border-color: color-mix(in srgb, var(--sk-color) 45%, transparent);\n}\n.skill-card.practicing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_cardPulse 0.4s ease;\n}\n.skill-card.levelled-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_levelBurst 0.6s ease;\n  border-color: var(--sk-color) !important;\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--sk-color) 30%, transparent), 0 14px 40px color-mix(in srgb, var(--sk-color) 25%, transparent) !important;\n}\n.card-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -30px;\n  right: -30px;\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      color-mix(in srgb, var(--sk-color) 18%, transparent),\n      transparent 70%);\n  pointer-events: none;\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.icon-wrap[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  background: color-mix(in srgb, var(--sk-color) 12%, white);\n  border: 2px solid color-mix(in srgb, var(--sk-color) 20%, transparent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s;\n}\n.skill-card[_ngcontent-%COMP%]:hover   .icon-wrap[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(-5deg);\n}\n.skill-emoji[_ngcontent-%COMP%] {\n  font-size: 1.65rem;\n}\n.level-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n}\n.level-badge[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  background: var(--sk-color);\n  color: #fff;\n  padding: 0.25rem 0.55rem;\n  border-radius: 8px;\n}\n.stars[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--sk-color);\n  letter-spacing: 1px;\n}\n.card-mid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.skill-name[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 1rem;\n  color: var(--text);\n}\n.skill-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  line-height: 1.4;\n}\n.xp-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.xp-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.xp-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  background: color-mix(in srgb, var(--sk-color) 10%, white);\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1.5px solid color-mix(in srgb, var(--sk-color) 20%, transparent);\n  position: relative;\n}\n.xp-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);\n  position: relative;\n}\n.xp-shimmer[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.4) 50%,\n      transparent 100%);\n  animation: _ngcontent-%COMP%_shimmer 2s infinite;\n  border-radius: 999px;\n}\n.practice-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 100%;\n  padding: 0.6rem;\n  border-radius: 12px;\n  border: 2px solid color-mix(in srgb, var(--sk-color) 35%, transparent);\n  background: color-mix(in srgb, var(--sk-color) 10%, white);\n  color: color-mix(in srgb, var(--sk-color) 80%, black);\n  font-family: "Nunito", sans-serif;\n  font-weight: 800;\n  font-size: 0.88rem;\n  cursor: pointer;\n  margin-top: auto;\n  transition: all 0.15s;\n}\n.practice-btn[_ngcontent-%COMP%]:hover {\n  background: var(--sk-color);\n  color: #fff;\n  border-color: var(--sk-color);\n  transform: scale(1.03);\n  box-shadow: 0 6px 16px color-mix(in srgb, var(--sk-color) 35%, transparent);\n}\n.practice-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.btn-spark[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-reward[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  padding: 0.05rem 0.4rem;\n  border-radius: 6px;\n  font-size: 0.75rem;\n}\n.xp-burst[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--sk-color);\n  color: #fff;\n  font-weight: 900;\n  font-size: 0.9rem;\n  padding: 0.35rem 0.85rem;\n  border-radius: 10px;\n  pointer-events: none;\n  z-index: 10;\n  animation: _ngcontent-%COMP%_floatUpFade 0.9s ease forwards;\n  white-space: nowrap;\n}\n.levelup-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: color-mix(in srgb, var(--sk-color) 85%, transparent);\n  color: #fff;\n  font-weight: 900;\n  font-size: 1.1rem;\n  border-radius: 18px;\n  pointer-events: none;\n  z-index: 11;\n  animation: _ngcontent-%COMP%_levelBadgeAnim 2.5s ease forwards;\n}\n.tip-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.85rem 1.25rem;\n  background: var(--primary-l);\n  border: 2px solid var(--border);\n  border-radius: 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.tip-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_cardPulse {\n  0% {\n    transform: scale(1);\n  }\n  40% {\n    transform: scale(1.04) translateY(-4px);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_levelBurst {\n  0% {\n    transform: scale(1);\n  }\n  30% {\n    transform: scale(1.06);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatUpFade {\n  0% {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-40px);\n  }\n}\n@keyframes _ngcontent-%COMP%_levelBadgeAnim {\n  0% {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n  15% {\n    opacity: 1;\n    transform: scale(1.05);\n  }\n  70% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(200%);\n  }\n}\n@media (max-width: 768px) {\n  .skills-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .skills-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .grid-3[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  }\n}\n/*# sourceMappingURL=skills-page.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkillsPageComponent, { className: "SkillsPageComponent", filePath: "src\\app\\pages\\skills-page\\skills-page.component.ts", lineNumber: 17 });
})();
export {
  SkillsPageComponent
};
//# sourceMappingURL=chunk-4UEBME6O.js.map
