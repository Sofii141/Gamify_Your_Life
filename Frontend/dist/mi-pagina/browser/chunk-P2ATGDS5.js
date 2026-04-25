import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-JZ6HHMZB.js";
import {
  CommonModule,
  GameService,
  NgForOf,
  NgIf,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A4OUFFOQ.js";

// src/app/pages/quests-page/quests-page.component.ts
function QuestsPageComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function QuestsPageComponent_button_17_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activeTab.set(tab_r2.id));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === tab_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", tab_r2.done, "/", tab_r2.total, "");
  }
}
function QuestsPageComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A1 ", ctx_r2.totalXpAvailable(), " XP available");
  }
}
function QuestsPageComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\u{1F389} All done!");
    \u0275\u0275elementEnd();
  }
}
function QuestsPageComponent_li_25_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function QuestsPageComponent_li_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 29)(1, "button", 30);
    \u0275\u0275listener("click", function QuestsPageComponent_li_25_Template_button_click_1_listener() {
      const quest_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.game.toggleQuest(quest_r5.id));
    });
    \u0275\u0275template(2, QuestsPageComponent_li_25_span_2_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34)(7, "span", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 37);
    \u0275\u0275listener("click", function QuestsPageComponent_li_25_Template_button_click_11_listener() {
      const quest_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.game.deleteQuest(quest_r5.id));
    });
    \u0275\u0275text(12, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const quest_r5 = ctx.$implicit;
    \u0275\u0275classProp("done", quest_r5.completed);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", quest_r5.completed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(quest_r5.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+", quest_r5.xpReward, " XP");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1FA99} ", quest_r5.coinReward, "");
  }
}
function QuestsPageComponent_li_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 39)(1, "span");
    \u0275\u0275text(2, "\u2726 No quests here yet \u2014 add one below! \u2726");
    \u0275\u0275elementEnd()();
  }
}
function QuestsPageComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function QuestsPageComponent_div_28_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adding.set(true));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "\uFF0B Add a quest");
    \u0275\u0275elementEnd()();
  }
}
function QuestsPageComponent_div_29_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function QuestsPageComponent_div_29_button_3_Template_button_click_0_listener() {
      const tab_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.newCategory.set(tab_r9.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("sel", ctx_r2.newCategory() === tab_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", tab_r9.icon, " ", tab_r9.label, " ");
  }
}
function QuestsPageComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "input", 42);
    \u0275\u0275listener("ngModelChange", function QuestsPageComponent_div_29_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.newTitle.set($event));
    })("keyup.enter", function QuestsPageComponent_div_29_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addQuest());
    })("keyup.escape", function QuestsPageComponent_div_29_Template_input_keyup_escape_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelAdd());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 43);
    \u0275\u0275template(3, QuestsPageComponent_div_29_button_3_Template, 2, 4, "button", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 45)(5, "button", 46);
    \u0275\u0275listener("click", function QuestsPageComponent_div_29_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addQuest());
    });
    \u0275\u0275text(6, "Add Quest");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 47);
    \u0275\u0275listener("click", function QuestsPageComponent_div_29_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelAdd());
    });
    \u0275\u0275text(8, "Cancel");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.newTitle());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.tabInfos());
  }
}
var QuestsPageComponent = class _QuestsPageComponent {
  constructor() {
    this.game = inject(GameService);
    this.activeTab = signal("daily");
    this.adding = signal(false);
    this.newTitle = signal("");
    this.newCategory = signal("daily");
    this.visibleQuests = computed(() => this.game.quests().filter((q) => q.category === this.activeTab()));
    this.completedCount = computed(() => this.visibleQuests().filter((q) => q.completed).length);
    this.totalXpAvailable = computed(() => this.visibleQuests().filter((q) => !q.completed).reduce((a, q) => a + q.xpReward, 0));
    this.overallCompleted = computed(() => this.game.quests().filter((q) => q.completed).length);
    this.overallTotal = computed(() => this.game.quests().length);
    this.completionRate = computed(() => this.overallTotal() ? Math.round(this.overallCompleted() / this.overallTotal() * 100) : 0);
    this.ringDash = computed(() => `${this.completionRate()}, 100`);
    this.tabInfos = computed(() => {
      const qs = this.game.quests();
      return [
        { id: "daily", icon: "\u{1F338}", label: "Daily", done: qs.filter((q) => q.category === "daily" && q.completed).length, total: qs.filter((q) => q.category === "daily").length },
        { id: "weekly", icon: "\u2B50", label: "Weekly", done: qs.filter((q) => q.category === "weekly" && q.completed).length, total: qs.filter((q) => q.category === "weekly").length },
        { id: "custom", icon: "\u2728", label: "My Quests", done: qs.filter((q) => q.category === "custom" && q.completed).length, total: qs.filter((q) => q.category === "custom").length }
      ];
    });
  }
  addQuest() {
    const t = this.newTitle().trim();
    if (!t)
      return;
    this.game.addQuest(t, this.newCategory());
    this.newTitle.set("");
    this.adding.set(false);
  }
  cancelAdd() {
    this.newTitle.set("");
    this.adding.set(false);
  }
  static {
    this.\u0275fac = function QuestsPageComponent_Factory(t) {
      return new (t || _QuestsPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestsPageComponent, selectors: [["app-quests-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 13, consts: [[1, "quests-page"], [1, "page-header"], [1, "pixel", "page-title"], [1, "page-sub"], [1, "overall-stats"], [1, "progress-ring-wrap"], ["viewBox", "0 0 36 36", 1, "ring-svg"], ["cx", "18", "cy", "18", "r", "15.9", "fill", "none", "stroke", "var(--border)", "stroke-width", "3"], ["cx", "18", "cy", "18", "r", "15.9", "fill", "none", "stroke", "var(--primary)", "stroke-width", "3", "stroke-dashoffset", "25", "stroke-linecap", "round"], [1, "ring-pct", "pixel"], [1, "ring-label"], [1, "tabs"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "quests-container"], [1, "quest-info-bar"], [1, "info-badge"], ["class", "info-xp", 4, "ngIf"], ["class", "all-done", 4, "ngIf"], [1, "quest-list"], ["class", "quest-row", 3, "done", 4, "ngFor", "ngForOf"], ["class", "empty-row", 4, "ngIf"], [1, "add-section"], ["class", "add-trigger", 3, "click", 4, "ngIf"], ["class", "add-form card", 4, "ngIf"], [1, "reset-btn", "btn", "btn-ghost", 3, "click"], [1, "tab-btn", 3, "click"], [1, "tab-count"], [1, "info-xp"], [1, "all-done"], [1, "quest-row"], [1, "check-circle", 3, "click"], ["class", "check-inner", 4, "ngIf"], [1, "quest-body"], [1, "quest-title"], [1, "quest-tags"], [1, "tag", "xp-tag"], [1, "tag", "coin-tag"], ["title", "Delete", 1, "del-btn", 3, "click"], [1, "check-inner"], [1, "empty-row"], [1, "add-trigger", 3, "click"], [1, "add-form", "card"], ["placeholder", "Quest name... \u2728", "autofocus", "", "maxlength", "80", 1, "add-input", 3, "ngModelChange", "keyup.enter", "keyup.escape", "ngModel"], [1, "cat-picker"], ["class", "cat-pill", 3, "sel", "click", 4, "ngFor", "ngForOf"], [1, "form-row"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-ghost", 3, "click"], [1, "cat-pill", 3, "click"]], template: function QuestsPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "\u2694\uFE0F Quest Board");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Complete quests to earn XP and level up!");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 6);
        \u0275\u0275element(10, "circle", 7)(11, "circle", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "span", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 11);
        \u0275\u0275template(17, QuestsPageComponent_button_17_Template, 7, 6, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 13)(19, "div", 14)(20, "span", 15);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, QuestsPageComponent_span_22_Template, 2, 1, "span", 16)(23, QuestsPageComponent_span_23_Template, 2, 0, "span", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "ul", 18);
        \u0275\u0275template(25, QuestsPageComponent_li_25_Template, 13, 6, "li", 19)(26, QuestsPageComponent_li_26_Template, 3, 0, "li", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 21);
        \u0275\u0275template(28, QuestsPageComponent_div_28_Template, 3, 0, "div", 22)(29, QuestsPageComponent_div_29_Template, 9, 2, "div", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "button", 24);
        \u0275\u0275listener("click", function QuestsPageComponent_Template_button_click_30_listener() {
          return ctx.game.resetDailyQuests();
        });
        \u0275\u0275text(31, " \u{1F504} Reset Daily Quests ");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275attribute("stroke-dasharray", ctx.ringDash());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.completionRate(), "%");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.overallCompleted(), "/", ctx.overallTotal(), " done");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.tabInfos());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2("", ctx.completedCount(), "/", ctx.visibleQuests().length, " completed");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.totalXpAvailable() > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.completedCount() === ctx.visibleQuests().length && ctx.visibleQuests().length > 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.visibleQuests());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.visibleQuests().length === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.adding());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.adding());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ['\n\n.quests-page[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  max-width: 860px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--primary-d);\n  margin-bottom: 0.4rem;\n}\n.page-sub[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.overall-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3rem;\n}\n.progress-ring-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 72px;\n  height: 72px;\n}\n.ring-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.ring-svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]:last-child {\n  transition: stroke-dasharray 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.ring-pct[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.48rem;\n  color: var(--primary-d);\n}\n.ring-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.1rem;\n  border-radius: 14px;\n  border: 2px solid var(--border);\n  background: var(--bg-card);\n  font-family: "Nunito", sans-serif;\n  font-weight: 700;\n  font-size: 0.9rem;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.2s;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  background: var(--primary-l);\n  color: var(--text);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n  border-color: var(--primary-d);\n  box-shadow: 0 4px 14px var(--shadow);\n}\n.tab-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  padding: 0.1rem 0.45rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n}\n.tab-btn[_ngcontent-%COMP%]:not(.active)   .tab-count[_ngcontent-%COMP%] {\n  background: var(--primary-l);\n  color: var(--primary-d);\n}\n.quests-container[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 2px solid var(--border);\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px var(--shadow);\n}\n.quest-info-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem 1.25rem;\n  background: var(--primary-l);\n  border-bottom: 2px solid var(--border);\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.info-badge[_ngcontent-%COMP%] {\n  color: var(--primary-d);\n}\n.info-xp[_ngcontent-%COMP%] {\n  color: #d97706;\n  background: #fef9c3;\n  padding: 0.15rem 0.55rem;\n  border-radius: 8px;\n}\n.all-done[_ngcontent-%COMP%] {\n  color: #16a34a;\n  background: #dcfce7;\n  padding: 0.15rem 0.55rem;\n  border-radius: 8px;\n}\n.quest-list[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.quest-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.85rem 1.25rem;\n  border-bottom: 1.5px solid var(--border);\n  transition: background 0.15s;\n}\n.quest-row[_ngcontent-%COMP%]:hover {\n  background: var(--bg);\n}\n.quest-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.quest-row.done[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.quest-row.done[_ngcontent-%COMP%]   .quest-title[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: var(--text-muted);\n}\n.quest-row.done[_ngcontent-%COMP%]   .check-circle[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary-d);\n}\n.quest-row.done[_ngcontent-%COMP%]   .check-inner[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.check-circle[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  border: 2.5px solid var(--border);\n  background: var(--bg-card);\n  cursor: pointer;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n  font-size: 0.85rem;\n}\n.check-circle[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  background: var(--primary-l);\n}\n.check-inner[_ngcontent-%COMP%] {\n  animation: checkBounce 0.25s ease;\n}\n.quest-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.quest-title[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: var(--text);\n}\n.quest-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.35rem;\n  flex-shrink: 0;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.15rem 0.5rem;\n  border-radius: 7px;\n}\n.xp-tag[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.coin-tag[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #713f12;\n}\n.del-btn[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: var(--text-muted);\n  font-size: 1.15rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: all 0.15s;\n  flex-shrink: 0;\n  line-height: 1;\n}\n.quest-row[_ngcontent-%COMP%]:hover   .del-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.del-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.empty-row[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: var(--text-muted);\n  font-size: 0.88rem;\n  font-weight: 600;\n}\n.add-section[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n}\n.add-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.6rem 0.75rem;\n  border-radius: 10px;\n  border: 2px dashed var(--border);\n  color: var(--text-muted);\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.add-trigger[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n  background: var(--primary-l);\n}\n.add-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.add-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 0.9rem;\n  border-radius: 12px;\n  border: 2px solid var(--primary);\n  font-family: "Nunito", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text);\n  background: var(--bg-card);\n  outline: none;\n}\n.cat-picker[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.cat-pill[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.8rem;\n  border-radius: 999px;\n  border: 2px solid var(--border);\n  background: var(--bg);\n  font-family: "Nunito", sans-serif;\n  font-weight: 700;\n  font-size: 0.8rem;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n}\n.cat-pill.sel[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n  border-color: var(--primary-d);\n}\n.cat-pill[_ngcontent-%COMP%]:hover:not(.sel) {\n  border-color: var(--primary);\n  color: var(--text);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n}\n.reset-btn[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=quests-page.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestsPageComponent, { className: "QuestsPageComponent", filePath: "src\\app\\pages\\quests-page\\quests-page.component.ts", lineNumber: 17 });
})();
export {
  QuestsPageComponent
};
//# sourceMappingURL=chunk-P2ATGDS5.js.map
