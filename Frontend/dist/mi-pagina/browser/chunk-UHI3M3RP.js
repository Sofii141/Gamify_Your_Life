import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-JZ6HHMZB.js";
import {
  CommonModule,
  GameService,
  NgClass,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  signal,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-A4OUFFOQ.js";

// src/app/pages/calendar/calendar.component.ts
var _c0 = () => [];
function CalendarComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275classProp("weekend-hdr", i_r2 >= 5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r1);
  }
}
function CalendarComponent_div_22_div_1_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r6);
  }
}
function CalendarComponent_div_22_div_1_div_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r4.getDayStickers(day_r4.date).length - 4, " ");
  }
}
function CalendarComponent_div_22_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, CalendarComponent_div_22_div_1_div_3_span_1_Template, 2, 1, "span", 27)(2, CalendarComponent_div_22_div_1_div_3_span_2_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.getDayStickers(day_r4.date).slice(0, 4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.getDayStickers(day_r4.date).length > 4);
  }
}
function CalendarComponent_div_22_div_1_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 34);
  }
  if (rf & 2) {
    const n_r7 = ctx.$implicit;
    \u0275\u0275property("ngClass", "dot-color-" + n_r7.color);
  }
}
function CalendarComponent_div_22_div_1_div_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r4 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r4.getDayNotes(day_r4.date).length - 5, " ");
  }
}
function CalendarComponent_div_22_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275template(1, CalendarComponent_div_22_div_1_div_4_span_1_Template, 1, 1, "span", 32)(2, CalendarComponent_div_22_div_1_div_4_span_2_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.getDayNotes(day_r4.date).slice(0, 5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.getDayNotes(day_r4.date).length > 5);
  }
}
function CalendarComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CalendarComponent_div_22_div_1_div_3_Template, 3, 2, "div", 24)(4, CalendarComponent_div_22_div_1_div_4_Template, 3, 2, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r4.date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.getDayStickers(day_r4.date).length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.getDayNotes(day_r4.date).length);
  }
}
function CalendarComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function CalendarComponent_div_22_Template_div_click_0_listener() {
      const day_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.selectDay(day_r4.date));
    });
    \u0275\u0275template(1, CalendarComponent_div_22_div_1_Template, 5, 3, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("empty", !day_r4.isCurrentMonth)("today", day_r4.isToday)("selected", day_r4.date === ctx_r4.selectedDay())("weekend-col", ctx_r4.isWeekend(i_r8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", day_r4.isCurrentMonth);
  }
}
function CalendarComponent_div_24_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function CalendarComponent_div_24_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.startAddNote());
    });
    \u0275\u0275text(1, "\uFF0B Agregar");
    \u0275\u0275elementEnd();
  }
}
function CalendarComponent_div_24_div_15_div_1_div_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r13);
  }
}
function CalendarComponent_div_24_div_15_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, CalendarComponent_div_24_div_15_div_1_div_2_span_1_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const note_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_5_0 = note_r12.stickers) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : \u0275\u0275pureFunction0(1, _c0));
  }
}
function CalendarComponent_div_24_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275listener("click", function CalendarComponent_div_24_div_15_div_1_Template_div_click_1_listener() {
      const note_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.startEditNote(note_r12));
    });
    \u0275\u0275template(2, CalendarComponent_div_24_div_15_div_1_div_2_Template, 2, 2, "div", 62);
    \u0275\u0275elementStart(3, "p", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 64);
    \u0275\u0275text(6, "\u270F\uFE0F editar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 65);
    \u0275\u0275listener("click", function CalendarComponent_div_24_div_15_div_1_Template_button_click_7_listener() {
      const note_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.deleteNote(note_r12.id));
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    const note_r12 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("is-editing", ((tmp_4_0 = ctx_r4.editingNote()) == null ? null : tmp_4_0.id) === note_r12.id);
    \u0275\u0275property("ngClass", "note-color-" + note_r12.color);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_6_0 = note_r12.stickers) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : \u0275\u0275pureFunction0(5, _c0)).length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(note_r12.text);
  }
}
function CalendarComponent_div_24_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, CalendarComponent_div_24_div_15_div_1_Template, 9, 6, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.getDayNotes(ctx_r4.selectedDay()));
  }
}
function CalendarComponent_div_24_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 69);
    \u0275\u0275text(1, " Sin notas a\xFAn \u2728 ");
    \u0275\u0275elementEnd();
  }
}
function CalendarComponent_div_24_div_17_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function CalendarComponent_div_24_div_17_button_5_Template_button_click_0_listener() {
      const c_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.setEditingNoteColor(c_r16.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", c_r16.bg)("border-color", c_r16.border);
    \u0275\u0275classProp("active", ctx_r4.editingNote().color === c_r16.id);
    \u0275\u0275property("title", c_r16.emoji);
  }
}
function CalendarComponent_div_24_div_17_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275listener("click", function CalendarComponent_div_24_div_17_button_8_Template_button_click_0_listener() {
      const i_r18 = \u0275\u0275restoreView(_r17).index;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.activeCategory.set(i_r18));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r19 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r4.activeCategory() === i_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r19.label);
  }
}
function CalendarComponent_div_24_div_17_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 87);
    \u0275\u0275listener("click", function CalendarComponent_div_24_div_17_button_10_Template_button_click_0_listener() {
      const s_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.addStickerToNote(s_r21));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r21);
  }
}
function CalendarComponent_div_24_div_17_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275listener("click", function CalendarComponent_div_24_div_17_div_11_span_1_Template_span_click_0_listener() {
      const i_r23 = \u0275\u0275restoreView(_r22).index;
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.removeStickerFromNote(i_r23));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r24);
  }
}
function CalendarComponent_div_24_div_17_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275template(1, CalendarComponent_div_24_div_17_div_11_span_1_Template, 2, 1, "span", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.editingNoteStickers);
  }
}
function CalendarComponent_div_24_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "span", 72);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 73);
    \u0275\u0275template(5, CalendarComponent_div_24_div_17_button_5_Template, 1, 7, "button", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 75)(7, "div", 76);
    \u0275\u0275template(8, CalendarComponent_div_24_div_17_button_8_Template, 2, 3, "button", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 78);
    \u0275\u0275template(10, CalendarComponent_div_24_div_17_button_10_Template, 2, 1, "button", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CalendarComponent_div_24_div_17_div_11_Template, 2, 1, "div", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 81)(13, "textarea", 82);
    \u0275\u0275twoWayListener("ngModelChange", function CalendarComponent_div_24_div_17_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r4.editingNoteText, $event) || (ctx_r4.editingNoteText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 83)(15, "button", 84);
    \u0275\u0275listener("click", function CalendarComponent_div_24_div_17_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.saveEditingNote());
    });
    \u0275\u0275text(16, "Guardar \u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 8);
    \u0275\u0275listener("click", function CalendarComponent_div_24_div_17_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.cancelEdit());
    });
    \u0275\u0275text(18, "Cancelar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.editingNote().id ? "Editar nota" : "Nueva nota");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.NOTE_COLORS);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r4.STICKER_CATEGORIES);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.activeCategoryStickers());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.editingNoteStickers.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "note-color-" + ctx_r4.editingNote().color);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.editingNoteText);
  }
}
function CalendarComponent_div_24_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function CalendarComponent_div_24_button_22_Template_button_click_0_listener() {
      const i_r26 = \u0275\u0275restoreView(_r25).index;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.activeCategory.set(i_r26));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 92);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r27 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r4.activeCategory() === i_r26);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r27.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r27.name);
  }
}
function CalendarComponent_div_24_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function CalendarComponent_div_24_button_24_Template_button_click_0_listener() {
      const s_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.addSticker(s_r29));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r29);
  }
}
function CalendarComponent_div_24_div_25_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275listener("click", function CalendarComponent_div_24_div_25_span_6_Template_span_click_0_listener() {
      const i_r31 = \u0275\u0275restoreView(_r30).index;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.removeSticker(i_r31));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r32 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r32);
  }
}
function CalendarComponent_div_24_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "span", 45);
    \u0275\u0275text(2, "Mis stickers ");
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4, "(toca para quitar)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 95);
    \u0275\u0275template(6, CalendarComponent_div_24_div_25_span_6_Template, 2, 1, "span", 96);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r4.getDayStickers(ctx_r4.selectedDay()));
  }
}
function CalendarComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "div", 38)(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 41);
    \u0275\u0275listener("click", function CalendarComponent_div_24_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      ctx_r4.selectedDay.set(null);
      return \u0275\u0275resetView(ctx_r4.cancelEdit());
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "div", 42);
    \u0275\u0275elementStart(10, "div", 43)(11, "div", 44)(12, "span", 45);
    \u0275\u0275text(13, "\u270F\uFE0F Notas del d\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CalendarComponent_div_24_button_14_Template, 2, 0, "button", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, CalendarComponent_div_24_div_15_Template, 2, 1, "div", 47)(16, CalendarComponent_div_24_p_16_Template, 2, 0, "p", 48)(17, CalendarComponent_div_24_div_17_Template, 19, 7, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 50)(19, "span", 45);
    \u0275\u0275text(20, "\u{1F380} Stickers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 51);
    \u0275\u0275template(22, CalendarComponent_div_24_button_22_Template, 4, 4, "button", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 53);
    \u0275\u0275template(24, CalendarComponent_div_24_button_24_Template, 2, 1, "button", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, CalendarComponent_div_24_div_25_Template, 7, 1, "div", 55);
    \u0275\u0275elementStart(26, "div", 56)(27, "button", 8);
    \u0275\u0275listener("click", function CalendarComponent_div_24_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.clearDay());
    });
    \u0275\u0275text(28, "\u{1F5D1}\uFE0F Limpiar todo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r4.selectedDay());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.MONTH_NAMES[ctx_r4.viewMonth()]);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r4.editingNote());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.getDayNotes(ctx_r4.selectedDay()).length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.getDayNotes(ctx_r4.selectedDay()).length && !ctx_r4.editingNote());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.editingNote());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r4.STICKER_CATEGORIES);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.activeCategoryStickers());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.getDayStickers(ctx_r4.selectedDay()).length);
  }
}
function CalendarComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99)(2, "div", 100);
    \u0275\u0275text(3, "\u2728 \u{1F338} \u2728");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 101);
    \u0275\u0275text(5, "Mi diario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 102);
    \u0275\u0275text(7, "Toca un d\xEDa para decorarlo");
    \u0275\u0275element(8, "br");
    \u0275\u0275text(9, "con stickers y notas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 103)(11, "div", 104)(12, "span", 105);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 106);
    \u0275\u0275text(15, "d\xEDas decorados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 104)(17, "span", 105);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 106);
    \u0275\u0275text(20, "notas escritas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 107)(22, "span");
    \u0275\u0275text(23, "\u{1F338} clic \u2192 sticker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "\u270F\uFE0F escribe \u2192 nota");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r4.getDaysWithStickersCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.getDaysWithNotesCount());
  }
}
var CalendarComponent = class _CalendarComponent {
  constructor() {
    this.game = inject(GameService);
    this.STICKER_KEY = "cozy-calendar-stickers";
    this.NOTE_KEY = "cozy-calendar-notes-v2";
    this.today = /* @__PURE__ */ new Date();
    this.viewYear = signal(this.today.getFullYear());
    this.viewMonth = signal(this.today.getMonth());
    this.selectedDay = signal(null);
    this.activeCategory = signal(0);
    this.editingNote = signal(null);
    this.editingNoteText = "";
    this.editingNoteStickers = [];
    this.stickerData = signal(this.loadStickers());
    this.noteData = signal(this.loadNotes());
    this.NOTE_COLORS = [
      { id: "default", emoji: "\u{1F90D}", bg: "#ffffff", border: "#e0e0e0" },
      { id: "pink", emoji: "\u{1FA77}", bg: "#fff0f5", border: "#ffb3d1" },
      { id: "yellow", emoji: "\u{1F49B}", bg: "#fffbf0", border: "#f5d87a" },
      { id: "mint", emoji: "\u{1F49A}", bg: "#f0faf5", border: "#85d4a8" },
      { id: "blue", emoji: "\u{1FA75}", bg: "#f0f8ff", border: "#85c4f0" },
      { id: "lavender", emoji: "\u{1F49C}", bg: "#f8f0ff", border: "#c0a0f0" },
      { id: "peach", emoji: "\u{1F351}", bg: "#fff5f0", border: "#f0b898" }
    ];
    this.STICKER_CATEGORIES = [
      { label: "\u{1F338}", name: "Flores", stickers: ["\u{1F338}", "\u{1F33A}", "\u{1F33C}", "\u{1F33B}", "\u{1F339}", "\u{1FAB7}", "\u{1F337}", "\u{1F490}", "\u{1F33F}", "\u{1F340}", "\u{1F331}", "\u{1F33E}"] },
      { label: "\u{1F352}", name: "Comida", stickers: ["\u{1F352}", "\u{1F353}", "\u{1F351}", "\u{1FAD0}", "\u{1F34A}", "\u{1F375}", "\u{1F9C1}", "\u{1F370}", "\u{1F361}", "\u{1F9CB}", "\u{1F36C}", "\u{1F36E}"] },
      { label: "\u2B50", name: "Magia", stickers: ["\u2B50", "\u{1F31F}", "\u{1F4AB}", "\u2728", "\u{1F319}", "\u2600\uFE0F", "\u{1F308}", "\u{1F31B}", "\u{1FA84}", "\u{1F3EE}", "\u{1F38B}", "\u{1F4AE}"] },
      { label: "\u{1F380}", name: "Cute", stickers: ["\u{1F380}", "\u{1F495}", "\u{1F49D}", "\u{1F496}", "\u{1F497}", "\u{1FAE7}", "\u{1F390}", "\u{1F302}", "\u{1F9F8}", "\u{1F431}", "\u{1F430}", "\u{1F98B}"] },
      { label: "\u{1F3B5}", name: "Varios", stickers: ["\u{1F3B5}", "\u{1F4DA}", "\u270F\uFE0F", "\u{1F30A}", "\u{1F334}", "\u{1F344}", "\u{1F3EE}", "\u{1F3AF}", "\u{1F58A}\uFE0F", "\u{1F4F7}", "\u{1F3A8}", "\u{1F3AA}"] }
    ];
    this.DAY_HEADERS = ["Lun", "Mar", "Mi\xE9", "Jue", "Vie", "S\xE1b", "Dom"];
    this.MONTH_NAMES = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    this.activeCategoryStickers = computed(() => this.STICKER_CATEGORIES[this.activeCategory()].stickers);
    this.calendarDays = computed(() => {
      const year = this.viewYear();
      const month = this.viewMonth();
      const today = this.today;
      const firstDay = new Date(year, month, 1);
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const offset = (firstDay.getDay() + 6) % 7;
      const days = [];
      for (let i = 0; i < offset; i++) {
        days.push({ date: 0, isCurrentMonth: false, isToday: false });
      }
      for (let d = 1; d <= daysInMonth; d++) {
        days.push({
          date: d,
          isCurrentMonth: true,
          isToday: year === today.getFullYear() && month === today.getMonth() && d === today.getDate()
        });
      }
      while (days.length % 7 !== 0) {
        days.push({ date: 0, isCurrentMonth: false, isToday: false });
      }
      return days;
    });
  }
  /* ── Navigation ── */
  prevMonth() {
    if (this.viewMonth() === 0) {
      this.viewMonth.set(11);
      this.viewYear.update((y) => y - 1);
    } else {
      this.viewMonth.update((m) => m - 1);
    }
    this.selectedDay.set(null);
    this.cancelEdit();
  }
  nextMonth() {
    if (this.viewMonth() === 11) {
      this.viewMonth.set(0);
      this.viewYear.update((y) => y + 1);
    } else {
      this.viewMonth.update((m) => m + 1);
    }
    this.selectedDay.set(null);
    this.cancelEdit();
  }
  goToToday() {
    this.viewYear.set(this.today.getFullYear());
    this.viewMonth.set(this.today.getMonth());
    this.selectedDay.set(null);
    this.cancelEdit();
  }
  selectDay(day) {
    if (!day)
      return;
    if (this.selectedDay() === day) {
      this.selectedDay.set(null);
      this.cancelEdit();
      return;
    }
    this.selectedDay.set(day);
    this.cancelEdit();
  }
  isWeekend(index) {
    return index % 7 >= 5;
  }
  ymKey() {
    return `${this.viewYear()}-${String(this.viewMonth() + 1).padStart(2, "0")}`;
  }
  /* ── Stickers ── */
  getDayStickers(day) {
    return this.stickerData()[this.ymKey()]?.[String(day)] ?? [];
  }
  addSticker(sticker) {
    const key = this.ymKey(), dayKey = String(this.selectedDay());
    this.stickerData.update((s) => __spreadProps(__spreadValues({}, s), {
      [key]: __spreadProps(__spreadValues({}, s[key] ?? {}), { [dayKey]: [...s[key]?.[dayKey] ?? [], sticker] })
    }));
    this.saveStickers();
  }
  removeSticker(index) {
    const key = this.ymKey(), dayKey = String(this.selectedDay());
    this.stickerData.update((s) => {
      if (!s[key]?.[dayKey])
        return s;
      const arr = [...s[key][dayKey]];
      arr.splice(index, 1);
      return __spreadProps(__spreadValues({}, s), { [key]: __spreadProps(__spreadValues({}, s[key]), { [dayKey]: arr }) });
    });
    this.saveStickers();
  }
  /* ── Notes ── */
  getDayNotes(day) {
    return this.noteData()[this.ymKey()]?.[String(day)] ?? [];
  }
  getDaysWithStickersCount() {
    return Object.values(this.stickerData()[this.ymKey()] ?? {}).filter((a) => a.length > 0).length;
  }
  getDaysWithNotesCount() {
    return Object.values(this.noteData()[this.ymKey()] ?? {}).filter((a) => a.length > 0).length;
  }
  startAddNote() {
    this.editingNote.set({ color: "pink" });
    this.editingNoteText = "";
    this.editingNoteStickers = [];
  }
  startEditNote(note) {
    this.editingNote.set({ id: note.id, color: note.color });
    this.editingNoteText = note.text;
    this.editingNoteStickers = [...note.stickers ?? []];
  }
  addStickerToNote(sticker) {
    this.editingNoteStickers = [...this.editingNoteStickers, sticker];
  }
  removeStickerFromNote(index) {
    this.editingNoteStickers = this.editingNoteStickers.filter((_, i) => i !== index);
  }
  setEditingNoteColor(colorId) {
    const current = this.editingNote();
    if (current)
      this.editingNote.set(__spreadProps(__spreadValues({}, current), { color: colorId }));
  }
  saveEditingNote() {
    const editing = this.editingNote();
    if (!editing)
      return;
    const text = this.editingNoteText.trim();
    if (!text) {
      this.cancelEdit();
      return;
    }
    const key = this.ymKey(), dayKey = String(this.selectedDay());
    if (editing.id) {
      this.noteData.update((n) => __spreadProps(__spreadValues({}, n), {
        [key]: __spreadProps(__spreadValues({}, n[key] ?? {}), {
          [dayKey]: (n[key]?.[dayKey] ?? []).map((note) => note.id === editing.id ? __spreadProps(__spreadValues({}, note), { text, color: editing.color, stickers: [...this.editingNoteStickers] }) : note)
        })
      }));
    } else {
      const newNote = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
        text,
        color: editing.color,
        stickers: [...this.editingNoteStickers]
      };
      this.noteData.update((n) => __spreadProps(__spreadValues({}, n), {
        [key]: __spreadProps(__spreadValues({}, n[key] ?? {}), { [dayKey]: [...n[key]?.[dayKey] ?? [], newNote] })
      }));
    }
    this.cancelEdit();
    this.saveNotes();
  }
  cancelEdit() {
    this.editingNote.set(null);
    this.editingNoteText = "";
    this.editingNoteStickers = [];
  }
  deleteNote(noteId) {
    const key = this.ymKey(), dayKey = String(this.selectedDay());
    this.noteData.update((n) => __spreadProps(__spreadValues({}, n), {
      [key]: __spreadProps(__spreadValues({}, n[key] ?? {}), { [dayKey]: (n[key]?.[dayKey] ?? []).filter((n2) => n2.id !== noteId) })
    }));
    this.saveNotes();
  }
  clearDay() {
    const key = this.ymKey(), dayKey = String(this.selectedDay());
    const drop = (obj) => {
      if (!obj[key])
        return obj;
      const u = __spreadValues({}, obj[key]);
      delete u[dayKey];
      return __spreadProps(__spreadValues({}, obj), { [key]: u });
    };
    this.stickerData.update(drop);
    this.noteData.update(drop);
    this.cancelEdit();
    this.saveStickers();
    this.saveNotes();
  }
  loadStickers() {
    try {
      const r = localStorage.getItem(this.STICKER_KEY);
      return r ? JSON.parse(r) : {};
    } catch {
      return {};
    }
  }
  loadNotes() {
    try {
      const r = localStorage.getItem(this.NOTE_KEY);
      return r ? JSON.parse(r) : {};
    } catch {
      return {};
    }
  }
  saveStickers() {
    try {
      localStorage.setItem(this.STICKER_KEY, JSON.stringify(this.stickerData()));
    } catch {
    }
  }
  saveNotes() {
    try {
      localStorage.setItem(this.NOTE_KEY, JSON.stringify(this.noteData()));
    } catch {
    }
  }
  static {
    this.\u0275fac = function CalendarComponent_Factory(t) {
      return new (t || _CalendarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarComponent, selectors: [["app-calendar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 6, consts: [[1, "calendar-page"], [1, "cal-topbar"], [1, "month-nav"], [1, "nav-btn", 3, "click"], [1, "month-display"], [1, "month-name", "pixel"], [1, "year-text"], [1, "topbar-right"], [1, "btn", "btn-ghost", 3, "click"], [1, "deco-emojis"], [1, "cal-layout"], [1, "cal-card", "card"], [1, "day-headers"], ["class", "day-header", 3, "weekend-hdr", 4, "ngFor", "ngForOf"], [1, "cal-grid"], ["class", "day-cell", 3, "empty", "today", "selected", "weekend-col", "click", 4, "ngFor", "ngForOf"], [1, "right-col"], ["class", "day-panel card", 4, "ngIf"], ["class", "empty-panel card", 4, "ngIf"], [1, "day-header"], [1, "day-cell", 3, "click"], ["class", "cell-inner", 4, "ngIf"], [1, "cell-inner"], [1, "day-num"], ["class", "cell-stickers", 4, "ngIf"], ["class", "cell-note-dots", 4, "ngIf"], [1, "cell-stickers"], ["class", "cell-sticker", 4, "ngFor", "ngForOf"], ["class", "sticker-more", 4, "ngIf"], [1, "cell-sticker"], [1, "sticker-more"], [1, "cell-note-dots"], ["class", "cell-note-dot", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "dot-more", 4, "ngIf"], [1, "cell-note-dot", 3, "ngClass"], [1, "dot-more"], [1, "day-panel", "card"], [1, "panel-top"], [1, "panel-date"], [1, "panel-day-num", "pixel"], [1, "panel-month-name"], [1, "close-btn", 3, "click"], [1, "panel-divider", "stars-deco"], [1, "notes-section"], [1, "notes-header-row"], [1, "section-label"], ["class", "add-note-btn", 3, "click", 4, "ngIf"], ["class", "notes-list", 4, "ngIf"], ["class", "notes-empty", 4, "ngIf"], ["class", "note-form", 4, "ngIf"], [1, "sticker-section"], [1, "cat-tabs"], ["class", "cat-tab", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "picker-grid"], ["class", "picker-btn", 3, "click", 4, "ngFor", "ngForOf"], ["class", "placed-section", 4, "ngIf"], [1, "panel-footer"], [1, "add-note-btn", 3, "click"], [1, "notes-list"], ["class", "note-card", 3, "ngClass", "is-editing", 4, "ngFor", "ngForOf"], [1, "note-card", 3, "ngClass"], [1, "note-card-body", 3, "click"], ["class", "note-card-stickers", 4, "ngIf"], [1, "note-card-text"], [1, "note-edit-hint"], ["title", "Eliminar", 1, "note-delete-btn", 3, "click"], [1, "note-card-stickers"], ["class", "note-card-sticker", 4, "ngFor", "ngForOf"], [1, "note-card-sticker"], [1, "notes-empty"], [1, "note-form"], [1, "note-form-header"], [1, "note-form-title"], [1, "note-form-colors"], ["class", "color-dot", 3, "active", "background", "border-color", "title", "click", 4, "ngFor", "ngForOf"], [1, "note-sticker-picker"], [1, "note-sticker-cats"], ["class", "mini-cat-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "note-sticker-grid"], ["class", "mini-sticker-btn", 3, "click", 4, "ngFor", "ngForOf"], ["class", "note-selected-stickers", 4, "ngIf"], [1, "note-paper", 3, "ngClass"], ["placeholder", "Escribe algo lindo aqu\xED... \u2728", "rows", "3", 1, "note-textarea", 3, "ngModelChange", "ngModel"], [1, "note-form-btns"], [1, "btn", "btn-primary", 3, "click"], [1, "color-dot", 3, "click", "title"], [1, "mini-cat-btn", 3, "click"], [1, "mini-sticker-btn", 3, "click"], [1, "note-selected-stickers"], ["class", "note-sel-sticker", "title", "Toca para quitar", 3, "click", 4, "ngFor", "ngForOf"], ["title", "Toca para quitar", 1, "note-sel-sticker", 3, "click"], [1, "cat-tab", 3, "click"], [1, "cat-name"], [1, "picker-btn", 3, "click"], [1, "placed-section"], [1, "placed-row"], ["class", "placed-sticker", 3, "click", 4, "ngFor", "ngForOf"], [1, "placed-sticker", 3, "click"], [1, "empty-panel", "card"], [1, "empty-content"], [1, "empty-deco", "sparkle"], [1, "empty-title", "pixel"], [1, "empty-desc"], [1, "month-stats"], [1, "stat-item"], [1, "stat-num", "pixel"], [1, "stat-label"], [1, "hint-row"]], template: function CalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        \u0275\u0275listener("click", function CalendarComponent_Template_button_click_3_listener() {
          return ctx.prevMonth();
        });
        \u0275\u0275text(4, "\u2039");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "h2", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "button", 3);
        \u0275\u0275listener("click", function CalendarComponent_Template_button_click_10_listener() {
          return ctx.nextMonth();
        });
        \u0275\u0275text(11, "\u203A");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 7)(13, "button", 8);
        \u0275\u0275listener("click", function CalendarComponent_Template_button_click_13_listener() {
          return ctx.goToToday();
        });
        \u0275\u0275text(14, "\u2726 Hoy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 9);
        \u0275\u0275text(16, "\u{1F338} \u2728 \u{1F319}");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 10)(18, "div", 11)(19, "div", 12);
        \u0275\u0275template(20, CalendarComponent_span_20_Template, 2, 3, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 14);
        \u0275\u0275template(22, CalendarComponent_div_22_Template, 2, 9, "div", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 16);
        \u0275\u0275template(24, CalendarComponent_div_24_Template, 29, 9, "div", 17)(25, CalendarComponent_div_25_Template, 26, 2, "div", 18);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.MONTH_NAMES[ctx.viewMonth()]);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.viewYear());
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.DAY_HEADERS);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.calendarDays());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.selectedDay() !== null);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedDay() === null);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.calendar-page[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.cal-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.month-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.month-display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 190px;\n}\n.month-name[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--primary-d);\n  margin: 0;\n  letter-spacing: 1px;\n}\n.year-text[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  font-weight: 700;\n  margin-top: 0.15rem;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  background: var(--primary-l);\n  border: 2px solid var(--border);\n  color: var(--primary-d);\n  border-radius: 12px;\n  width: 44px;\n  height: 44px;\n  font-size: 1.7rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n  line-height: 1;\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  background: var(--border);\n  transform: scale(1.06);\n}\n.nav-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.93);\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.deco-emojis[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  letter-spacing: 5px;\n  opacity: 0.65;\n}\n.cal-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 1.25rem;\n  align-items: start;\n}\n.cal-card[_ngcontent-%COMP%] {\n  padding: 1.25rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.day-headers[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-bottom: 2px solid var(--border);\n  padding-bottom: 0.6rem;\n  margin-bottom: 0.2rem;\n}\n.day-header[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: var(--text-muted);\n  padding: 0.2rem 0;\n}\n.day-header.weekend-hdr[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.cal-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 3px;\n}\n.day-cell[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 104px;\n  border-radius: 10px;\n  border: 1.5px solid transparent;\n  overflow: hidden;\n  cursor: pointer;\n  transition: background 0.12s, border-color 0.12s;\n}\n.day-cell[_ngcontent-%COMP%]:not(.empty):hover {\n  background: var(--primary-l);\n  border-color: var(--border);\n  z-index: 1;\n}\n.day-cell.empty[_ngcontent-%COMP%] {\n  cursor: default;\n  pointer-events: none;\n}\n.day-cell.weekend-col[_ngcontent-%COMP%]:not(.empty) {\n  background: var(--bg-sidebar);\n  opacity: 0.85;\n}\n.day-cell.today[_ngcontent-%COMP%] {\n  background: var(--primary-l);\n  border-color: var(--primary);\n  opacity: 1;\n}\n.day-cell.today[_ngcontent-%COMP%]   .day-num[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.day-cell.selected[_ngcontent-%COMP%] {\n  background: var(--primary-l);\n  border-color: var(--primary-d);\n  box-shadow: 0 0 0 2.5px var(--primary-d);\n  opacity: 1;\n  z-index: 2;\n}\n.cell-inner[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.4rem 0.3rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.day-num[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: var(--text);\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  flex-shrink: 0;\n  display: block;\n}\n.cell-stickers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1px;\n  flex: 1;\n  align-content: flex-start;\n}\n.cell-sticker[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.15;\n}\n.sticker-more[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  align-self: flex-end;\n}\n.cell-note-dots[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px;\n  margin-top: auto;\n  padding-top: 2px;\n}\n.cell-note-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  display: block;\n  flex-shrink: 0;\n}\n.dot-more[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  align-self: center;\n}\n.dot-color-default[_ngcontent-%COMP%] {\n  background: var(--border);\n}\n.dot-color-pink[_ngcontent-%COMP%] {\n  background: #ffb3d1;\n}\n.dot-color-yellow[_ngcontent-%COMP%] {\n  background: #f5d87a;\n}\n.dot-color-mint[_ngcontent-%COMP%] {\n  background: #85d4a8;\n}\n.dot-color-blue[_ngcontent-%COMP%] {\n  background: #85c4f0;\n}\n.dot-color-lavender[_ngcontent-%COMP%] {\n  background: #c0a0f0;\n}\n.dot-color-peach[_ngcontent-%COMP%] {\n  background: #f0b898;\n}\n.note-color-default[_ngcontent-%COMP%] {\n  border-left-color: var(--border);\n  background: var(--bg-card);\n}\n.note-color-pink[_ngcontent-%COMP%] {\n  border-left-color: #ffb3d1;\n  background: #fff0f5;\n}\n.note-color-yellow[_ngcontent-%COMP%] {\n  border-left-color: #f5d87a;\n  background: #fffbf0;\n}\n.note-color-mint[_ngcontent-%COMP%] {\n  border-left-color: #85d4a8;\n  background: #f0faf5;\n}\n.note-color-blue[_ngcontent-%COMP%] {\n  border-left-color: #85c4f0;\n  background: #f0f8ff;\n}\n.note-color-lavender[_ngcontent-%COMP%] {\n  border-left-color: #c0a0f0;\n  background: #f8f0ff;\n}\n.note-color-peach[_ngcontent-%COMP%] {\n  border-left-color: #f0b898;\n  background: #fff5f0;\n}\n.right-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 1rem;\n}\n.day-panel[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  max-height: calc(100vh - 100px);\n  overflow-y: auto;\n}\n.panel-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.panel-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.05rem;\n}\n.panel-day-num[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--primary-d);\n}\n.panel-month-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.panel-divider[_ngcontent-%COMP%] {\n  margin: 0.15rem 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: var(--primary-l);\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  cursor: pointer;\n  width: 28px;\n  height: 28px;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: background 0.12s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--border);\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  display: block;\n  margin-bottom: 0.4rem;\n}\n.section-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: 600;\n  opacity: 0.75;\n}\n.notes-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n}\n.notes-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.add-note-btn[_ngcontent-%COMP%] {\n  background: var(--primary-l);\n  border: 1.5px solid var(--border);\n  border-radius: 10px;\n  padding: 0.22rem 0.65rem;\n  font-family: "Nunito", sans-serif;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--primary-d);\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.add-note-btn[_ngcontent-%COMP%]:hover {\n  background: var(--border);\n}\n.notes-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.note-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.4rem;\n  border-radius: 10px;\n  border-left: 3.5px solid;\n  padding: 0.5rem 0.6rem 0.5rem 0.65rem;\n  transition: opacity 0.15s;\n  background: var(--bg-card);\n}\n.note-card.is-editing[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.note-card-body[_ngcontent-%COMP%] {\n  flex: 1;\n  cursor: pointer;\n  min-width: 0;\n}\n.note-card-body[_ngcontent-%COMP%]:hover   .note-edit-hint[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.note-card-text[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text);\n  line-height: 1.45;\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin: 0;\n}\n.note-edit-hint[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--text-muted);\n  opacity: 0;\n  transition: opacity 0.15s;\n  margin-top: 0.1rem;\n  display: block;\n}\n.note-delete-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 0.7rem;\n  padding: 0.1rem 0.2rem;\n  border-radius: 6px;\n  flex-shrink: 0;\n  transition: background 0.12s, color 0.12s;\n  margin-top: 0.05rem;\n}\n.note-delete-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 50, 50, 0.12);\n  color: #c93030;\n}\n.notes-empty[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  font-weight: 600;\n  text-align: center;\n  padding: 0.5rem;\n}\n.note-form[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--border);\n  border-radius: 12px;\n  padding: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n  background: var(--bg);\n}\n.note-form-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.note-form-title[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.note-form-colors[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.color-dot[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2.5px solid;\n  cursor: pointer;\n  padding: 0;\n  transition: transform 0.12s, box-shadow 0.12s;\n}\n.color-dot[_ngcontent-%COMP%]:hover {\n  transform: scale(1.18);\n}\n.color-dot.active[_ngcontent-%COMP%] {\n  transform: scale(1.25);\n  box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px var(--primary-d);\n}\n.note-paper[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 2px solid;\n  overflow: hidden;\n  transition: border-color 0.2s, background 0.2s;\n}\n.note-paper.note-color-default[_ngcontent-%COMP%] {\n  background: var(--bg);\n  border-color: var(--border);\n}\n.note-paper.note-color-pink[_ngcontent-%COMP%] {\n  background: #fff0f5;\n  border-color: #ffb3d1;\n}\n.note-paper.note-color-yellow[_ngcontent-%COMP%] {\n  background: #fffbf0;\n  border-color: #f5d87a;\n}\n.note-paper.note-color-mint[_ngcontent-%COMP%] {\n  background: #f0faf5;\n  border-color: #85d4a8;\n}\n.note-paper.note-color-blue[_ngcontent-%COMP%] {\n  background: #f0f8ff;\n  border-color: #85c4f0;\n}\n.note-paper.note-color-lavender[_ngcontent-%COMP%] {\n  background: #f8f0ff;\n  border-color: #c0a0f0;\n}\n.note-paper.note-color-peach[_ngcontent-%COMP%] {\n  background: #fff5f0;\n  border-color: #f0b898;\n}\n.note-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 0.75rem;\n  border: none;\n  background: transparent;\n  font-family: "Nunito", sans-serif;\n  font-size: 0.88rem;\n  color: var(--text);\n  resize: none;\n  line-height: 1.55;\n}\n.note-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.note-textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.note-form-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.note-form-btns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  padding: 0.35rem 0.9rem;\n}\n.sticker-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.cat-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.cat-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.22rem 0.55rem;\n  border-radius: 999px;\n  border: 1.5px solid var(--border);\n  background: var(--bg);\n  font-family: "Nunito", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.12s;\n}\n.cat-tab[_ngcontent-%COMP%]:hover {\n  background: var(--primary-l);\n  border-color: var(--primary);\n  color: var(--primary-d);\n}\n.cat-tab.active[_ngcontent-%COMP%] {\n  background: var(--primary-l);\n  border-color: var(--primary);\n  color: var(--primary-d);\n}\n.cat-name[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n}\n.picker-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 2px;\n}\n.picker-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1.5px solid transparent;\n  border-radius: 8px;\n  font-size: 1.15rem;\n  padding: 0.22rem;\n  cursor: pointer;\n  aspect-ratio: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.12s;\n}\n.picker-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-l);\n  border-color: var(--border);\n  transform: scale(1.22);\n}\n.picker-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.92);\n}\n.placed-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.3rem;\n}\n.placed-sticker[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  cursor: pointer;\n  border-radius: 8px;\n  padding: 0.1rem 0.15rem;\n  border: 1.5px solid transparent;\n  transition: all 0.15s;\n}\n.placed-sticker[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 70, 70, 0.1);\n  border-color: rgba(255, 70, 70, 0.25);\n  transform: scale(1.1);\n}\n.panel-footer[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.empty-panel[_ngcontent-%COMP%] {\n  padding: 2rem 1.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n}\n.empty-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.8rem;\n  text-align: center;\n}\n.empty-deco[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  letter-spacing: 5px;\n}\n.empty-title[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  color: var(--primary-d);\n  margin: 0;\n}\n.empty-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  font-weight: 600;\n  line-height: 1.6;\n}\n.month-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.75rem;\n  padding: 0.75rem 1.25rem;\n  background: var(--bg);\n  border-radius: 14px;\n  border: 1.5px solid var(--border);\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.2rem;\n}\n.stat-num[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--primary-d);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.hint-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  font-weight: 600;\n  border-top: 1.5px solid var(--border);\n  padding-top: 0.75rem;\n  width: 100%;\n  justify-content: center;\n}\n.note-card-stickers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px;\n  margin-bottom: 0.25rem;\n}\n.note-card-sticker[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1;\n}\n.note-sticker-picker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.note-sticker-cats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.mini-cat-btn[_ngcontent-%COMP%] {\n  background: var(--bg);\n  border: 1.5px solid var(--border);\n  border-radius: 8px;\n  padding: 0.15rem 0.35rem;\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: all 0.12s;\n  line-height: 1;\n}\n.mini-cat-btn[_ngcontent-%COMP%]:hover, .mini-cat-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary-l);\n  border-color: var(--primary);\n  transform: scale(1.1);\n}\n.note-sticker-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  gap: 2px;\n}\n.mini-sticker-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1.5px solid transparent;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  padding: 0.12rem;\n  cursor: pointer;\n  aspect-ratio: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.12s;\n}\n.mini-sticker-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-l);\n  border-color: var(--border);\n  transform: scale(1.2);\n}\n.note-selected-stickers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  padding: 0.3rem 0.4rem;\n  background: var(--bg);\n  border-radius: 8px;\n  border: 1.5px solid var(--border);\n  min-height: 30px;\n}\n.note-sel-sticker[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  cursor: pointer;\n  border-radius: 4px;\n  padding: 0.05rem 0.1rem;\n  border: 1.5px solid transparent;\n  line-height: 1;\n  transition: all 0.12s;\n}\n.note-sel-sticker[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 50, 50, 0.1);\n  border-color: rgba(220, 50, 50, 0.25);\n  transform: scale(1.15);\n}\n@media (max-width: 900px) {\n  .cal-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .right-col[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n@media (max-width: 640px) {\n  .calendar-page[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n  .day-cell[_ngcontent-%COMP%] {\n    min-height: 60px;\n  }\n  .cell-sticker[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .cell-note[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .month-display[_ngcontent-%COMP%] {\n    min-width: 140px;\n  }\n  .month-name[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n  }\n}\n/*# sourceMappingURL=calendar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarComponent, { className: "CalendarComponent", filePath: "src\\app\\pages\\calendar\\calendar.component.ts", lineNumber: 26 });
})();
export {
  CalendarComponent
};
//# sourceMappingURL=chunk-UHI3M3RP.js.map
