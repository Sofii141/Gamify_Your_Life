import {
  AuthService,
  Router
} from "./chunk-OEGGXVIH.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-YY7JD6DV.js";
import {
  CommonModule,
  NgIf,
  __async,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2HLPR2EO.js";

// src/app/pages/login/login.component.ts
function LoginComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label");
    \u0275\u0275text(2, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_8_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.username, $event) || (ctx_r1.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.username);
    \u0275\u0275property("disabled", ctx_r1.loading());
  }
}
function LoginComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F6AB} ", ctx_r1.error(), " ");
  }
}
function LoginComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "p", 18);
    \u0275\u0275text(2, "\u{1F3AF} Demo Credentials");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate("\u{1F4E7} sofii@gamify.dev");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("\u{1F511} demo123456");
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.isLogin = signal(true);
    this.email = signal("");
    this.password = signal("");
    this.username = signal("");
    this.loading = signal(false);
    this.error = signal("");
  }
  toggleMode() {
    this.isLogin.update((v) => !v);
    this.error.set("");
  }
  submit() {
    return __async(this, null, function* () {
      this.error.set("");
      this.loading.set(true);
      try {
        if (this.isLogin()) {
          yield this.auth.login(this.email(), this.password());
        } else {
          yield this.auth.signup(this.username(), this.email(), this.password());
        }
        this.router.navigate(["/"]);
      } catch (err) {
        this.error.set(err.error?.detail || "Something went wrong");
      } finally {
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 13, consts: [[1, "login-container"], [1, "login-box"], [1, "login-header"], [1, "pixel"], [1, "subtitle"], [1, "login-form", 3, "ngSubmit"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], ["type", "email", "name", "email", "placeholder", "your@email.com", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["type", "password", "name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["class", "error-msg", 4, "ngIf"], ["type", "submit", 1, "login-btn", 3, "disabled"], [1, "login-toggle"], ["type", "button", 1, "toggle-link", 3, "click", "disabled"], ["class", "demo-creds", 4, "ngIf"], ["type", "text", "name", "username", "placeholder", "Choose your name", "required", "", 3, "ngModelChange", "ngModel", "disabled"], [1, "error-msg"], [1, "demo-creds"], [1, "pixel", "demo-title"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "\u2728 Gamify Your Life");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "form", 5);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
          return ctx.submit();
        });
        \u0275\u0275template(8, LoginComponent_div_8_Template, 4, 2, "div", 6);
        \u0275\u0275elementStart(9, "div", 7)(10, "label");
        \u0275\u0275text(11, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 7)(14, "label");
        \u0275\u0275text(15, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, LoginComponent_div_17_Template, 2, 1, "div", 10);
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 12)(21, "span");
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 13);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_23_listener() {
          return ctx.toggleMode();
        });
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, LoginComponent_div_25_Template, 7, 2, "div", 14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.isLogin() ? "Welcome back!" : "Join the adventure!");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.isLogin());
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading() ? "\u23F3 Loading..." : ctx.isLogin() ? "\u2728 Login" : "\u{1F3AE} Create Account", " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.isLogin() ? "Don't have an account?" : "Already have an account?");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isLogin() ? "Sign up" : "Login", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLogin());
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['\n\n.login-container[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-l) 0%,\n      var(--secondary-l) 100%);\n  padding: 1rem;\n}\n.login-box[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 2px solid var(--border);\n  border-radius: 24px;\n  padding: 2.5rem 2rem;\n  width: 100%;\n  max-width: 380px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);\n}\n.login-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--primary-d);\n  margin-bottom: 0.5rem;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.82rem;\n  color: var(--text);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 2px solid var(--border);\n  border-radius: 12px;\n  background: var(--bg-card);\n  font-family: "Nunito", sans-serif;\n  font-size: 0.9rem;\n  color: var(--text);\n  transition: all 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px var(--primary-l);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.error-msg[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  background: #fee;\n  border: 2px solid #fcc;\n  border-radius: 12px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #c33;\n  text-align: center;\n}\n.login-btn[_ngcontent-%COMP%] {\n  padding: 0.9rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-family: "Nunito", sans-serif;\n  font-weight: 800;\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n  margin-top: 0.5rem;\n}\n.login-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);\n}\n.login-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.login-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.login-toggle[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.82rem;\n  color: var(--text-muted);\n}\n.toggle-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary);\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: underline;\n  margin-left: 0.3rem;\n  transition: color 0.2s;\n}\n.toggle-link[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--primary-d);\n}\n.toggle-link[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.demo-creds[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background: var(--primary-l);\n  border: 1.5px solid var(--border);\n  border-radius: 12px;\n  text-align: center;\n}\n.demo-title[_ngcontent-%COMP%] {\n  font-size: 0.52rem;\n  color: var(--primary-d);\n  margin-bottom: 0.5rem;\n}\n.demo-creds[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-family: "Courier New", monospace;\n  color: var(--text);\n  padding: 0.3rem 0;\n  word-break: break-all;\n}\n@media (max-width: 480px) {\n  .login-box[_ngcontent-%COMP%] {\n    padding: 1.75rem 1.25rem;\n  }\n  .login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 0.56rem;\n  }\n  .login-form[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\pages\\login\\login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-AKSIA3RA.js.map
