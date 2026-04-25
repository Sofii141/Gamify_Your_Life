import {
  FormsModule
} from "./chunk-JZ6HHMZB.js";
import {
  CommonModule,
  GameService,
  NgForOf,
  NgIf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A4OUFFOQ.js";

// src/app/pages/settings/settings.component.ts
function SettingsComponent_button_10_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275styleProp("background", c_r4);
  }
}
function SettingsComponent_button_10_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function SettingsComponent_button_10_Template_button_click_0_listener() {
      const theme_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTheme(theme_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275template(4, SettingsComponent_button_10_span_4_Template, 1, 2, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SettingsComponent_button_10_span_7_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const theme_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.character.theme === theme_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(theme_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", theme_r2.colors);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(theme_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.character.theme === theme_r2.id);
  }
}
var SettingsComponent = class _SettingsComponent {
  constructor() {
    this.game = inject(GameService);
    this.themes = [
      { id: "coquette", label: "Coquette Pink", icon: "\u{1F338}", colors: ["#f48fb1", "#fce4ed", "#ce93d8"] },
      { id: "sage", label: "Sage Garden", icon: "\u{1F33F}", colors: ["#7cb342", "#dcedc8", "#26a69a"] },
      { id: "dreamy", label: "Dreamy Purple", icon: "\u{1F49C}", colors: ["#7e57c2", "#e8eaf6", "#42a5f5"] },
      { id: "sunset", label: "Sunset Peach", icon: "\u{1F351}", colors: ["#ff7043", "#ffe0b2", "#ffca28"] },
      { id: "misty", label: "Misty Blue", icon: "\u{1F30A}", colors: ["#5a7c9a", "#d5dde8", "#8fa8c0"] },
      { id: "coral", label: "Coral Garden", icon: "\u{1F33A}", colors: ["#d97884", "#fdddd5", "#78a898"] },
      { id: "terra", label: "Terracotta", icon: "\u{1F342}", colors: ["#c06860", "#f0d0c5", "#a8896c"] },
      { id: "blush", label: "Blush & Sage", icon: "\u{1FAE7}", colors: ["#c08888", "#f0d8d8", "#8aa880"] },
      { id: "midnight", label: "Midnight Garden", icon: "\u{1F319}", colors: ["#6878b8", "#d5d8f0", "#9890c8"] }
    ];
  }
  setTheme(id) {
    this.game.updateCharacter({ theme: id });
  }
  resetDaily() {
    this.game.resetDailyQuests();
  }
  get character() {
    return this.game.character();
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(t) {
      return new (t || _SettingsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 61, vars: 8, consts: [[1, "settings-page"], [1, "page-header"], [1, "pixel"], [1, "card", "settings-section"], [1, "section-title", "pixel"], [1, "themes-grid"], ["class", "theme-card", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "info-grid"], [1, "info-row"], [1, "info-label"], [1, "info-val"], [1, "hint"], [1, "info-val", "pixel"], [1, "actions-list"], [1, "action-row"], [1, "action-title"], [1, "action-desc"], [1, "btn", "btn-ghost", 3, "click"], [1, "theme-card", 3, "click"], [1, "theme-icon"], [1, "theme-swatches"], ["class", "swatch", 3, "background", 4, "ngFor", "ngForOf"], [1, "theme-label"], ["class", "active-check", 4, "ngIf"], [1, "swatch"], [1, "active-check"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "\u2699\uFE0F Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Customize your cozy space \u2728");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "section", 3)(7, "h2", 4);
        \u0275\u0275text(8, "\u{1F3A8} Theme");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275template(10, SettingsComponent_button_10_Template, 8, 6, "button", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "section", 3)(12, "h2", 4);
        \u0275\u0275text(13, "\u{1F464} Character");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7)(15, "div", 8)(16, "span", 9);
        \u0275\u0275text(17, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span", 10);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "small", 11);
        \u0275\u0275text(21, "Click name on dashboard to edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 8)(23, "span", 9);
        \u0275\u0275text(24, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 10);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "small", 11);
        \u0275\u0275text(28, "Click title on dashboard to edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 8)(30, "span", 9);
        \u0275\u0275text(31, "Level");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 12);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 8)(35, "span", 9);
        \u0275\u0275text(36, "Total XP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 10);
        \u0275\u0275text(38);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 8)(40, "span", 9);
        \u0275\u0275text(41, "Streak");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "span", 10);
        \u0275\u0275text(43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 8)(45, "span", 9);
        \u0275\u0275text(46, "Coins");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span", 10);
        \u0275\u0275text(48);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(49, "section", 3)(50, "h2", 4);
        \u0275\u0275text(51, "\u{1F527} Actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 13)(53, "div", 14)(54, "div")(55, "div", 15);
        \u0275\u0275text(56, "Reset Daily Quests");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 16);
        \u0275\u0275text(58, "Mark all daily quests as incomplete");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "button", 17);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_59_listener() {
          return ctx.resetDaily();
        });
        \u0275\u0275text(60, "Reset");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.themes);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.character.name);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.character.title);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.character.level);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("", ctx.character.xp, " / ", ctx.character.xpToNext, "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\u{1F525} ", ctx.character.streak, " days");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\u{1FA99} ", ctx.character.coins, "");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule], styles: ['\n\n.settings-page[_ngcontent-%COMP%] {\n  padding: 2rem 1.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  max-width: 720px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--primary-d);\n  margin-bottom: 0.4rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.settings-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  color: var(--text);\n}\n.themes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 0.75rem;\n}\n.theme-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 0.75rem;\n  border-radius: 14px;\n  border: 2px solid var(--border);\n  background: var(--bg);\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n  font-family: "Nunito", sans-serif;\n}\n.theme-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 20px var(--shadow);\n  border-color: var(--primary);\n}\n.theme-card.active[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-l);\n  box-shadow: 0 4px 16px var(--shadow);\n}\n.theme-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.theme-swatches[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.swatch[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(0, 0, 0, 0.08);\n}\n.theme-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text);\n  text-align: center;\n}\n.active-check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  font-size: 0.9rem;\n  font-weight: 900;\n  color: var(--primary-d);\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.6rem 0.75rem;\n  border-radius: 10px;\n  background: var(--bg);\n  border: 1.5px solid var(--border);\n}\n.info-label[_ngcontent-%COMP%] {\n  width: 80px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.info-val[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--text);\n  flex: 1;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.actions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem;\n  border-radius: 10px;\n  background: var(--bg);\n  border: 1.5px solid var(--border);\n}\n.action-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: var(--text);\n}\n.action-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n/*# sourceMappingURL=settings.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src\\app\\pages\\settings\\settings.component.ts", lineNumber: 15 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-AI3BC4KC.js.map
