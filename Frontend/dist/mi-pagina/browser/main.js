import {
  AuthService,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-OEGGXVIH.js";
import {
  GameService
} from "./chunk-7DFMREMJ.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  computed,
  inject,
  provideHttpClient,
  signal,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2HLPR2EO.js";

// src/app/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate() {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
  static {
    this.\u0275fac = function AuthGuard_Factory(t) {
      return new (t || _AuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
  }
};

// src/app/app.routes.ts
var routes = [
  { path: "login", loadComponent: () => import("./chunk-AKSIA3RA.js").then((m) => m.LoginComponent) },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    loadComponent: () => import("./chunk-IEQED3CU.js").then((m) => m.DashboardComponent)
  },
  {
    path: "quests",
    canActivate: [AuthGuard],
    loadComponent: () => import("./chunk-LZ5VP2KG.js").then((m) => m.QuestsPageComponent)
  },
  {
    path: "skills",
    canActivate: [AuthGuard],
    loadComponent: () => import("./chunk-LBJLNJ37.js").then((m) => m.SkillsPageComponent)
  },
  {
    path: "character",
    canActivate: [AuthGuard],
    loadComponent: () => import("./chunk-7HGXR2LV.js").then((m) => m.CharacterPageComponent)
  },
  {
    path: "settings",
    canActivate: [AuthGuard],
    loadComponent: () => import("./chunk-JBDET647.js").then((m) => m.SettingsComponent)
  },
  {
    path: "calendar",
    canActivate: [AuthGuard],
    loadComponent: () => import("./chunk-TLHEEXTC.js").then((m) => m.CalendarComponent)
  },
  { path: "**", redirectTo: "dashboard" }
];

// src/app/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();
  if (token && !req.url.includes("/auth/")) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptors([authInterceptor]))]
};

// src/app/components/sidebar/sidebar.component.ts
function SidebarComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "GameLife");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span");
    \u0275\u0275text(2, "\u{1F525}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.game.character().streak, " day streak");
  }
}
function SidebarComponent_li_14_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function SidebarComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 14);
    \u0275\u0275listener("click", function SidebarComponent_li_14_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeMobile());
    });
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SidebarComponent_li_14_span_4_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r3.route)("title", item_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.collapsed());
  }
}
function SidebarComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "p", 19);
    \u0275\u0275text(2, "\u2726 level up every day \u2726");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 20);
    \u0275\u0275elementEnd();
  }
}
var SidebarComponent = class _SidebarComponent {
  constructor() {
    this.game = inject(GameService);
    this.collapsed = signal(false);
    this.mobileOpen = signal(false);
    this.nav = [
      { icon: "\u{1F3E0}", label: "Home", route: "/dashboard" },
      { icon: "\u2694\uFE0F", label: "Quests", route: "/quests" },
      { icon: "\u2728", label: "Skills", route: "/skills" },
      { icon: "\u{1F464}", label: "Character", route: "/character" },
      { icon: "\u{1F5D3}\uFE0F", label: "Calendar", route: "/calendar" },
      { icon: "\u2699\uFE0F", label: "Settings", route: "/settings" }
    ];
  }
  toggle() {
    this.collapsed.update((v) => !v);
  }
  openMobile() {
    this.mobileOpen.set(true);
  }
  closeMobile() {
    this.mobileOpen.set(false);
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(t) {
      return new (t || _SidebarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 10, consts: [["aria-label", "Open menu", 1, "hamburger-btn", 3, "click"], [1, "mobile-backdrop", 3, "click"], [1, "sidebar"], [1, "sidebar-top"], [1, "sidebar-logo", 3, "click"], [1, "logo-icon", "pixel"], ["class", "logo-text", 4, "ngIf"], ["aria-label", "Close menu", 1, "mobile-close-btn", 3, "click"], ["class", "streak-badge", 4, "ngIf"], [1, "nav-list"], [4, "ngFor", "ngForOf"], ["class", "sidebar-footer", 4, "ngIf"], [1, "logo-text"], [1, "streak-badge"], ["routerLinkActive", "active", 1, "nav-item", 3, "click", "routerLink", "title"], [1, "nav-icon"], ["class", "nav-label", 4, "ngIf"], [1, "nav-label"], [1, "sidebar-footer"], [1, "footer-quote"], [1, "stars-deco"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function SidebarComponent_Template_button_click_0_listener() {
          return ctx.openMobile();
        });
        \u0275\u0275elementStart(1, "span");
        \u0275\u0275text(2, "\u2630");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275listener("click", function SidebarComponent_Template_div_click_3_listener() {
          return ctx.closeMobile();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 2)(5, "div", 3)(6, "div", 4);
        \u0275\u0275listener("click", function SidebarComponent_Template_div_click_6_listener() {
          return ctx.toggle();
        });
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8, "\u2660");
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, SidebarComponent_span_9_Template, 2, 0, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 7);
        \u0275\u0275listener("click", function SidebarComponent_Template_button_click_10_listener() {
          return ctx.closeMobile();
        });
        \u0275\u0275text(11, "\u2715");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, SidebarComponent_div_12_Template, 5, 1, "div", 8);
        \u0275\u0275elementStart(13, "ul", 9);
        \u0275\u0275template(14, SidebarComponent_li_14_Template, 5, 4, "li", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, SidebarComponent_div_15_Template, 4, 0, "div", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275classProp("visible", ctx.mobileOpen());
        \u0275\u0275advance();
        \u0275\u0275classProp("collapsed", ctx.collapsed())("mobile-open", ctx.mobileOpen());
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.collapsed());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.collapsed());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.nav);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.collapsed());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, RouterLinkActive], styles: ['@charset "UTF-8";\n\n\n\n.hamburger-btn[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 0.85rem;\n  left: 0.85rem;\n  z-index: 300;\n  background: var(--bg-card);\n  border: 2px solid var(--border);\n  border-radius: 12px;\n  width: 42px;\n  height: 42px;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  cursor: pointer;\n  box-shadow: 0 4px 14px var(--shadow);\n  color: var(--primary);\n  transition: all 0.2s;\n}\n.hamburger-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.07);\n  background: var(--primary-l);\n}\n.mobile-backdrop[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.28);\n  z-index: 150;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.mobile-backdrop.visible[_ngcontent-%COMP%] {\n  display: block;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.mobile-close-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  cursor: pointer;\n  color: var(--text-muted);\n  padding: 0.3rem 0.45rem;\n  border-radius: 8px;\n  transition: all 0.15s;\n  line-height: 1;\n}\n.mobile-close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--border);\n  color: var(--text);\n}\n.sidebar-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 200px;\n  min-height: 100vh;\n  background: var(--bg-sidebar);\n  border-right: 2px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  padding: 1.25rem 0.75rem;\n  gap: 1rem;\n  transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  flex-shrink: 0;\n  position: relative;\n}\n.sidebar[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      var(--secondary),\n      var(--accent));\n  border-radius: 0 0 3px 3px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 64px;\n  padding: 1.25rem 0.5rem;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.5rem 0.6rem;\n  cursor: pointer;\n  border-radius: 12px;\n  transition: background 0.15s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.sidebar-logo[_ngcontent-%COMP%]:hover {\n  background: var(--border);\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--primary-d);\n  white-space: nowrap;\n}\n.streak-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: var(--primary-l);\n  border: 1.5px solid var(--border);\n  border-radius: 999px;\n  padding: 0.3rem 0.7rem;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text);\n  white-space: nowrap;\n}\n.nav-list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  flex: 1;\n  margin-top: 0.5rem;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.7rem 0.8rem;\n  border-radius: 12px;\n  text-decoration: none;\n  color: var(--text-muted);\n  font-weight: 700;\n  font-size: 0.9rem;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--primary-l);\n  color: var(--text);\n  transform: translateX(3px);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n  box-shadow: 0 4px 12px var(--shadow);\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  filter: grayscale(0);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  flex-shrink: 0;\n  filter: grayscale(0.3);\n  transition: filter 0.15s;\n}\n.nav-label[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem 0;\n  opacity: 0.55;\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.footer-quote[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  color: var(--text-muted);\n  font-family: "Nunito", sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n@media (max-width: 768px) {\n  .hamburger-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .mobile-close-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 200;\n    width: 240px !important;\n    transform: translateX(-100%);\n    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n    box-shadow: none;\n  }\n  .sidebar.collapsed[_ngcontent-%COMP%] {\n    width: 240px !important;\n    padding: 1.25rem 0.75rem;\n  }\n  .sidebar.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    box-shadow: 8px 0 40px rgba(0, 0, 0, 0.15);\n  }\n  .sidebar[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .sidebar[_ngcontent-%COMP%]   .streak-badge[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .sidebar[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src\\app\\components\\sidebar\\sidebar.component.ts", lineNumber: 15 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.game = inject(GameService);
    this.theme = computed(() => this.game.character().theme);
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "app-shell"], [1, "main-area"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-sidebar");
        \u0275\u0275elementStart(2, "main", 1);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-theme", ctx.theme());
      }
    }, dependencies: [CommonModule, RouterOutlet, SidebarComponent], styles: ["\n\n.app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg);\n  transition: background 0.4s, color 0.4s;\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  min-width: 0;\n}\n@media (max-width: 768px) {\n  .main-area[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 0;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 14 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
