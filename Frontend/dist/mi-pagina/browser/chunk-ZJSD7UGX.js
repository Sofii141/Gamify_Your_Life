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
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  __async,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-A4OUFFOQ.js";

// src/app/services/avatar-export.service.ts
var AvatarExportService = class _AvatarExportService {
  /**
   * Exports the live SVG pixel-art character as a crisp PNG file.
   *
   * Strategy:
   *  1. Clone the SVG element (only visible DOM nodes are cloned — *ngIf
   *     already removed hidden elements, so we get exactly what the user sees).
   *  2. Replace every CSS custom property (var(--pixel-*)) with its real hex
   *     value from the Character state, because the canvas renderer cannot
   *     resolve CSS variables.
   *  3. Serialise → Blob URL → draw on an <canvas> with
   *     imageSmoothingEnabled = false → export as PNG.
   */
  downloadPng(svgEl, character, scale = 8, filename = "mi-personaje.png") {
    return __async(this, null, function* () {
      const dataUrl = yield this.renderToPng(svgEl, character, scale);
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = filename;
      a.click();
    });
  }
  renderToPng(svgEl, character, scale = 8) {
    return __async(this, null, function* () {
      const cssVars = {
        "--pixel-hair": character.hairColor,
        "--pixel-dress": character.dressColor,
        "--pixel-skin": character.skinTone ?? "#ffdec9",
        "--pixel-eyes": character.eyeColor ?? "#8b5cf6",
        "--pixel-accessory": character.accessoryColor ?? "#f48fb1"
      };
      const clone = svgEl.cloneNode(true);
      clone.querySelectorAll("[fill]").forEach((el) => {
        const raw = el.getAttribute("fill") ?? "";
        const match = raw.match(/var\(\s*(--[\w-]+)\s*\)/);
        if (match) {
          const resolved = cssVars[match[1]];
          if (resolved)
            el.setAttribute("fill", resolved);
        }
      });
      const nativeW = 24;
      const nativeH = 40;
      clone.setAttribute("width", String(nativeW * scale));
      clone.setAttribute("height", String(nativeH * scale));
      clone.setAttribute("viewBox", "0 0 24 40");
      const svgMarkup = new XMLSerializer().serializeToString(clone);
      const blob = new Blob([svgMarkup], { type: "image/svg+xml;charset=utf-8" });
      const blobUrl = URL.createObjectURL(blob);
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = nativeW * scale;
          canvas.height = nativeH * scale;
          const ctx = canvas.getContext("2d");
          ctx.imageSmoothingEnabled = false;
          ctx.drawImage(img, 0, 0);
          URL.revokeObjectURL(blobUrl);
          resolve(canvas.toDataURL("image/png"));
        };
        img.onerror = () => {
          URL.revokeObjectURL(blobUrl);
          reject(new Error("Failed to load SVG for export"));
        };
        img.src = blobUrl;
      });
    });
  }
  static {
    this.\u0275fac = function AvatarExportService_Factory(t) {
      return new (t || _AvatarExportService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AvatarExportService, factory: _AvatarExportService.\u0275fac, providedIn: "root" });
  }
};

// src/app/pages/character-page/character-page.component.ts
var _c0 = ["avatarSvg"];
function CharacterPageComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function CharacterPageComponent_button_10_Template_button_click_0_listener() {
      const s_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setSkin(s_r3.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", s_r3.value);
    \u0275\u0275classProp("active", ctx_r3.game.character().skinTone === s_r3.value);
    \u0275\u0275property("title", s_r3.label);
  }
}
function CharacterPageComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function CharacterPageComponent_button_15_Template_button_click_0_listener() {
      const hs_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setHairStyle(hs_r6.id));
    });
    \u0275\u0275elementStart(1, "span", 100);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 101);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hs_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.hair === hs_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(hs_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(hs_r6.label);
  }
}
function CharacterPageComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275listener("click", function CharacterPageComponent_button_20_Template_button_click_0_listener() {
      const h_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setHair(h_r8.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", h_r8.value);
    \u0275\u0275classProp("active", ctx_r3.game.character().hairColor === h_r8.value);
    \u0275\u0275property("title", h_r8.label);
  }
}
function CharacterPageComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275listener("click", function CharacterPageComponent_button_25_Template_button_click_0_listener() {
      const e_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setEyes(e_r10.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", e_r10.value);
    \u0275\u0275classProp("active", ctx_r3.game.character().eyeColor === e_r10.value);
    \u0275\u0275property("title", e_r10.label);
  }
}
function CharacterPageComponent__svg_g_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 103)(2, "rect", 104);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "g");
  }
}
function CharacterPageComponent__svg_g_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 105)(2, "rect", 106);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 107);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 108)(2, "rect", 109)(3, "rect", 110)(4, "rect", 111)(5, "rect", 112);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 113)(2, "rect", 114)(3, "rect", 115)(4, "rect", 116)(5, "rect", 117)(6, "rect", 118)(7, "rect", 119)(8, "rect", 120)(9, "rect", 121)(10, "rect", 122)(11, "rect", 123)(12, "rect", 124);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 125)(2, "rect", 126)(3, "rect", 127)(4, "rect", 128)(5, "rect", 129)(6, "rect", 130);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 131)(2, "rect", 132)(3, "rect", 133)(4, "rect", 134);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_rect_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 135);
  }
}
function CharacterPageComponent__svg_rect_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 136);
  }
}
function CharacterPageComponent__svg_rect_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "rect", 137);
  }
}
function CharacterPageComponent__svg_g_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 138)(2, "rect", 139)(3, "rect", 140)(4, "rect", 141)(5, "rect", 142)(6, "rect", 143)(7, "rect", 144)(8, "rect", 145)(9, "rect", 146)(10, "rect", 147)(11, "rect", 148);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_92__svg_g_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 159)(2, "rect", 160);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_92__svg_g_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 161)(2, "rect", 162)(3, "rect", 163)(4, "rect", 164);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_92__svg_g_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 165)(2, "rect", 166)(3, "rect", 167)(4, "rect", 168)(5, "rect", 169)(6, "rect", 170);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_92__svg_g_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 171)(2, "rect", 172);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 149)(2, "rect", 150)(3, "rect", 151)(4, "rect", 152)(5, "rect", 153)(6, "rect", 154)(7, "rect", 155)(8, "rect", 156)(9, "rect", 157)(10, "rect", 158);
    \u0275\u0275template(11, CharacterPageComponent__svg_g_92__svg_g_11_Template, 3, 0, "g", 57)(12, CharacterPageComponent__svg_g_92__svg_g_12_Template, 5, 0, "g", 57)(13, CharacterPageComponent__svg_g_92__svg_g_13_Template, 7, 0, "g", 57)(14, CharacterPageComponent__svg_g_92__svg_g_14_Template, 3, 0, "g", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r3.hair === "short" || ctx_r3.hair === "twintails" || ctx_r3.hair === "ponytail");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hair === "long" || !ctx_r3.hair);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hair === "twintails");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.hair === "ponytail");
  }
}
function CharacterPageComponent__svg_g_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 173)(2, "rect", 174)(3, "rect", 175)(4, "rect", 176)(5, "rect", 177);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 178)(2, "rect", 179)(3, "rect", 180)(4, "rect", 181)(5, "rect", 182);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 183)(2, "rect", 184)(3, "rect", 185);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 186)(2, "rect", 187)(3, "rect", 188)(4, "rect", 189)(5, "rect", 190)(6, "rect", 191)(7, "rect", 192)(8, "rect", 193)(9, "rect", 194)(10, "rect", 195)(11, "rect", 196)(12, "rect", 197)(13, "rect", 198);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 199)(2, "rect", 200)(3, "rect", 201)(4, "rect", 202)(5, "rect", 203)(6, "rect", 204);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 205)(2, "rect", 206)(3, "rect", 207)(4, "rect", 208)(5, "rect", 209)(6, "rect", 210)(7, "rect", 211)(8, "rect", 212)(9, "rect", 213);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 214)(2, "rect", 215)(3, "rect", 216)(4, "rect", 217)(5, "rect", 218)(6, "rect", 219)(7, "rect", 220)(8, "rect", 221);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent__svg_g_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g");
    \u0275\u0275element(1, "rect", 222)(2, "rect", 223)(3, "rect", 224)(4, "rect", 225)(5, "rect", 226);
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent_div_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 227);
    \u0275\u0275listener("click", function CharacterPageComponent_div_112_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.tempName = ctx_r3.game.character().name;
      return \u0275\u0275resetView(ctx_r3.editName.set(true));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 228);
    \u0275\u0275text(3, "\u270F\uFE0F");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r3.game.character().name, " ");
  }
}
function CharacterPageComponent_input_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 229);
    \u0275\u0275twoWayListener("ngModelChange", function CharacterPageComponent_input_113_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.tempName, $event) || (ctx_r3.tempName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function CharacterPageComponent_input_113_Template_input_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveName());
    })("blur", function CharacterPageComponent_input_113_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveName());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.tempName);
  }
}
function CharacterPageComponent_div_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 230);
    \u0275\u0275listener("click", function CharacterPageComponent_div_115_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.tempTitle = ctx_r3.game.character().title;
      return \u0275\u0275resetView(ctx_r3.editTitle.set(true));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 228);
    \u0275\u0275text(3, "\u270F\uFE0F");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2726 ", ctx_r3.game.character().title, " \u2726 ");
  }
}
function CharacterPageComponent_input_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 231);
    \u0275\u0275twoWayListener("ngModelChange", function CharacterPageComponent_input_116_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.tempTitle, $event) || (ctx_r3.tempTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function CharacterPageComponent_input_116_Template_input_keyup_enter_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveTitle());
    })("blur", function CharacterPageComponent_input_116_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveTitle());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.tempTitle);
  }
}
function CharacterPageComponent_span_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4E5} Download Avatar");
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent_span_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u23F3 Processing...");
    \u0275\u0275elementEnd();
  }
}
function CharacterPageComponent_button_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275listener("click", function CharacterPageComponent_button_128_Template_button_click_0_listener() {
      const o_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setOutfit(o_r16.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r16 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", o_r16.value);
    \u0275\u0275classProp("active", ctx_r3.game.character().dressColor === o_r16.value);
    \u0275\u0275property("title", o_r16.label);
  }
}
function CharacterPageComponent_button_133_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function CharacterPageComponent_button_133_Template_button_click_0_listener() {
      const a_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setAccessory(a_r18.id));
    });
    \u0275\u0275elementStart(1, "span", 100);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 101);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r18 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.acc === a_r18.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r18.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r18.label);
  }
}
function CharacterPageComponent_div_134_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 102);
    \u0275\u0275listener("click", function CharacterPageComponent_div_134_button_4_Template_button_click_0_listener() {
      const c_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setAccColor(c_r20.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r20 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", c_r20.value);
    \u0275\u0275classProp("active", ctx_r3.game.character().accessoryColor === c_r20.value);
    \u0275\u0275property("title", c_r20.label);
  }
}
function CharacterPageComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
    \u0275\u0275text(2, "\u{1F3A8} Accessory Color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275template(4, CharacterPageComponent_div_134_button_4_Template, 1, 5, "button", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.ACC_COLORS);
  }
}
function CharacterPageComponent_button_140_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 232);
    \u0275\u0275listener("click", function CharacterPageComponent_button_140_Template_button_click_0_listener() {
      const p_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.applyPreset(p_r22));
    });
    \u0275\u0275elementStart(1, "span", 233);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 234)(4, "span", 235);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 236);
    \u0275\u0275element(7, "span", 237)(8, "span", 237)(9, "span", 237);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r22 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r22.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r22.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", p_r22.colors.hair);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", p_r22.colors.dress);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", p_r22.colors.eyes);
  }
}
function CharacterPageComponent_div_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 238)(1, "div", 239);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 240);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 241);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 242);
    \u0275\u0275element(8, "div", 243);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r23 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--sk-color", skill_r23.color)("--sk-bg", skill_r23.bgColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(skill_r23.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(skill_r23.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Lvl ", skill_r23.level, "");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r3.xpPercent(skill_r23.xp, skill_r23.xpToNext), "%")("background", skill_r23.color);
  }
}
function CharacterPageComponent_div_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 244)(1, "span", 245);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 246)(4, "div", 247);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 248);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r24 = ctx.$implicit;
    \u0275\u0275classProp("earned", a_r24.earned)("locked", !a_r24.earned);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r24.earned ? a_r24.icon : "\u{1F512}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r24.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r24.desc);
  }
}
var CharacterPageComponent = class _CharacterPageComponent {
  constructor() {
    this.game = inject(GameService);
    this.exporter = inject(AvatarExportService);
    this.exporting = signal(false);
    this.editName = signal(false);
    this.editTitle = signal(false);
    this.tempName = "";
    this.tempTitle = "";
    this.HAIR_STYLES = [
      { id: "long", label: "Long", icon: "\u{1F469}" },
      { id: "short", label: "Short", icon: "\u{1F9D1}" },
      { id: "twintails", label: "Twintails", icon: "\u{1F467}" },
      { id: "ponytail", label: "Ponytail", icon: "\u{1F471}\u200D\u2640\uFE0F" },
      { id: "spiky", label: "Spiky", icon: "\u{1F466}" }
    ];
    this.HAIR_COLORS = [
      { value: "#1a1a1a", label: "Black" },
      { value: "#8b6914", label: "Dark Brown" },
      { value: "#c68642", label: "Brown" },
      { value: "#f5d896", label: "Blonde" },
      { value: "#e8a0bf", label: "Pink" },
      { value: "#8b4acd", label: "Purple" },
      { value: "#e87070", label: "Red" },
      { value: "#70b8e8", label: "Blue" },
      { value: "#f5a623", label: "Orange" },
      { value: "#e0e0e0", label: "Silver" }
    ];
    this.EYE_COLORS = [
      { value: "#8b5cf6", label: "Purple" },
      { value: "#3b82f6", label: "Blue" },
      { value: "#22c55e", label: "Green" },
      { value: "#f59e0b", label: "Amber" },
      { value: "#ef4444", label: "Red" },
      { value: "#ec4899", label: "Pink" },
      { value: "#8b5e3c", label: "Brown" },
      { value: "#6b7280", label: "Gray" }
    ];
    this.SKIN_TONES = [
      { value: "#ffdec9", label: "Very Light" },
      { value: "#f5c5a3", label: "Light" },
      { value: "#dda07a", label: "Medium" },
      { value: "#c0845a", label: "Tan" },
      { value: "#8b5e3c", label: "Dark" },
      { value: "#6b3c28", label: "Very Dark" }
    ];
    this.OUTFIT_COLORS = [
      { value: "#f48fb1", label: "Pink" },
      { value: "#ce93d8", label: "Lavender" },
      { value: "#7cb342", label: "Sage Green" },
      { value: "#7e57c2", label: "Purple" },
      { value: "#ff7043", label: "Orange" },
      { value: "#5a7c9a", label: "Blue" },
      { value: "#d97884", label: "Coral" },
      { value: "#c06860", label: "Terracotta" },
      { value: "#f5d87a", label: "Yellow" },
      { value: "#e0e0e0", label: "White" }
    ];
    this.ACCESSORIES = [
      { id: "none", label: "None", icon: "\u2728" },
      { id: "headphones", label: "Headphones", icon: "\u{1F3A7}" },
      { id: "bow", label: "Bow", icon: "\u{1F380}" },
      { id: "star-clips", label: "Star Clips", icon: "\u2B50" },
      { id: "glasses", label: "Glasses", icon: "\u{1F453}" },
      { id: "cat-ears", label: "Cat Ears", icon: "\u{1F431}" },
      { id: "flower", label: "Flower", icon: "\u{1F338}" },
      { id: "crown", label: "Crown", icon: "\u{1F451}" },
      { id: "halo", label: "Halo", icon: "\u{1F47C}" }
    ];
    this.ACC_COLORS = [
      { value: "#f48fb1", label: "Pink" },
      { value: "#c0a0f0", label: "Lavender" },
      { value: "#85c4f0", label: "Sky Blue" },
      { value: "#85d4a8", label: "Mint" },
      { value: "#f5d87a", label: "Yellow" },
      { value: "#f0b898", label: "Peach" },
      { value: "#e87070", label: "Red" },
      { value: "#e0e0e0", label: "Silver" },
      { value: "#1a1a1a", label: "Black" }
    ];
    this.PRESETS = [
      { id: "goth", name: "Dark Academia", icon: "\u{1F987}", colors: { hairStyle: "long", hair: "#1a1a1a", dress: "#7e57c2", skin: "#ffdec9", eyes: "#ef4444", acc: "glasses", accColor: "#1a1a1a" } },
      { id: "pastel", name: "Pastel Dream", icon: "\u{1F984}", colors: { hairStyle: "twintails", hair: "#e8a0bf", dress: "#ce93d8", skin: "#ffdec9", eyes: "#8b5cf6", acc: "cat-ears", accColor: "#e8a0bf" } },
      { id: "cyber", name: "Cyber Hacker", icon: "\u{1F4BB}", colors: { hairStyle: "spiky", hair: "#70b8e8", dress: "#1c1c21", skin: "#8b5e3c", eyes: "#ec4899", acc: "headphones", accColor: "#f5a623" } },
      { id: "nature", name: "Cottagecore", icon: "\u{1F33F}", colors: { hairStyle: "short", hair: "#c68642", dress: "#7cb342", skin: "#f5c5a3", eyes: "#22c55e", acc: "flower", accColor: "#f48fb1" } },
      { id: "royal", name: "Royal Coder", icon: "\u{1F451}", colors: { hairStyle: "long", hair: "#e0e0e0", dress: "#f48fb1", skin: "#ffdec9", eyes: "#3b82f6", acc: "crown", accColor: "#f5d87a" } },
      { id: "classic", name: "Cozy Dev", icon: "\u2615", colors: { hairStyle: "ponytail", hair: "#8b6914", dress: "#d97884", skin: "#f5c5a3", eyes: "#8b5e3c", acc: "none", accColor: "#ffffff" } }
    ];
    this.avatarStyle = computed(() => {
      const c = this.game.character();
      return {
        "--pixel-hair": c.hairColor ?? "#8b4acd",
        "--pixel-dress": c.dressColor ?? "#d97884",
        "--pixel-skin": c.skinTone ?? "#f5c5a3",
        "--pixel-eyes": c.eyeColor ?? "#1a1a24",
        "--pixel-accessory": c.accessoryColor ?? "#f5d87a"
      };
    });
  }
  // Getters limpios para forzar tipos en el HTML sin errores
  get hair() {
    return this.game.character().hairStyle ?? "long";
  }
  get acc() {
    return this.game.character().accessory ?? "none";
  }
  get mood() {
    return this.game.character().avatarMood ?? "happy";
  }
  saveName() {
    if (this.tempName.trim())
      this.game.updateCharacter({ name: this.tempName.trim() });
    this.editName.set(false);
  }
  saveTitle() {
    if (this.tempTitle.trim())
      this.game.updateCharacter({ title: this.tempTitle.trim() });
    this.editTitle.set(false);
  }
  setHairStyle(style) {
    this.game.updateCharacter({ hairStyle: style });
  }
  setHair(color) {
    this.game.updateCharacter({ hairColor: color });
  }
  setEyes(color) {
    this.game.updateCharacter({ eyeColor: color });
  }
  setSkin(color) {
    this.game.updateCharacter({ skinTone: color });
  }
  setOutfit(color) {
    this.game.updateCharacter({ dressColor: color });
  }
  setAccessory(acc) {
    this.game.updateCharacter({ accessory: acc });
  }
  setAccColor(color) {
    this.game.updateCharacter({ accessoryColor: color });
  }
  applyPreset(preset) {
    this.game.updateCharacter({
      hairStyle: preset.colors.hairStyle,
      hairColor: preset.colors.hair,
      dressColor: preset.colors.dress,
      skinTone: preset.colors.skin,
      eyeColor: preset.colors.eyes,
      accessory: preset.colors.acc,
      accessoryColor: preset.colors.accColor,
      avatarMood: "happy"
    });
  }
  cycleMood() {
    const next = { happy: "excited", excited: "tired", tired: "happy", neutral: "excited" };
    this.game.updateCharacter({ avatarMood: next[this.mood] ?? "happy" });
  }
  get topSkills() {
    return [...this.game.skills()].sort((a, b) => b.level - a.level || b.xp - a.xp).slice(0, 6);
  }
  get achievements() {
    const c = this.game.character();
    const s = this.game.skills();
    return [
      { icon: "\u{1F525}", label: "Streak Master", desc: `${c.streak} day streak`, earned: c.streak >= 3 },
      { icon: "\u2B50", label: "Level Up!", desc: `Reached level ${c.level}`, earned: c.level >= 2 },
      { icon: "\u{1F4BB}", label: "Code Coder", desc: "Programming skill > 1", earned: s.filter((sk) => sk.category === "Programming").some((sk) => sk.xp > 0 || sk.level > 1) },
      { icon: "\u{1F3A8}", label: "Creative Mind", desc: "Creative skill > 1", earned: s.filter((sk) => sk.category === "Creative").some((sk) => sk.xp > 0 || sk.level > 1) },
      { icon: "\u{1FA99}", label: "Coin Collector", desc: "Earned 100+ coins", earned: c.coins >= 100 },
      { icon: "\u{1F485}", label: "Self-care Pro", desc: "Self-care > 20 xp", earned: (s.find((sk) => sk.id === "selfcare")?.xp ?? 0) > 20 }
    ];
  }
  xpPercent(xp, max) {
    return Math.min(100, xp / max * 100);
  }
  downloadCharacter() {
    return __async(this, null, function* () {
      if (this.exporting())
        return;
      this.exporting.set(true);
      try {
        yield this.exporter.downloadPng(this.avatarSvgRef.nativeElement, this.game.character(), 8, `${this.game.character().name}-pixel.png`);
      } finally {
        this.exporting.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function CharacterPageComponent_Factory(t) {
      return new (t || _CharacterPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CharacterPageComponent, selectors: [["app-character-page"]], viewQuery: function CharacterPageComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.avatarSvgRef = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 183, vars: 57, consts: [["avatarSvg", ""], [1, "character-page"], [1, "studio-layout"], [1, "side-panel", "card"], [1, "panel-h", "pixel"], [1, "panel-content"], [1, "custom-row"], [1, "custom-label"], [1, "swatch-row"], ["class", "swatch skin-swatch", 3, "active", "background", "title", "click", 4, "ngFor", "ngForOf"], [1, "acc-row"], ["class", "acc-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "swatch", 3, "active", "background", "title", "click", 4, "ngFor", "ngForOf"], [1, "mood-row"], [1, "acc-btn", 3, "click"], [1, "center-panel"], [1, "avatar-stage"], [1, "stage-glow"], ["title", "Click to change expression", 1, "avatar-preview", "float", 3, "click", "ngStyle"], ["viewBox", "0 0 32 40", "xmlns", "http://www.w3.org/2000/svg", 1, "pixel-art"], ["cx", "16", "cy", "39", "rx", "8", "ry", "1.5", "fill", "#000000", "opacity", "0.2"], [1, "sprite-body"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["x", "12", "y", "31", "width", "2", "height", "3", "fill", "var(--pixel-skin)"], ["x", "18", "y", "31", "width", "2", "height", "3", "fill", "var(--pixel-skin)"], ["x", "12", "y", "31", "width", "2", "height", "1", "fill", "#000000", "opacity", "0.3"], ["x", "18", "y", "31", "width", "2", "height", "1", "fill", "#000000", "opacity", "0.3"], ["x", "12", "y", "34", "width", "2", "height", "3", "fill", "#2a2a35"], ["x", "18", "y", "34", "width", "2", "height", "3", "fill", "#2a2a35"], ["x", "11", "y", "37", "width", "3", "height", "2", "fill", "#111111"], ["x", "18", "y", "37", "width", "3", "height", "2", "fill", "#111111"], ["x", "11", "y", "37", "width", "1", "height", "1", "fill", "#ffffff", "opacity", "0.4"], ["x", "18", "y", "37", "width", "1", "height", "1", "fill", "#ffffff", "opacity", "0.4"], ["x", "8", "y", "24", "width", "3", "height", "6", "fill", "var(--pixel-dress)"], ["x", "21", "y", "24", "width", "3", "height", "6", "fill", "var(--pixel-dress)"], ["x", "8", "y", "28", "width", "3", "height", "2", "fill", "#000000", "opacity", "0.2"], ["x", "21", "y", "28", "width", "3", "height", "2", "fill", "#000000", "opacity", "0.2"], ["x", "8", "y", "30", "width", "2", "height", "2", "fill", "var(--pixel-skin)"], ["x", "22", "y", "30", "width", "2", "height", "2", "fill", "var(--pixel-skin)"], ["x", "11", "y", "23", "width", "10", "height", "6", "fill", "var(--pixel-dress)"], ["x", "10", "y", "29", "width", "12", "height", "3", "fill", "var(--pixel-dress)"], ["x", "9", "y", "31", "width", "14", "height", "1", "fill", "var(--pixel-dress)"], ["x", "11", "y", "23", "width", "1", "height", "6", "fill", "#000000", "opacity", "0.2"], ["x", "20", "y", "23", "width", "1", "height", "6", "fill", "#000000", "opacity", "0.2"], ["x", "10", "y", "31", "width", "12", "height", "1", "fill", "#000000", "opacity", "0.25"], ["x", "11", "y", "26", "width", "10", "height", "1", "fill", "#000000", "opacity", "0.15"], ["x", "13", "y", "23", "width", "6", "height", "2", "fill", "#ffffff"], ["x", "14", "y", "25", "width", "4", "height", "1", "fill", "#dddddd"], ["x", "15", "y", "24", "width", "2", "height", "3", "fill", "#222222"], [1, "sprite-head"], ["x", "14", "y", "21", "width", "4", "height", "3", "fill", "var(--pixel-skin)"], ["x", "14", "y", "21", "width", "4", "height", "2", "fill", "#000000", "opacity", "0.25"], ["x", "8", "y", "10", "width", "16", "height", "12", "fill", "var(--pixel-skin)"], ["x", "7", "y", "11", "width", "18", "height", "10", "fill", "var(--pixel-skin)"], ["x", "7", "y", "11", "width", "18", "height", "3", "fill", "#000000", "opacity", "0.1"], [4, "ngIf"], ["x", "7", "y", "17", "width", "2", "height", "1", "fill", "#ff7790", "opacity", "0.5"], ["x", "23", "y", "17", "width", "2", "height", "1", "fill", "#ff7790", "opacity", "0.5"], ["x", "15", "y", "18", "width", "2", "height", "1", "fill", "#d97382", 4, "ngIf"], ["x", "14", "y", "18", "width", "4", "height", "2", "fill", "#d97382", 4, "ngIf"], ["x", "15", "y", "18", "width", "2", "height", "1", "fill", "#9a8c98", 4, "ngIf"], [1, "avatar-sparkles"], [1, "sp", "sp1"], [1, "sp", "sp2"], [1, "sp", "sp3"], [1, "identity-card", "card"], [1, "lvl-badge", "pixel"], [1, "name-row"], ["class", "char-name pixel", 3, "click", 4, "ngIf"], ["class", "edit-input name-in", "autofocus", "", "maxlength", "20", 3, "ngModel", "ngModelChange", "keyup.enter", "blur", 4, "ngIf"], [1, "title-row"], ["class", "char-title", 3, "click", 4, "ngIf"], ["class", "edit-input title-in", "autofocus", "", "maxlength", "30", 3, "ngModel", "ngModelChange", "keyup.enter", "blur", 4, "ngIf"], ["title", "Download transparent PNG", 1, "export-btn", 3, "click", "disabled"], ["class", "custom-row", 4, "ngIf"], [1, "divider"], [1, "preset-grid"], ["class", "preset-btn", 3, "click", 4, "ngFor", "ngForOf"], [1, "bottom-layout"], [1, "stats-bar", "card"], [1, "stat-box"], [1, "sbox-icon"], [1, "sbox-val", "pixel"], [1, "sbox-lbl"], [1, "xp-section-wide"], [1, "xp-row"], [1, "pixel", 2, "font-size", ".6rem"], [1, "xp-numbers"], [1, "progress-track"], [1, "progress-fill"], [1, "bottom-grids"], [1, "section-card", "card"], [1, "section-h", "pixel"], [1, "top-skills-grid"], ["class", "ts-card", 3, "--sk-color", "--sk-bg", 4, "ngFor", "ngForOf"], [1, "achievements-grid"], ["class", "achievement", 3, "earned", "locked", 4, "ngFor", "ngForOf"], [1, "swatch", "skin-swatch", 3, "click", "title"], [1, "acc-icon"], [1, "acc-label"], [1, "swatch", 3, "click", "title"], ["x", "5", "y", "8", "width", "22", "height", "10", "fill", "var(--pixel-hair)"], ["x", "5", "y", "15", "width", "22", "height", "3", "fill", "#000000", "opacity", "0.15"], ["x", "17", "y", "4", "width", "10", "height", "22", "fill", "var(--pixel-hair)"], ["x", "17", "y", "20", "width", "10", "height", "6", "fill", "#000000", "opacity", "0.15"], ["x", "6", "y", "8", "width", "20", "height", "5", "fill", "var(--pixel-hair)"], ["x", "6", "y", "8", "width", "20", "height", "2", "fill", "var(--pixel-hair)"], ["x", "4", "y", "10", "width", "24", "height", "23", "fill", "var(--pixel-hair)"], ["x", "4", "y", "27", "width", "24", "height", "6", "fill", "#000000", "opacity", "0.2"], ["x", "5", "y", "33", "width", "22", "height", "2", "fill", "#000000", "opacity", "0.3"], ["x", "4", "y", "20", "width", "24", "height", "15", "fill", "#000000", "opacity", "0.1"], ["x", "9", "y", "14", "width", "4", "height", "4", "fill", "#1a1a24"], ["x", "19", "y", "14", "width", "4", "height", "4", "fill", "#1a1a24"], ["x", "8", "y", "14", "width", "1", "height", "1", "fill", "#1a1a24"], ["x", "23", "y", "14", "width", "1", "height", "1", "fill", "#1a1a24"], ["x", "10", "y", "15", "width", "2", "height", "3", "fill", "var(--pixel-eyes)"], ["x", "20", "y", "15", "width", "2", "height", "3", "fill", "var(--pixel-eyes)"], ["x", "10", "y", "15", "width", "2", "height", "1", "fill", "#000000", "opacity", "0.6"], ["x", "20", "y", "15", "width", "2", "height", "1", "fill", "#000000", "opacity", "0.6"], ["x", "11", "y", "15", "width", "1", "height", "2", "fill", "#ffffff"], ["x", "21", "y", "15", "width", "1", "height", "2", "fill", "#ffffff"], ["x", "10", "y", "17", "width", "2", "height", "1", "fill", "#ffffff", "opacity", "0.3"], ["x", "20", "y", "17", "width", "2", "height", "1", "fill", "#ffffff", "opacity", "0.3"], ["x", "9", "y", "16", "width", "4", "height", "2", "fill", "#1a1a24"], ["x", "19", "y", "16", "width", "4", "height", "2", "fill", "#1a1a24"], ["x", "8", "y", "16", "width", "1", "height", "1", "fill", "#1a1a24"], ["x", "23", "y", "16", "width", "1", "height", "1", "fill", "#1a1a24"], ["x", "10", "y", "17", "width", "2", "height", "1", "fill", "var(--pixel-eyes)"], ["x", "20", "y", "17", "width", "2", "height", "1", "fill", "var(--pixel-eyes)"], ["x", "7", "y", "13", "width", "1", "height", "1", "fill", "#ffd700"], ["x", "24", "y", "13", "width", "1", "height", "1", "fill", "#ffd700"], ["x", "10", "y", "12", "width", "1", "height", "1", "fill", "#ffd700"], ["x", "21", "y", "12", "width", "1", "height", "1", "fill", "#ffd700"], ["x", "15", "y", "18", "width", "2", "height", "1", "fill", "#d97382"], ["x", "14", "y", "18", "width", "4", "height", "2", "fill", "#d97382"], ["x", "15", "y", "18", "width", "2", "height", "1", "fill", "#9a8c98"], ["x", "7", "y", "3", "width", "18", "height", "6", "fill", "var(--pixel-hair)"], ["x", "8", "y", "2", "width", "3", "height", "2", "fill", "var(--pixel-hair)"], ["x", "13", "y", "2", "width", "4", "height", "2", "fill", "var(--pixel-hair)"], ["x", "20", "y", "2", "width", "3", "height", "2", "fill", "var(--pixel-hair)"], ["x", "6", "y", "9", "width", "20", "height", "3", "fill", "var(--pixel-hair)"], ["x", "6", "y", "12", "width", "2", "height", "2", "fill", "var(--pixel-hair)"], ["x", "10", "y", "12", "width", "3", "height", "1", "fill", "var(--pixel-hair)"], ["x", "15", "y", "12", "width", "2", "height", "2", "fill", "var(--pixel-hair)"], ["x", "20", "y", "12", "width", "3", "height", "1", "fill", "var(--pixel-hair)"], ["x", "24", "y", "12", "width", "2", "height", "2", "fill", "var(--pixel-hair)"], ["x", "9", "y", "6", "width", "14", "height", "1", "fill", "#ffffff", "opacity", "0.25"], ["x", "8", "y", "5", "width", "16", "height", "5", "fill", "var(--pixel-hair)"], ["x", "9", "y", "4", "width", "14", "height", "1", "fill", "var(--pixel-hair)"], ["x", "6", "y", "7", "width", "20", "height", "5", "fill", "var(--pixel-hair)"], ["x", "6", "y", "12", "width", "4", "height", "2", "fill", "var(--pixel-hair)"], ["x", "12", "y", "12", "width", "8", "height", "1", "fill", "var(--pixel-hair)"], ["x", "22", "y", "12", "width", "4", "height", "2", "fill", "var(--pixel-hair)"], ["x", "14", "y", "13", "width", "3", "height", "1", "fill", "var(--pixel-hair)"], ["x", "9", "y", "7", "width", "14", "height", "1", "fill", "#ffffff", "opacity", "0.25"], ["x", "8", "y", "8", "width", "1", "height", "1", "fill", "#ffffff", "opacity", "0.25"], ["x", "23", "y", "8", "width", "1", "height", "1", "fill", "#ffffff", "opacity", "0.25"], ["x", "5", "y", "11", "width", "3", "height", "5", "fill", "var(--pixel-hair)"], ["x", "24", "y", "11", "width", "3", "height", "5", "fill", "var(--pixel-hair)"], ["x", "5", "y", "11", "width", "3", "height", "11", "fill", "var(--pixel-hair)"], ["x", "24", "y", "11", "width", "3", "height", "11", "fill", "var(--pixel-hair)"], ["x", "5", "y", "19", "width", "3", "height", "3", "fill", "#000000", "opacity", "0.3"], ["x", "24", "y", "19", "width", "3", "height", "3", "fill", "#000000", "opacity", "0.3"], ["x", "1", "y", "10", "width", "6", "height", "18", "fill", "var(--pixel-hair)"], ["x", "25", "y", "10", "width", "6", "height", "18", "fill", "var(--pixel-hair)"], ["x", "3", "y", "9", "width", "4", "height", "3", "fill", "var(--pixel-accessory)"], ["x", "25", "y", "9", "width", "4", "height", "3", "fill", "var(--pixel-accessory)"], ["x", "4", "y", "9", "width", "1", "height", "1", "fill", "#ffffff", "opacity", "0.5"], ["x", "26", "y", "9", "width", "1", "height", "1", "fill", "#ffffff", "opacity", "0.5"], ["x", "17", "y", "4", "width", "4", "height", "4", "fill", "var(--pixel-accessory)"], ["x", "18", "y", "4", "width", "1", "height", "1", "fill", "#ffffff", "opacity", "0.5"], ["x", "6", "y", "4", "width", "20", "height", "2", "fill", "var(--pixel-accessory)"], ["x", "3", "y", "11", "width", "3", "height", "7", "fill", "var(--pixel-accessory)"], ["x", "26", "y", "11", "width", "3", "height", "7", "fill", "var(--pixel-accessory)"], ["x", "4", "y", "12", "width", "1", "height", "5", "fill", "#ffffff", "opacity", "0.4"], ["x", "27", "y", "12", "width", "1", "height", "5", "fill", "#ffffff", "opacity", "0.4"], ["x", "13", "y", "4", "width", "6", "height", "4", "fill", "var(--pixel-accessory)"], ["x", "12", "y", "5", "width", "8", "height", "2", "fill", "var(--pixel-accessory)"], ["x", "15", "y", "5", "width", "2", "height", "2", "fill", "#000000", "opacity", "0.2"], ["x", "14", "y", "4", "width", "1", "height", "1", "fill", "#ffffff", "opacity", "0.4"], ["x", "17", "y", "4", "width", "1", "height", "1", "fill", "#ffffff", "opacity", "0.4"], ["x", "23", "y", "12", "width", "1", "height", "4", "fill", "var(--pixel-accessory)"], ["x", "22", "y", "13", "width", "3", "height", "2", "fill", "var(--pixel-accessory)"], ["x", "23", "y", "13", "width", "1", "height", "1", "fill", "#ffffff", "opacity", "0.5"], ["x", "7", "y", "13", "width", "7", "height", "6", "fill", "#ffffff", "opacity", "0.15"], ["x", "18", "y", "13", "width", "7", "height", "6", "fill", "#ffffff", "opacity", "0.15"], ["x", "7", "y", "13", "width", "7", "height", "1", "fill", "var(--pixel-accessory)"], ["x", "7", "y", "18", "width", "7", "height", "1", "fill", "var(--pixel-accessory)"], ["x", "7", "y", "14", "width", "1", "height", "4", "fill", "var(--pixel-accessory)"], ["x", "13", "y", "14", "width", "1", "height", "4", "fill", "var(--pixel-accessory)"], ["x", "18", "y", "13", "width", "7", "height", "1", "fill", "var(--pixel-accessory)"], ["x", "18", "y", "18", "width", "7", "height", "1", "fill", "var(--pixel-accessory)"], ["x", "18", "y", "14", "width", "1", "height", "4", "fill", "var(--pixel-accessory)"], ["x", "24", "y", "14", "width", "1", "height", "4", "fill", "var(--pixel-accessory)"], ["x", "14", "y", "14", "width", "4", "height", "1", "fill", "var(--pixel-accessory)"], ["x", "8", "y", "14", "width", "2", "height", "1", "fill", "#ffffff", "opacity", "0.5"], ["x", "19", "y", "14", "width", "2", "height", "1", "fill", "#ffffff", "opacity", "0.5"], ["x", "6", "y", "2", "width", "4", "height", "4", "fill", "var(--pixel-accessory)"], ["x", "7", "y", "0", "width", "2", "height", "2", "fill", "var(--pixel-accessory)"], ["x", "7", "y", "2", "width", "2", "height", "2", "fill", "#ffb6c1", "opacity", "0.8"], ["x", "22", "y", "2", "width", "4", "height", "4", "fill", "var(--pixel-accessory)"], ["x", "23", "y", "0", "width", "2", "height", "2", "fill", "var(--pixel-accessory)"], ["x", "23", "y", "2", "width", "2", "height", "2", "fill", "#ffb6c1", "opacity", "0.8"], ["x", "22", "y", "7", "width", "5", "height", "5", "fill", "var(--pixel-accessory)"], ["x", "23", "y", "6", "width", "3", "height", "1", "fill", "var(--pixel-accessory)"], ["x", "23", "y", "12", "width", "3", "height", "1", "fill", "var(--pixel-accessory)"], ["x", "21", "y", "8", "width", "1", "height", "3", "fill", "var(--pixel-accessory)"], ["x", "27", "y", "8", "width", "1", "height", "3", "fill", "var(--pixel-accessory)"], ["x", "22", "y", "7", "width", "3", "height", "1", "fill", "#ffffff", "opacity", "0.4"], ["x", "22", "y", "11", "width", "5", "height", "1", "fill", "#000000", "opacity", "0.2"], ["x", "23", "y", "8", "width", "3", "height", "3", "fill", "#ffffff"], ["x", "24", "y", "9", "width", "1", "height", "1", "fill", "#ffd700"], ["x", "11", "y", "3", "width", "10", "height", "3", "fill", "var(--pixel-accessory)"], ["x", "11", "y", "1", "width", "2", "height", "2", "fill", "var(--pixel-accessory)"], ["x", "15", "y", "1", "width", "2", "height", "2", "fill", "var(--pixel-accessory)"], ["x", "19", "y", "1", "width", "2", "height", "2", "fill", "var(--pixel-accessory)"], ["x", "11", "y", "5", "width", "10", "height", "1", "fill", "#000000", "opacity", "0.2"], ["x", "15", "y", "3", "width", "2", "height", "1", "fill", "#ffffff"], ["x", "11", "y", "3", "width", "1", "height", "1", "fill", "#ffffff", "opacity", "0.5"], ["x", "20", "y", "3", "width", "1", "height", "1", "fill", "#ffffff", "opacity", "0.5"], ["x", "10", "y", "0", "width", "12", "height", "1", "fill", "var(--pixel-accessory)"], ["x", "8", "y", "1", "width", "2", "height", "2", "fill", "var(--pixel-accessory)"], ["x", "22", "y", "1", "width", "2", "height", "2", "fill", "var(--pixel-accessory)"], ["x", "10", "y", "3", "width", "12", "height", "1", "fill", "var(--pixel-accessory)"], ["x", "10", "y", "0", "width", "12", "height", "1", "fill", "#ffffff", "opacity", "0.6"], [1, "char-name", "pixel", 3, "click"], [1, "edit-pen"], ["autofocus", "", "maxlength", "20", 1, "edit-input", "name-in", 3, "ngModelChange", "keyup.enter", "blur", "ngModel"], [1, "char-title", 3, "click"], ["autofocus", "", "maxlength", "30", 1, "edit-input", "title-in", 3, "ngModelChange", "keyup.enter", "blur", "ngModel"], [1, "preset-btn", 3, "click"], [1, "preset-icon"], [1, "preset-info"], [1, "preset-name"], [1, "preset-dots"], [1, "p-dot"], [1, "ts-card"], [1, "ts-icon"], [1, "ts-name"], [1, "ts-lvl", "pixel"], [1, "ts-bar"], [1, "ts-fill"], [1, "achievement"], [1, "ach-icon"], [1, "ach-info"], [1, "ach-label"], [1, "ach-desc"]], template: function CharacterPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2", 4);
        \u0275\u0275text(4, "\u{1F9EC} Appearance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "span", 7);
        \u0275\u0275text(8, "\u{1F90E} Skin Tone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275template(10, CharacterPageComponent_button_10_Template, 1, 5, "button", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6)(12, "span", 7);
        \u0275\u0275text(13, "\u2702\uFE0F Hair Style");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10);
        \u0275\u0275template(15, CharacterPageComponent_button_15_Template, 5, 4, "button", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 6)(17, "span", 7);
        \u0275\u0275text(18, "\u{1F487} Hair Color");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 8);
        \u0275\u0275template(20, CharacterPageComponent_button_20_Template, 1, 5, "button", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 6)(22, "span", 7);
        \u0275\u0275text(23, "\u{1F441}\uFE0F Eyes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 8);
        \u0275\u0275template(25, CharacterPageComponent_button_25_Template, 1, 5, "button", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 6)(27, "span", 7);
        \u0275\u0275text(28, "\u{1F60A} Expression");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 13)(30, "button", 14);
        \u0275\u0275listener("click", function CharacterPageComponent_Template_button_click_30_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.game.updateCharacter({ avatarMood: "happy" }));
        });
        \u0275\u0275text(31, "\u{1F60A} Happy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 14);
        \u0275\u0275listener("click", function CharacterPageComponent_Template_button_click_32_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.game.updateCharacter({ avatarMood: "excited" }));
        });
        \u0275\u0275text(33, "\u2B50 Excited");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 14);
        \u0275\u0275listener("click", function CharacterPageComponent_Template_button_click_34_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.game.updateCharacter({ avatarMood: "tired" }));
        });
        \u0275\u0275text(35, "\u{1F634} Tired");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(36, "div", 15)(37, "div", 16);
        \u0275\u0275element(38, "div", 17);
        \u0275\u0275elementStart(39, "div", 18);
        \u0275\u0275listener("click", function CharacterPageComponent_Template_div_click_39_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cycleMood());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(40, "svg", 19, 0);
        \u0275\u0275element(42, "ellipse", 20);
        \u0275\u0275elementStart(43, "g", 21)(44, "g", 22);
        \u0275\u0275template(45, CharacterPageComponent__svg_g_45_Template, 3, 0, "g", 23)(46, CharacterPageComponent__svg_g_46_Template, 1, 0, "g", 23)(47, CharacterPageComponent__svg_g_47_Template, 3, 0, "g", 23)(48, CharacterPageComponent__svg_g_48_Template, 2, 0, "g", 23)(49, CharacterPageComponent__svg_g_49_Template, 6, 0, "g", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275element(50, "rect", 25)(51, "rect", 26)(52, "rect", 27)(53, "rect", 28)(54, "rect", 29)(55, "rect", 30)(56, "rect", 31)(57, "rect", 32)(58, "rect", 33)(59, "rect", 34)(60, "rect", 35)(61, "rect", 36)(62, "rect", 37)(63, "rect", 38)(64, "rect", 39)(65, "rect", 40)(66, "rect", 41)(67, "rect", 42)(68, "rect", 43)(69, "rect", 44)(70, "rect", 45)(71, "rect", 46)(72, "rect", 47)(73, "rect", 48)(74, "rect", 49)(75, "rect", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "g", 51);
        \u0275\u0275element(77, "rect", 52)(78, "rect", 53)(79, "rect", 54)(80, "rect", 55)(81, "rect", 56);
        \u0275\u0275template(82, CharacterPageComponent__svg_g_82_Template, 13, 0, "g", 57)(83, CharacterPageComponent__svg_g_83_Template, 7, 0, "g", 57)(84, CharacterPageComponent__svg_g_84_Template, 5, 0, "g", 57);
        \u0275\u0275element(85, "rect", 58)(86, "rect", 59);
        \u0275\u0275template(87, CharacterPageComponent__svg_rect_87_Template, 1, 0, "rect", 60)(88, CharacterPageComponent__svg_rect_88_Template, 1, 0, "rect", 61)(89, CharacterPageComponent__svg_rect_89_Template, 1, 0, "rect", 62);
        \u0275\u0275elementStart(90, "g", 22);
        \u0275\u0275template(91, CharacterPageComponent__svg_g_91_Template, 12, 0, "g", 23)(92, CharacterPageComponent__svg_g_92_Template, 15, 4, "g", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(93, CharacterPageComponent__svg_g_93_Template, 6, 0, "g", 57)(94, CharacterPageComponent__svg_g_94_Template, 6, 0, "g", 57)(95, CharacterPageComponent__svg_g_95_Template, 4, 0, "g", 57)(96, CharacterPageComponent__svg_g_96_Template, 14, 0, "g", 57)(97, CharacterPageComponent__svg_g_97_Template, 7, 0, "g", 57)(98, CharacterPageComponent__svg_g_98_Template, 10, 0, "g", 57)(99, CharacterPageComponent__svg_g_99_Template, 9, 0, "g", 57)(100, CharacterPageComponent__svg_g_100_Template, 6, 0, "g", 57);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(101, "div", 63)(102, "span", 64);
        \u0275\u0275text(103, "\u2726");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "span", 65);
        \u0275\u0275text(105, "\u22B9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "span", 66);
        \u0275\u0275text(107, "\u2727");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(108, "div", 67)(109, "div", 68);
        \u0275\u0275text(110);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 69);
        \u0275\u0275template(112, CharacterPageComponent_div_112_Template, 4, 1, "div", 70)(113, CharacterPageComponent_input_113_Template, 1, 1, "input", 71);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "div", 72);
        \u0275\u0275template(115, CharacterPageComponent_div_115_Template, 4, 1, "div", 73)(116, CharacterPageComponent_input_116_Template, 1, 1, "input", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "button", 75);
        \u0275\u0275listener("click", function CharacterPageComponent_Template_button_click_117_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.downloadCharacter());
        });
        \u0275\u0275template(118, CharacterPageComponent_span_118_Template, 2, 0, "span", 57)(119, CharacterPageComponent_span_119_Template, 2, 0, "span", 57);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(120, "div", 3)(121, "h2", 4);
        \u0275\u0275text(122, "\u{1F457} Style");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "div", 5)(124, "div", 6)(125, "span", 7);
        \u0275\u0275text(126, "\u{1F455} Outfit Color");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "div", 8);
        \u0275\u0275template(128, CharacterPageComponent_button_128_Template, 1, 5, "button", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "div", 6)(130, "span", 7);
        \u0275\u0275text(131, "\u{1F380} Accessories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "div", 10);
        \u0275\u0275template(133, CharacterPageComponent_button_133_Template, 5, 4, "button", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(134, CharacterPageComponent_div_134_Template, 5, 1, "div", 76);
        \u0275\u0275element(135, "hr", 77);
        \u0275\u0275elementStart(136, "div", 6)(137, "span", 7);
        \u0275\u0275text(138, "\u2728 Quick Themes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "div", 78);
        \u0275\u0275template(140, CharacterPageComponent_button_140_Template, 10, 8, "button", 79);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(141, "div", 80)(142, "div", 81)(143, "div", 82)(144, "div", 83);
        \u0275\u0275text(145, "\u{1F525}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div", 84);
        \u0275\u0275text(147);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "div", 85);
        \u0275\u0275text(149, "Streak");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(150, "div", 82)(151, "div", 83);
        \u0275\u0275text(152, "\u{1FA99}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "div", 84);
        \u0275\u0275text(154);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "div", 85);
        \u0275\u0275text(156, "Coins");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(157, "div", 82)(158, "div", 83);
        \u0275\u0275text(159, "\u2764\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "div", 84);
        \u0275\u0275text(161);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "div", 85);
        \u0275\u0275text(163, "Health");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(164, "div", 86)(165, "div", 87)(166, "span", 88);
        \u0275\u0275text(167, "Level Progress");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "span", 89);
        \u0275\u0275text(169);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(170, "div", 90);
        \u0275\u0275element(171, "div", 91);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(172, "div", 92)(173, "div", 93)(174, "h2", 94);
        \u0275\u0275text(175, "\u{1F4AB} Top Skills");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "div", 95);
        \u0275\u0275template(177, CharacterPageComponent_div_177_Template, 9, 11, "div", 96);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(178, "div", 93)(179, "h2", 94);
        \u0275\u0275text(180, "\u{1F3C6} Achievements");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "div", 97);
        \u0275\u0275template(182, CharacterPageComponent_div_182_Template, 8, 7, "div", 98);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.SKIN_TONES);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.HAIR_STYLES);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.HAIR_COLORS);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.EYE_COLORS);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.mood === "happy");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.mood === "excited");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.mood === "tired");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("mood-excited", ctx.mood === "excited")("mood-tired", ctx.mood === "tired");
        \u0275\u0275property("ngStyle", ctx.avatarStyle());
        \u0275\u0275advance(5);
        \u0275\u0275property("ngSwitch", ctx.hair);
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "short");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "twintails");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "ponytail");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "spiky");
        \u0275\u0275advance(34);
        \u0275\u0275property("ngIf", ctx.mood !== "tired");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mood === "tired");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mood === "excited");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.mood === "happy");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mood === "excited");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mood === "tired");
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitch", ctx.hair);
        \u0275\u0275advance();
        \u0275\u0275property("ngSwitchCase", "spiky");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.acc === "headphones");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.acc === "bow");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.acc === "star-clips");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.acc === "glasses");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.acc === "cat-ears");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.acc === "flower");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.acc === "crown");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.acc === "halo");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1("Lv.", ctx.game.character().level, "");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.editName());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.editName());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.editTitle());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.editTitle());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.exporting());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.exporting());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.exporting());
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.OUTFIT_COLORS);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.ACCESSORIES);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.acc !== "none");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.PRESETS);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.game.character().streak);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.game.character().coins);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.game.character().hp);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate2("", ctx.game.character().xp, " / ", ctx.game.character().xpToNext, " XP");
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.xpPercent(ctx.game.character().xp, ctx.game.character().xpToNext), "%");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.topSkills);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.achievements);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.character-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.studio-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 320px 1fr 320px;\n  gap: 1.5rem;\n  align-items: start;\n}\n.side-panel[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.panel-h[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--primary-d);\n  text-align: center;\n  margin-bottom: 0.5rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.panel-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.center-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n.avatar-stage[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 380px;\n  background: var(--bg-card);\n  border-radius: 24px;\n  border: 3px solid var(--border);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.02);\n}\n.stage-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      var(--primary-l) 0%,\n      transparent 70%);\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0.8;\n  pointer-events: none;\n}\n.avatar-preview[_ngcontent-%COMP%] {\n  position: relative;\n  width: 256px;\n  height: 320px;\n  cursor: pointer;\n  z-index: 2;\n  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.avatar-preview[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px) scale(1.02);\n}\n.avatar-preview[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.avatar-preview.mood-excited[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounce-char 0.45s ease infinite alternate;\n}\n.avatar-preview.mood-tired[_ngcontent-%COMP%] {\n  filter: saturate(0.75);\n}\n.pixel-art[_ngcontent-%COMP%] {\n  width: 256px;\n  height: 320px;\n  image-rendering: -moz-crisp-edges;\n  image-rendering: -webkit-crisp-edges;\n  image-rendering: pixelated;\n  image-rendering: crisp-edges;\n  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.25));\n}\n.sprite-body[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_idle-breathe-body 2.5s ease-in-out infinite;\n}\n.sprite-head[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_idle-breathe-head 2.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_idle-breathe-body {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(0.5px);\n  }\n}\n@keyframes _ngcontent-%COMP%_idle-breathe-head {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(1px);\n  }\n}\n.avatar-sparkles[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.sp[_ngcontent-%COMP%] {\n  position: absolute;\n  color: var(--star, #ffe600);\n  animation: _ngcontent-%COMP%_sparkle 2s ease-in-out infinite;\n}\n.sp.sp1[_ngcontent-%COMP%] {\n  top: 15px;\n  right: 25px;\n  font-size: 1.2rem;\n  animation-delay: 0s;\n}\n.sp.sp2[_ngcontent-%COMP%] {\n  bottom: 50px;\n  left: 15px;\n  font-size: 0.8rem;\n  animation-delay: 0.7s;\n}\n.sp.sp3[_ngcontent-%COMP%] {\n  top: 70px;\n  left: 10px;\n  font-size: 1rem;\n  animation-delay: 1.4s;\n}\n@keyframes _ngcontent-%COMP%_sparkle {\n  0%, 100% {\n    opacity: 0.2;\n    transform: scale(0.8) rotate(0deg);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2) rotate(15deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_bounce-char {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(-8px);\n  }\n}\n.identity-card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  position: relative;\n}\n.lvl-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  background: var(--primary);\n  color: #fff;\n  padding: 0.3rem 0.8rem;\n  border-radius: 999px;\n  font-size: 0.55rem;\n  border: 2px solid #fff;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.export-btn[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  background: var(--text);\n  color: var(--bg-card);\n  border: none;\n  border-radius: 12px;\n  padding: 0.6rem 1.25rem;\n  font-family: "Nunito", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  width: 100%;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.export-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-d);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);\n}\n.export-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.export-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: wait;\n}\n.custom-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n}\n.custom-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.divider[_ngcontent-%COMP%] {\n  border: 0;\n  border-bottom: 2px dashed var(--border);\n  margin: 0.5rem 0;\n  opacity: 0.5;\n}\n.swatch-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.swatch[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 3px solid rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  padding: 0;\n  outline: none;\n  transition: transform 0.15s, box-shadow 0.15s;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n.swatch[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n.swatch.active[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n  border-color: var(--bg-card);\n  box-shadow: 0 0 0 2px var(--bg-card), 0 0 0 4px var(--text);\n}\n.skin-swatch[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.15);\n}\n.acc-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));\n  gap: 6px;\n}\n.mood-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.acc-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.2rem;\n  padding: 0.5rem 0.3rem;\n  border-radius: 12px;\n  border: 2px solid var(--border);\n  background: var(--bg);\n  font-family: "Nunito", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n  text-align: center;\n}\n.acc-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary-d);\n  transform: translateY(-1px);\n}\n.acc-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary-l);\n  border-color: var(--primary);\n  color: var(--primary-d);\n  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.5);\n}\n.acc-label[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 1.1;\n}\n.preset-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.preset-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem;\n  border-radius: 12px;\n  border: 2px solid var(--border);\n  background: var(--bg-card);\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: left;\n}\n.preset-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n}\n.preset-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.preset-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.preset-name[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: var(--text);\n  font-family: "Nunito", sans-serif;\n}\n.preset-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n}\n.p-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.name-row[_ngcontent-%COMP%], .title-row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n.char-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text);\n  cursor: pointer;\n  padding: 0.3rem 0.6rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: background 0.15s;\n}\n.char-name[_ngcontent-%COMP%]:hover {\n  background: var(--primary-l);\n}\n.char-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: var(--primary-d);\n  cursor: pointer;\n  padding: 0.2rem 0.6rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: background 0.15s;\n}\n.char-title[_ngcontent-%COMP%]:hover {\n  background: var(--primary-l);\n}\n.edit-pen[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.char-name[_ngcontent-%COMP%]:hover   .edit-pen[_ngcontent-%COMP%], .char-title[_ngcontent-%COMP%]:hover   .edit-pen[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.edit-input[_ngcontent-%COMP%] {\n  border: 2px solid var(--primary);\n  border-radius: 8px;\n  padding: 0.4rem 0.7rem;\n  font-family: "Nunito", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text);\n  background: var(--bg-card);\n  outline: none;\n  width: 100%;\n  text-align: center;\n}\n.name-in[_ngcontent-%COMP%] {\n  font-family: "Press Start 2P", monospace;\n  font-size: 0.65rem;\n}\n.bottom-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.stats-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.5rem;\n  justify-content: space-between;\n}\n.stat-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  min-width: 60px;\n}\n.sbox-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.sbox-val[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--text);\n}\n.sbox-lbl[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: var(--text-muted);\n}\n.xp-section-wide[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  margin-left: auto;\n}\n.xp-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.xp-numbers[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: var(--primary-d);\n}\n.bottom-grids[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  align-items: start;\n}\n.section-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1.5rem;\n}\n.section-h[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: var(--text);\n  text-transform: uppercase;\n}\n.top-skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 0.75rem;\n}\n.ts-card[_ngcontent-%COMP%] {\n  background: var(--sk-bg, var(--primary-l));\n  border: 2px solid color-mix(in srgb, var(--sk-color, var(--primary)) 20%, transparent);\n  border-radius: 14px;\n  padding: 0.85rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  transition: transform 0.2s;\n}\n.ts-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n}\n.ts-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.ts-name[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 0.9rem;\n  color: var(--text);\n}\n.ts-lvl[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  color: var(--sk-color, var(--primary));\n}\n.ts-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: rgba(0, 0, 0, 0.07);\n  border-radius: 999px;\n  overflow: hidden;\n}\n.ts-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.achievements-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 0.65rem;\n}\n.achievement[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border-radius: 12px;\n  border: 2px solid var(--border);\n  background: var(--bg);\n  transition: all 0.15s;\n}\n.achievement.earned[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: var(--primary-l);\n}\n.achievement.earned[_ngcontent-%COMP%]   .ach-label[_ngcontent-%COMP%] {\n  color: var(--primary-d);\n}\n.achievement.locked[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  filter: grayscale(0.5);\n}\n.achievement[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n}\n.ach-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.ach-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  min-width: 0;\n}\n.ach-label[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n}\n.ach-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n@media (max-width: 1050px) {\n  .studio-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .center-panel[_ngcontent-%COMP%] {\n    order: -1;\n    max-width: 450px;\n    margin: 0 auto;\n    width: 100%;\n  }\n  .bottom-grids[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=character-page.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CharacterPageComponent, { className: "CharacterPageComponent", filePath: "src\\app\\pages\\character-page\\character-page.component.ts", lineNumber: 14 });
})();
export {
  CharacterPageComponent
};
//# sourceMappingURL=chunk-ZJSD7UGX.js.map
