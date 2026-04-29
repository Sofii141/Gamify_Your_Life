import {
  GameService
} from "./chunk-7DFMREMJ.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  __spreadProps,
  __spreadValues,
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
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
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
} from "./chunk-2HLPR2EO.js";

// src/app/pages/skills-page/skills-page.component.ts
var _c0 = (a0) => ({ skill: a0 });
function SkillsPageComponent_div_41_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function SkillsPageComponent_div_41_button_1_Template_button_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectedCategory.set(cat_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
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
function SkillsPageComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, SkillsPageComponent_div_41_button_1_Template, 7, 7, "button", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.categories);
  }
}
function SkillsPageComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 35);
    \u0275\u0275text(2, "\u{1F333} Skills connected by dependencies \u2014 unlock by leveling up prerequisites");
    \u0275\u0275elementEnd()();
  }
}
function SkillsPageComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 35);
    \u0275\u0275text(2, "\u{1F5FA}\uFE0F Click any waypoint to practice \xB7 Scroll each path to see all skills");
    \u0275\u0275elementEnd()();
  }
}
function SkillsPageComponent_button_45_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "Soon");
    \u0275\u0275elementEnd();
  }
}
function SkillsPageComponent_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function SkillsPageComponent_button_45_Template_button_click_0_listener() {
      const vm_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(vm_r5.available && ctx_r2.viewMode.set(vm_r5.id));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SkillsPageComponent_button_45_span_5_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vm_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.viewMode() === vm_r5.id)("disabled", !vm_r5.available);
    \u0275\u0275property("title", vm_r5.available ? vm_r5.label : vm_r5.label + " (coming soon)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vm_r5.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !vm_r5.available);
  }
}
function SkillsPageComponent_ng_container_46_ng_container_1_div_1_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SkillsPageComponent_ng_container_46_ng_container_1_div_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SkillsPageComponent_ng_container_46_ng_container_1_div_1_ng_container_9_ng_container_1_Template, 1, 0, "ng-container", 47);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const skill_r6 = ctx.$implicit;
    \u0275\u0275nextContext(4);
    const skillCard_r7 = \u0275\u0275reference(50);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", skillCard_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, skill_r6));
  }
}
function SkillsPageComponent_ng_container_46_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "span");
    \u0275\u0275text(3, "\u{1F4BB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Programming");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 45);
    \u0275\u0275template(9, SkillsPageComponent_ng_container_46_ng_container_1_div_1_ng_container_9_Template, 2, 4, "ng-container", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r2.masteredInCategory(ctx_r2.programmingSkills()), "/", ctx_r2.programmingSkills().length, " mastered");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.programmingSkills());
  }
}
function SkillsPageComponent_ng_container_46_ng_container_1_div_2_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SkillsPageComponent_ng_container_46_ng_container_1_div_2_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SkillsPageComponent_ng_container_46_ng_container_1_div_2_ng_container_9_ng_container_1_Template, 1, 0, "ng-container", 47);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const skill_r8 = ctx.$implicit;
    \u0275\u0275nextContext(4);
    const skillCard_r7 = \u0275\u0275reference(50);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", skillCard_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, skill_r8));
  }
}
function SkillsPageComponent_ng_container_46_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 48)(2, "span");
    \u0275\u0275text(3, "\u{1F3A8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Creative");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 45);
    \u0275\u0275template(9, SkillsPageComponent_ng_container_46_ng_container_1_div_2_ng_container_9_Template, 2, 4, "ng-container", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r2.masteredInCategory(ctx_r2.creativeSkills()), "/", ctx_r2.creativeSkills().length, " mastered");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.creativeSkills());
  }
}
function SkillsPageComponent_ng_container_46_ng_container_1_div_3_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SkillsPageComponent_ng_container_46_ng_container_1_div_3_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SkillsPageComponent_ng_container_46_ng_container_1_div_3_ng_container_9_ng_container_1_Template, 1, 0, "ng-container", 47);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const skill_r9 = ctx.$implicit;
    \u0275\u0275nextContext(4);
    const skillCard_r7 = \u0275\u0275reference(50);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", skillCard_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, skill_r9));
  }
}
function SkillsPageComponent_ng_container_46_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 49)(2, "span");
    \u0275\u0275text(3, "\u{1F338}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Life");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 45);
    \u0275\u0275template(9, SkillsPageComponent_ng_container_46_ng_container_1_div_3_ng_container_9_Template, 2, 4, "ng-container", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r2.masteredInCategory(ctx_r2.lifeSkills()), "/", ctx_r2.lifeSkills().length, " mastered");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.lifeSkills());
  }
}
function SkillsPageComponent_ng_container_46_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SkillsPageComponent_ng_container_46_ng_container_1_div_1_Template, 10, 3, "div", 41)(2, SkillsPageComponent_ng_container_46_ng_container_1_div_2_Template, 10, 3, "div", 41)(3, SkillsPageComponent_ng_container_46_ng_container_1_div_3_Template, 10, 3, "div", 41);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.programmingSkills().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.creativeSkills().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.lifeSkills().length);
  }
}
function SkillsPageComponent_ng_container_46_ng_template_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SkillsPageComponent_ng_container_46_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SkillsPageComponent_ng_container_46_ng_template_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 47);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const skill_r10 = ctx.$implicit;
    \u0275\u0275nextContext(3);
    const skillCard_r7 = \u0275\u0275reference(50);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", skillCard_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, skill_r10));
  }
}
function SkillsPageComponent_ng_container_46_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 45);
    \u0275\u0275template(2, SkillsPageComponent_ng_container_46_ng_template_2_ng_container_2_Template, 2, 4, "ng-container", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.filteredSkills());
  }
}
function SkillsPageComponent_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SkillsPageComponent_ng_container_46_ng_container_1_Template, 4, 3, "ng-container", 40)(2, SkillsPageComponent_ng_container_46_ng_template_2_Template, 3, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const filteredView_r11 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedCategory() === "All")("ngIfElse", filteredView_r11);
  }
}
function SkillsPageComponent_ng_container_47_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function SkillsPageComponent_ng_container_47_button_3_Template_button_click_0_listener() {
      const tc_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.svgCategory.set(tc_r13.id));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tc_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.svgCategory() === tc_r13.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tc_r13.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tc_r13.label);
  }
}
function SkillsPageComponent_ng_container_47__svg_ng_container_17__svg_text_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 78);
    \u0275\u0275text(1, "\u{1F512}");
    \u0275\u0275elementEnd();
  }
}
function SkillsPageComponent_ng_container_47__svg_ng_container_17__svg_text_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 79);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function SkillsPageComponent_ng_container_47__svg_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "path", 74);
    \u0275\u0275elementStart(2, "g");
    \u0275\u0275element(3, "circle", 75);
    \u0275\u0275template(4, SkillsPageComponent_ng_container_47__svg_ng_container_17__svg_text_4_Template, 2, 0, "text", 76)(5, SkillsPageComponent_ng_container_47__svg_ng_container_17__svg_text_5_Template, 2, 0, "text", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const conn_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("conn-active", !conn_r14.isLocked);
    \u0275\u0275attribute("d", conn_r14.path)("stroke", conn_r14.isLocked ? "#CBD5E1" : conn_r14.color)("stroke-width", conn_r14.isLocked ? "2" : "3.5")("stroke-dasharray", conn_r14.isLocked ? "7 5" : null)("opacity", conn_r14.isLocked ? "0.4" : "0.6");
    \u0275\u0275advance();
    \u0275\u0275attribute("transform", "translate(" + conn_r14.midX + "," + conn_r14.midY + ")");
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", conn_r14.isLocked ? "white" : conn_r14.color)("stroke", conn_r14.isLocked ? "#CBD5E1" : "white");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", conn_r14.isLocked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !conn_r14.isLocked);
  }
}
function SkillsPageComponent_ng_container_47__svg_g_19__svg_circle_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 93);
  }
  if (rf & 2) {
    const node_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("fill", node_r16.skill.color);
  }
}
function SkillsPageComponent_ng_container_47__svg_g_19__svg_path_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 94);
  }
  if (rf & 2) {
    const node_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("d", ctx_r2.progressArc(node_r16.skill.xp, node_r16.skill.xpToNext, 38))("stroke", node_r16.skill.level >= 10 ? "#F59E0B" : node_r16.skill.color)("filter", node_r16.skill.level >= 10 ? "url(#glow-f)" : null);
  }
}
function SkillsPageComponent_ng_container_47__svg_g_19__svg_circle_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 95);
  }
}
function SkillsPageComponent_ng_container_47__svg_g_19__svg_text_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 96);
    \u0275\u0275text(1, "+10 XP \u2728");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("fill", node_r16.skill.color);
  }
}
function SkillsPageComponent_ng_container_47__svg_g_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "g", 80);
    \u0275\u0275listener("click", function SkillsPageComponent_ng_container_47__svg_g_19_Template_g_click_0_listener() {
      const node_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(!node_r16.isLocked && ctx_r2.practice(node_r16.skill));
    });
    \u0275\u0275template(1, SkillsPageComponent_ng_container_47__svg_g_19__svg_circle_1_Template, 1, 1, "circle", 81);
    \u0275\u0275element(2, "circle", 82);
    \u0275\u0275template(3, SkillsPageComponent_ng_container_47__svg_g_19__svg_path_3_Template, 1, 3, "path", 83);
    \u0275\u0275element(4, "circle", 84);
    \u0275\u0275template(5, SkillsPageComponent_ng_container_47__svg_g_19__svg_circle_5_Template, 1, 0, "circle", 85);
    \u0275\u0275elementStart(6, "text", 86);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "g", 87);
    \u0275\u0275element(9, "circle", 88);
    \u0275\u0275elementStart(10, "text", 89);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "text", 90);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "text", 91);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, SkillsPageComponent_ng_container_47__svg_g_19__svg_text_16_Template, 2, 1, "text", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const node_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("node-locked", node_r16.isLocked)("node-mastered", !node_r16.isLocked && node_r16.skill.level >= 10);
    \u0275\u0275attribute("transform", "translate(" + node_r16.pos.x + "," + node_r16.pos.y + ")")("title", node_r16.isLocked ? node_r16.skill.name + " \u2013 requires Lv." + node_r16.requiresLevel : node_r16.skill.name + " \u2013 click to practice");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !node_r16.isLocked);
    \u0275\u0275advance();
    \u0275\u0275attribute("stroke", node_r16.isLocked ? "#E2E8F0" : node_r16.skill.color)("opacity", node_r16.isLocked ? "0.3" : "0.18");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !node_r16.isLocked);
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", node_r16.isLocked ? "#F1F5F9" : node_r16.skill.bgColor)("stroke", node_r16.isLocked ? "#CBD5E1" : node_r16.skill.color)("filter", node_r16.isLocked ? "url(#grey-f)" : "url(#shadow-f)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !node_r16.isLocked && node_r16.skill.level >= 10);
    \u0275\u0275advance();
    \u0275\u0275attribute("opacity", node_r16.isLocked ? "0.3" : "1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(node_r16.skill.icon);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("fill", node_r16.isLocked ? "#94A3B8" : node_r16.skill.level >= 10 ? "#D97706" : node_r16.skill.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(node_r16.skill.level);
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", node_r16.isLocked ? "#94A3B8" : "#1F2937");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(node_r16.skill.name);
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", node_r16.isLocked ? "#CBD5E1" : ctx_r2.getTierColor(node_r16.skill.level));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(node_r16.isLocked ? "Lv." + node_r16.requiresLevel + " needed" : ctx_r2.getTier(node_r16.skill.level));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !node_r16.isLocked && ctx_r2.xpBurst() === node_r16.skill.id);
  }
}
function SkillsPageComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 50)(2, "div", 51);
    \u0275\u0275template(3, SkillsPageComponent_ng_container_47_button_3_Template, 5, 4, "button", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 54)(6, "defs")(7, "filter", 55);
    \u0275\u0275element(8, "feGaussianBlur", 56);
    \u0275\u0275elementStart(9, "feMerge");
    \u0275\u0275element(10, "feMergeNode", 57)(11, "feMergeNode", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "filter", 59);
    \u0275\u0275element(13, "feDropShadow", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "filter", 61);
    \u0275\u0275element(15, "feColorMatrix", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "g", 63);
    \u0275\u0275template(17, SkillsPageComponent_ng_container_47__svg_ng_container_17_Template, 6, 12, "ng-container", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "g", 64);
    \u0275\u0275template(19, SkillsPageComponent_ng_container_47__svg_g_19_Template, 17, 23, "g", 65);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 66)(21, "div", 67);
    \u0275\u0275element(22, "div", 68);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Available \u2013 click to practice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 67);
    \u0275\u0275element(26, "div", 69);
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Locked \u2013 level up prerequisite first");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 70);
    \u0275\u0275element(31, "path", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "Skill dependency path");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 70);
    \u0275\u0275element(36, "path", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "Locked path");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.treeCats);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("viewBox", "0 0 " + ctx_r2.getSvgConfig().width + " " + ctx_r2.getSvgConfig().height)("width", ctx_r2.getSvgConfig().width)("height", ctx_r2.getSvgConfig().height);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r2.svgConnections());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.svgNodes());
  }
}
function SkillsPageComponent_ng_container_48_div_23_div_7_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275text(1, "+10 XP \u2728");
    \u0275\u0275elementEnd();
  }
}
function SkillsPageComponent_ng_container_48_div_23_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275element(1, "div", 119);
    \u0275\u0275elementStart(2, "span", 120);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 121)(5, "div", 122);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 123);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 124);
    \u0275\u0275element(10, "div", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 126);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 127);
    \u0275\u0275listener("click", function SkillsPageComponent_ng_container_48_div_23_div_7_Template_button_click_13_listener() {
      const item_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.practice(item_r18.skill));
    });
    \u0275\u0275text(14, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, SkillsPageComponent_ng_container_48_div_23_div_7_div_15_Template, 2, 0, "div", 128);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("--fc-color", item_r18.skill.color)("--fc-bg", item_r18.skill.bgColor);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r18.skill.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r18.skill.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Lv.", item_r18.skill.level, " \xB7 ", item_r18.needed, " XP to go");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", item_r18.pct, "%")("background", item_r18.skill.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r18.pct, "%");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.xpBurst() === item_r18.skill.id);
  }
}
function SkillsPageComponent_ng_container_48_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "span", 114);
    \u0275\u0275text(3, "\u{1F3AF} Focus Now");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 115);
    \u0275\u0275text(5, "Skills closest to your next level-up");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 116);
    \u0275\u0275template(7, SkillsPageComponent_ng_container_48_div_23_div_7_Template, 16, 14, "div", 117);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.focusSkills());
  }
}
function SkillsPageComponent_ng_container_48_div_24_ng_container_17__svg_path_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 154);
  }
  if (rf & 2) {
    const stop_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("d", ctx_r2.progressArc(stop_r20.skill.xp, stop_r20.skill.xpToNext, 34))("stroke", stop_r20.isMastered ? "#F59E0B" : stop_r20.skill.color);
  }
}
function SkillsPageComponent_ng_container_48_div_24_ng_container_17__svg_text_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 155);
    \u0275\u0275text(1, "\u{1F451}");
    \u0275\u0275elementEnd();
  }
}
function SkillsPageComponent_ng_container_48_div_24_ng_container_17_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156);
    \u0275\u0275text(1, "+10 XP \u2728");
    \u0275\u0275elementEnd();
  }
}
function SkillsPageComponent_ng_container_48_div_24_ng_container_17_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157);
    \u0275\u0275element(1, "div", 158);
    \u0275\u0275elementStart(2, "div", 159);
    \u0275\u0275text(3, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r21 = \u0275\u0275nextContext().index;
    const path_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("connector-locked", i_r21 + 1 < path_r22.stops.length && path_r22.stops[i_r21 + 1].isLocked);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", i_r21 + 1 < path_r22.stops.length && path_r22.stops[i_r21 + 1].isLocked ? void 0 : path_r22.color);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", i_r21 + 1 < path_r22.stops.length && path_r22.stops[i_r21 + 1].isLocked ? "#CBD5E1" : path_r22.color);
  }
}
function SkillsPageComponent_ng_container_48_div_24_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 141);
    \u0275\u0275listener("click", function SkillsPageComponent_ng_container_48_div_24_ng_container_17_Template_div_click_1_listener() {
      const stop_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!stop_r20.isLocked && ctx_r2.practice(stop_r20.skill));
    });
    \u0275\u0275elementStart(2, "div", 142);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 143);
    \u0275\u0275element(4, "circle", 144);
    \u0275\u0275template(5, SkillsPageComponent_ng_container_48_div_24_ng_container_17__svg_path_5_Template, 1, 2, "path", 145);
    \u0275\u0275element(6, "circle", 146);
    \u0275\u0275elementStart(7, "text", 147);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SkillsPageComponent_ng_container_48_div_24_ng_container_17__svg_text_9_Template, 2, 0, "text", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 149);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 150);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 151);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, SkillsPageComponent_ng_container_48_div_24_ng_container_17_div_16_Template, 2, 0, "div", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, SkillsPageComponent_ng_container_48_div_24_ng_container_17_div_17_Template, 4, 6, "div", 153);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const stop_r20 = ctx.$implicit;
    const last_r23 = ctx.last;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("stop-locked", stop_r20.isLocked)("stop-mastered", stop_r20.isMastered);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("stroke", stop_r20.isLocked ? "#E2E8F0" : stop_r20.skill.color)("opacity", stop_r20.isLocked ? "0.3" : "0.15");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !stop_r20.isLocked && stop_r20.skill.xp > 0);
    \u0275\u0275advance();
    \u0275\u0275attribute("fill", stop_r20.isLocked ? "#F1F5F9" : stop_r20.skill.bgColor)("stroke", stop_r20.isLocked ? "#CBD5E1" : stop_r20.skill.color);
    \u0275\u0275advance();
    \u0275\u0275attribute("opacity", stop_r20.isLocked ? "0.3" : "1");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stop_r20.skill.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stop_r20.isMastered);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", stop_r20.isLocked ? "#94A3B8" : stop_r20.isMastered ? "#D97706" : stop_r20.skill.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Lv.", stop_r20.skill.level, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("stop-label-locked", stop_r20.isLocked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stop_r20.skill.name);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", stop_r20.isLocked ? "#CBD5E1" : ctx_r2.getTierColor(stop_r20.skill.level));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", stop_r20.isLocked ? "Lv." + stop_r20.requiresLevel + " req." : ctx_r2.getTier(stop_r20.skill.level), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !stop_r20.isLocked && ctx_r2.xpBurst() === stop_r20.skill.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !last_r23);
  }
}
function SkillsPageComponent_ng_container_48_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "div", 131)(2, "div", 132)(3, "div", 133)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 134);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 135)(11, "div", 136);
    \u0275\u0275element(12, "div", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 138);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 139)(16, "div", 140);
    \u0275\u0275template(17, SkillsPageComponent_ng_container_48_div_24_ng_container_17_Template, 18, 23, "ng-container", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const path_r22 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", path_r22.tagClass);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(path_r22.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(path_r22.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", path_r22.masteredCount, "/", path_r22.totalStops, " mastered");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", path_r22.pathProgress, "%")("background", path_r22.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", path_r22.pathProgress, "%");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", path_r22.stops);
  }
}
function SkillsPageComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 97)(2, "div", 98)(3, "div", 99)(4, "h2", 100);
    \u0275\u0275text(5, "\u{1F5FA}\uFE0F Learning Roadmap");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 101);
    \u0275\u0275text(7, "Your journey from Novice to Master across all skills");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 102)(9, "div", 103)(10, "span", 104);
    \u0275\u0275text(11, "Overall Mastery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 105);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 106);
    \u0275\u0275element(15, "div", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 108)(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 109);
    \u0275\u0275text(20, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(23, SkillsPageComponent_ng_container_48_div_23_Template, 8, 1, "div", 110)(24, SkillsPageComponent_ng_container_48_div_24_Template, 18, 11, "div", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("", ctx_r2.overallProgress(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.overallProgress(), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.masteredCount(), " skills mastered");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.totalXpEarned(), " total XP");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.focusSkills().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.roadmapPaths());
  }
}
function SkillsPageComponent_ng_template_49_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 187);
  }
}
function SkillsPageComponent_ng_template_49_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 188);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r25 = \u0275\u0275nextContext().skill;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3AF} ", ctx_r2.xpNeeded(skill_r25), " XP to level up");
  }
}
function SkillsPageComponent_ng_template_49_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 189);
    \u0275\u0275text(1, "\u2728 Maximum level reached!");
    \u0275\u0275elementEnd();
  }
}
function SkillsPageComponent_ng_template_49_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275text(1, "+10 XP \u2728");
    \u0275\u0275elementEnd();
  }
}
function SkillsPageComponent_ng_template_49_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 190);
    \u0275\u0275text(1, "\u{1F389} LEVEL UP!");
    \u0275\u0275elementEnd();
  }
}
function SkillsPageComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 160);
    \u0275\u0275listener("mouseenter", function SkillsPageComponent_ng_template_49_Template_div_mouseenter_0_listener() {
      const skill_r25 = \u0275\u0275restoreView(_r24).skill;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hoveredSkill.set(skill_r25.id));
    })("mouseleave", function SkillsPageComponent_ng_template_49_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hoveredSkill.set(null));
    });
    \u0275\u0275element(1, "div", 161);
    \u0275\u0275template(2, SkillsPageComponent_ng_template_49_div_2_Template, 1, 0, "div", 162);
    \u0275\u0275elementStart(3, "div", 163)(4, "div", 164)(5, "span", 165);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 166)(8, "span", 167);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 168);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 169);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 170)(15, "div", 171);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 172);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 173)(20, "div", 174)(21, "span", 175);
    \u0275\u0275text(22, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 176);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 177);
    \u0275\u0275element(26, "div", 178)(27, "div", 179);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 180);
    \u0275\u0275template(29, SkillsPageComponent_ng_template_49_span_29_Template, 2, 1, "span", 181)(30, SkillsPageComponent_ng_template_49_span_30_Template, 2, 0, "span", 182);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "button", 183);
    \u0275\u0275listener("click", function SkillsPageComponent_ng_template_49_Template_button_click_31_listener() {
      const skill_r25 = \u0275\u0275restoreView(_r24).skill;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.practice(skill_r25));
    });
    \u0275\u0275elementStart(32, "span", 184);
    \u0275\u0275text(33, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "Practice");
    \u0275\u0275elementStart(35, "span", 185);
    \u0275\u0275text(36, "+10 XP");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, SkillsPageComponent_ng_template_49_div_37_Template, 2, 0, "div", 128)(38, SkillsPageComponent_ng_template_49_div_38_Template, 2, 0, "div", 186);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r25 = ctx.skill;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--sk-color", skill_r25.color)("--sk-bg", skill_r25.bgColor);
    \u0275\u0275classProp("practicing", ctx_r2.isPracticing(skill_r25.id))("levelled-up", ctx_r2.isLevelling(skill_r25.id))("mastered", skill_r25.level >= 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", skill_r25.level >= 10);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(skill_r25.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Lv.", skill_r25.level, "");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.getTierColor(skill_r25.level))("background", ctx_r2.getTierBg(skill_r25.level));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", skill_r25.level >= 10 ? "\u{1F451}" : "", " ", ctx_r2.getTier(skill_r25.level), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", skill_r25.level >= 10 ? "#D97706" : skill_r25.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.stars(skill_r25.level));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(skill_r25.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(skill_r25.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", skill_r25.xp, " / ", skill_r25.xpToNext, " XP");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.xpPercent(skill_r25), "%")("background", skill_r25.level >= 10 ? "linear-gradient(90deg,#f59e0b,#d97706)" : skill_r25.color);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", skill_r25.level < 10);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", skill_r25.level >= 10);
    \u0275\u0275advance();
    \u0275\u0275classProp("mastered-btn", skill_r25.level >= 10);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.xpBurst() === skill_r25.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLevelling(skill_r25.id));
  }
}
var SKILL_DEPS = {
  "algo": { parent: "python", requiresLevel: 2 },
  "db": { parent: "python", requiresLevel: 2 },
  "ts": { parent: "js", requiresLevel: 2 },
  "web": { parent: "js", requiresLevel: 2 },
  "sysdesign": { parent: "web", requiresLevel: 3 },
  "uiux": { parent: "creativity", requiresLevel: 2 },
  "selfcare": { parent: "wellness", requiresLevel: 2 },
  "study": { parent: "focus", requiresLevel: 2 }
};
var SVG_CONFIGS = {
  Programming: {
    width: 760,
    height: 650,
    positions: {
      python: { x: 110, y: 140 },
      js: { x: 110, y: 330 },
      git: { x: 110, y: 490 },
      cpp: { x: 110, y: 590 },
      algo: { x: 370, y: 70 },
      db: { x: 370, y: 200 },
      ts: { x: 370, y: 300 },
      web: { x: 370, y: 420 },
      sysdesign: { x: 620, y: 380 }
    }
  },
  Creative: {
    width: 520,
    height: 340,
    positions: {
      creativity: { x: 110, y: 130 },
      writing: { x: 110, y: 280 },
      uiux: { x: 370, y: 130 }
    }
  },
  Life: {
    width: 520,
    height: 500,
    positions: {
      wellness: { x: 110, y: 120 },
      focus: { x: 110, y: 280 },
      social: { x: 110, y: 430 },
      selfcare: { x: 370, y: 120 },
      study: { x: 370, y: 280 }
    }
  }
};
var ROADMAP_ORDER = {
  Programming: ["python", "js", "git", "cpp", "algo", "ts", "db", "web", "sysdesign"],
  Creative: ["creativity", "writing", "uiux"],
  Life: ["wellness", "focus", "social", "selfcare", "study"]
};
var PATH_DEFS = [
  { id: "Programming", icon: "\u{1F4BB}", label: "Programming Path", color: "#3776ab", bgColor: "#dbeafe", tagClass: "programming-tag" },
  { id: "Creative", icon: "\u{1F3A8}", label: "Creative Path", color: "#7c3aed", bgColor: "#f3e8ff", tagClass: "creative-tag" },
  { id: "Life", icon: "\u{1F338}", label: "Life Mastery", color: "#be185d", bgColor: "#fdf2f8", tagClass: "life-tag" }
];
var SkillsPageComponent = class _SkillsPageComponent {
  constructor() {
    this.game = inject(GameService);
    this.selectedCategory = signal("All");
    this.hoveredSkill = signal(null);
    this.xpBurst = signal(null);
    this.viewMode = signal("grid");
    this.svgCategory = signal("Programming");
    this.treeCats = [
      { id: "Programming", icon: "\u{1F4BB}", label: "Programming" },
      { id: "Creative", icon: "\u{1F3A8}", label: "Creative" },
      { id: "Life", icon: "\u{1F338}", label: "Life" }
    ];
    this.categories = [
      { id: "All", icon: "\u2726", label: "All Skills", color: "var(--primary)" },
      { id: "Programming", icon: "\u{1F4BB}", label: "Programming", color: "#3776ab" },
      { id: "Creative", icon: "\u{1F3A8}", label: "Creative", color: "#7c3aed" },
      { id: "Life", icon: "\u{1F338}", label: "Life", color: "#be185d" }
    ];
    this.viewModes = [
      { id: "grid", icon: "\u229E", label: "Cards", available: true },
      { id: "tree", icon: "\u{1F333}", label: "Tree", available: true },
      { id: "path", icon: "\u{1F5FA}\uFE0F", label: "Roadmap", available: true }
    ];
    this.filteredSkills = computed(() => {
      const cat = this.selectedCategory();
      return cat === "All" ? this.game.skills() : this.game.skills().filter((s) => s.category === cat);
    });
    this.programmingSkills = computed(() => this.game.skills().filter((s) => s.category === "Programming"));
    this.creativeSkills = computed(() => this.game.skills().filter((s) => s.category === "Creative"));
    this.lifeSkills = computed(() => this.game.skills().filter((s) => s.category === "Life"));
    this.totalXpEarned = computed(() => this.game.skills().reduce((sum, s) => sum + s.xp, 0));
    this.masteredCount = computed(() => this.game.skills().filter((s) => s.level >= 10).length);
    this.svgNodes = computed(() => {
      const cat = this.svgCategory();
      const config = SVG_CONFIGS[cat];
      const skills = this.game.skills();
      const skillMap = new Map(skills.map((s) => [s.id, s]));
      return Object.entries(config.positions).map(([id, pos]) => {
        const skill = skillMap.get(id);
        if (!skill)
          return null;
        const dep = SKILL_DEPS[id];
        const isLocked = dep ? (skillMap.get(dep.parent)?.level ?? 0) < dep.requiresLevel : false;
        return {
          skill,
          pos,
          isLocked,
          requiresLevel: dep?.requiresLevel ?? 0,
          parentId: dep?.parent ?? ""
        };
      }).filter((n) => n !== null);
    });
    this.svgConnections = computed(() => {
      const cat = this.svgCategory();
      const config = SVG_CONFIGS[cat];
      const skills = this.game.skills();
      const skillMap = new Map(skills.map((s) => [s.id, s]));
      return Object.entries(SKILL_DEPS).filter(([cId, dep]) => config.positions[cId] && config.positions[dep.parent]).map(([cId, dep]) => {
        const from = config.positions[dep.parent];
        const to = config.positions[cId];
        const parentSkill = skillMap.get(dep.parent);
        const childSkill = skillMap.get(cId);
        const isLocked = (parentSkill?.level ?? 0) < dep.requiresLevel;
        return {
          path: this.bezierPath(from, to),
          isLocked,
          color: childSkill?.color ?? "#ccc",
          midX: (from.x + to.x) / 2,
          midY: (from.y + to.y) / 2,
          requiresLevel: dep.requiresLevel,
          parentName: parentSkill?.name ?? ""
        };
      });
    });
    this.roadmapPaths = computed(() => {
      const skills = this.game.skills();
      const skillMap = new Map(skills.map((s) => [s.id, s]));
      return PATH_DEFS.map((path) => {
        const stops = ROADMAP_ORDER[path.id].map((id, index) => {
          const skill = skillMap.get(id);
          if (!skill)
            return null;
          const dep = SKILL_DEPS[id];
          const isLocked = dep ? (skillMap.get(dep.parent)?.level ?? 0) < dep.requiresLevel : false;
          return {
            skill,
            index,
            isLocked,
            isMastered: skill.level >= 10,
            xpPercent: Math.min(100, skill.xp / skill.xpToNext * 100),
            requiresLevel: dep?.requiresLevel ?? 0,
            parentId: dep?.parent ?? ""
          };
        }).filter((s) => s !== null);
        const masteredCount = stops.filter((s) => s.isMastered).length;
        const pathProgress = stops.length ? Math.round(stops.reduce((sum, s) => sum + s.skill.xp / s.skill.xpToNext, 0) / stops.length * 100) : 0;
        return __spreadProps(__spreadValues({}, path), { stops, masteredCount, totalStops: stops.length, pathProgress });
      });
    });
    this.focusSkills = computed(() => this.game.skills().filter((s) => s.level < 10).map((s) => ({
      skill: s,
      pct: Math.round(s.xp / s.xpToNext * 100),
      needed: s.xpToNext - s.xp
    })).sort((a, b) => b.pct - a.pct).slice(0, 3));
    this.overallProgress = computed(() => {
      const skills = this.game.skills();
      if (!skills.length)
        return 0;
      return Math.round(skills.reduce((sum, s) => sum + s.xp / s.xpToNext, 0) / skills.length * 100);
    });
  }
  getSvgConfig() {
    return SVG_CONFIGS[this.svgCategory()];
  }
  bezierPath(from, to) {
    const dx = (to.x - from.x) * 0.55;
    return `M ${from.x} ${from.y} C ${from.x + dx} ${from.y}, ${to.x - dx} ${to.y}, ${to.x} ${to.y}`;
  }
  progressArc(xp, xpToNext, r) {
    const pct = Math.min(0.9999, xp / xpToNext);
    if (pct <= 0)
      return "";
    const angle = pct * 2 * Math.PI;
    const x = r * Math.sin(angle);
    const y = -r * Math.cos(angle);
    const large = angle > Math.PI ? 1 : 0;
    return `M 0 -${r} A ${r} ${r} 0 ${large} 1 ${x} ${y}`;
  }
  /* ── Helpers ── */
  masteredInCategory(skills) {
    return skills.filter((s) => s.level >= 10).length;
  }
  xpPercent(skill) {
    return Math.min(100, skill.xp / skill.xpToNext * 100);
  }
  xpNeeded(skill) {
    return Math.max(0, skill.xpToNext - skill.xp);
  }
  categoryCount(cat) {
    if (cat === "All")
      return this.game.skills().length;
    return this.game.skills().filter((s) => s.category === cat).length;
  }
  stars(level) {
    const filled = Math.min(5, Math.floor((level - 1) / 2) + 1);
    return "\u2605".repeat(filled) + "\u2606".repeat(5 - filled);
  }
  getTier(level) {
    if (level >= 10)
      return "Master";
    if (level >= 7)
      return "Expert";
    if (level >= 5)
      return "Practitioner";
    if (level >= 3)
      return "Learner";
    return "Novice";
  }
  getTierColor(level) {
    if (level >= 10)
      return "#DC2626";
    if (level >= 7)
      return "#D97706";
    if (level >= 5)
      return "#7C3AED";
    if (level >= 3)
      return "#2563EB";
    return "#9CA3AF";
  }
  getTierBg(level) {
    if (level >= 10)
      return "#FEF2F2";
    if (level >= 7)
      return "#FFFBEB";
    if (level >= 5)
      return "#F5F3FF";
    if (level >= 3)
      return "#EFF6FF";
    return "#F9FAFB";
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
  static {
    this.\u0275fac = function SkillsPageComponent_Factory(t) {
      return new (t || _SkillsPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkillsPageComponent, selectors: [["app-skills-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 75, vars: 11, consts: [["skillCard", ""], ["filteredView", ""], [1, "skills-page"], [1, "skills-hero"], [1, "hero-text"], [1, "pixel", "hero-title"], [1, "hero-sub"], [1, "stats-chips"], [1, "stat-chip", "chip-blue"], [1, "chip-icon"], [1, "chip-val", "pixel"], [1, "chip-label"], [1, "stat-chip", "chip-pink"], [1, "stat-chip", "chip-purple"], [1, "stat-chip", "chip-gold"], [1, "controls-row"], ["class", "cat-filter", 4, "ngIf"], [1, "view-modes"], ["class", "view-btn", 3, "active", "disabled", "title", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "tip-banner"], [1, "tip-tiers"], [1, "tier-pill", 2, "color", "#9CA3AF", "background", "#F9FAFB"], [1, "tier-arrow"], [1, "tier-pill", 2, "color", "#2563EB", "background", "#EFF6FF"], [1, "tier-pill", 2, "color", "#7C3AED", "background", "#F5F3FF"], [1, "tier-pill", 2, "color", "#D97706", "background", "#FFFBEB"], [1, "tier-pill", 2, "color", "#DC2626", "background", "#FEF2F2"], [1, "tip-text"], [1, "cat-filter"], ["class", "cat-btn", 3, "active", "--cat-color", "click", 4, "ngFor", "ngForOf"], [1, "cat-btn", 3, "click"], [1, "cat-icon"], [1, "cat-label"], [1, "cat-count"], [1, "tree-hint"], [1, "view-btn", 3, "click", "title"], [1, "view-label"], ["class", "soon-badge", 4, "ngIf"], [1, "soon-badge"], [4, "ngIf", "ngIfElse"], ["class", "skill-section", 4, "ngIf"], [1, "skill-section"], [1, "section-tag", "programming-tag"], [1, "section-progress"], [1, "grid-3"], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "section-tag", "creative-tag"], [1, "section-tag", "life-tag"], [1, "svg-tree-panel"], [1, "tree-cat-tabs"], ["class", "tree-cat-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "svg-scroll-wrap"], ["xmlns", "http://www.w3.org/2000/svg", 1, "skill-tree-svg"], ["id", "glow-f", "x", "-40%", "y", "-40%", "width", "180%", "height", "180%"], ["stdDeviation", "4", "result", "b"], ["in", "b"], ["in", "SourceGraphic"], ["id", "shadow-f", "x", "-25%", "y", "-25%", "width", "150%", "height", "150%"], ["dx", "0", "dy", "3", "stdDeviation", "6", "flood-color", "#00000018"], ["id", "grey-f", "x", "-5%", "y", "-5%", "width", "110%", "height", "110%"], ["type", "saturate", "values", "0.1"], [1, "connections-layer"], [1, "nodes-layer"], ["class", "skill-node-group", 3, "node-locked", "node-mastered", "click", 4, "ngFor", "ngForOf"], [1, "tree-legend"], [1, "legend-item"], [1, "legend-swatch", "swatch-unlocked"], [1, "legend-swatch", "swatch-locked"], ["width", "28", "height", "12", 2, "flex-shrink", "0"], ["d", "M 2 6 Q 14 1 26 6", "fill", "none", "stroke", "var(--primary)", "stroke-width", "3", "stroke-linecap", "round"], ["d", "M 2 6 Q 14 1 26 6", "fill", "none", "stroke", "#CBD5E1", "stroke-width", "2", "stroke-dasharray", "5 4", "stroke-linecap", "round"], [1, "tree-cat-btn", 3, "click"], ["fill", "none", "stroke-linecap", "round", 1, "conn-line"], ["r", "13", "stroke-width", "2", 1, "conn-badge"], ["text-anchor", "middle", "dominant-baseline", "central", "font-size", "12", 4, "ngIf"], ["text-anchor", "middle", "dominant-baseline", "central", "fill", "white", "font-size", "9", "font-weight", "bold", 4, "ngIf"], ["text-anchor", "middle", "dominant-baseline", "central", "font-size", "12"], ["text-anchor", "middle", "dominant-baseline", "central", "fill", "white", "font-size", "9", "font-weight", "bold"], [1, "skill-node-group", 3, "click"], ["r", "46", "opacity", "0.07", "class", "node-halo", 4, "ngIf"], ["r", "38", "fill", "none", "stroke-width", "5", "stroke-linecap", "round"], ["fill", "none", "stroke-width", "5", "stroke-linecap", "round", "class", "progress-arc", 4, "ngIf"], ["r", "30", "stroke-width", "2.5", 1, "node-body"], ["r", "30", "fill", "none", "stroke", "#F59E0B", "stroke-width", "3", "opacity", "0.55", "class", "mastered-ring", 4, "ngIf"], ["text-anchor", "middle", "dominant-baseline", "central", "font-size", "18", 1, "node-emoji"], ["transform", "translate(22,-26)", 1, "level-badge-g"], ["r", "12", "stroke", "white", "stroke-width", "2", 1, "level-badge-circle"], ["text-anchor", "middle", "dominant-baseline", "central", "fill", "white", "font-size", "6.5", "font-weight", "bold", "font-family", "'Press Start 2P', monospace"], ["text-anchor", "middle", "y", "54", "font-size", "11", "font-weight", "700", "font-family", "Nunito, sans-serif", 1, "node-label-name"], ["text-anchor", "middle", "y", "68", "font-size", "9", "font-weight", "600", "font-family", "Nunito, sans-serif", 1, "node-label-tier"], ["text-anchor", "middle", "y", "-55", "font-size", "13", "font-weight", "900", "font-family", "Nunito, sans-serif", "class", "svg-xp-burst", 4, "ngIf"], ["r", "46", "opacity", "0.07", 1, "node-halo"], ["fill", "none", "stroke-width", "5", "stroke-linecap", "round", 1, "progress-arc"], ["r", "30", "fill", "none", "stroke", "#F59E0B", "stroke-width", "3", "opacity", "0.55", 1, "mastered-ring"], ["text-anchor", "middle", "y", "-55", "font-size", "13", "font-weight", "900", "font-family", "Nunito, sans-serif", 1, "svg-xp-burst"], [1, "roadmap-view"], [1, "rm-header"], [1, "rm-header-left"], [1, "pixel", "rm-title"], [1, "rm-subtitle"], [1, "rm-overall"], [1, "rm-overall-label"], [1, "rm-overall-text"], [1, "pixel", "rm-overall-val"], [1, "rm-overall-track"], [1, "rm-overall-fill"], [1, "rm-stat-row"], [1, "rm-dot"], ["class", "focus-section", 4, "ngIf"], ["class", "path-section", 4, "ngFor", "ngForOf"], [1, "focus-section"], [1, "focus-header"], [1, "focus-title"], [1, "focus-sub"], [1, "focus-cards"], ["class", "focus-card", 3, "--fc-color", "--fc-bg", 4, "ngFor", "ngForOf"], [1, "focus-card"], [1, "fc-orb"], [1, "fc-icon"], [1, "fc-info"], [1, "fc-name"], [1, "fc-meta"], [1, "fc-track"], [1, "fc-fill"], [1, "pixel", "fc-pct"], [1, "fc-btn", 3, "click"], ["class", "xp-burst", 4, "ngIf"], [1, "xp-burst"], [1, "path-section"], [1, "path-header"], [1, "path-title-row"], [1, "section-tag", 3, "ngClass"], [1, "path-mastered-label"], [1, "path-progress-row"], [1, "path-progress-track"], [1, "path-progress-fill"], [1, "path-progress-pct"], [1, "road-scroll"], [1, "road-row"], [1, "road-stop", 3, "click"], [1, "stop-ring-wrap"], ["width", "76", "height", "76", "viewBox", "-38 -38 76 76"], ["r", "34", "fill", "none", "stroke-width", "5", "stroke-linecap", "round"], ["fill", "none", "stroke-width", "5", "stroke-linecap", "round", "class", "stop-arc", 4, "ngIf"], ["r", "26", "stroke-width", "2.5"], ["text-anchor", "middle", "dominant-baseline", "central", "font-size", "17"], ["text-anchor", "middle", "y", "-30", "font-size", "13", 4, "ngIf"], [1, "stop-level-badge", "pixel"], [1, "stop-label-name"], [1, "stop-label-tier"], ["class", "xp-burst-stop", 4, "ngIf"], ["class", "road-connector", 3, "connector-locked", 4, "ngIf"], ["fill", "none", "stroke-width", "5", "stroke-linecap", "round", 1, "stop-arc"], ["text-anchor", "middle", "y", "-30", "font-size", "13"], [1, "xp-burst-stop"], [1, "road-connector"], [1, "conn-rail"], [1, "conn-chevron"], [1, "skill-card", 3, "mouseenter", "mouseleave"], [1, "card-orb"], ["class", "mastered-glow", 4, "ngIf"], [1, "card-top"], [1, "icon-wrap"], [1, "skill-emoji"], [1, "level-col"], [1, "level-badge", "pixel"], [1, "tier-badge"], [1, "stars"], [1, "card-mid"], [1, "skill-name"], [1, "skill-desc"], [1, "xp-area"], [1, "xp-label"], [1, "xp-label-left"], [1, "xp-label-right"], [1, "xp-track"], [1, "xp-fill"], [1, "xp-shimmer"], [1, "milestone-row"], ["class", "milestone-text", 4, "ngIf"], ["class", "milestone-text mastered-text", 4, "ngIf"], [1, "practice-btn", 3, "click"], [1, "btn-spark"], [1, "btn-reward"], ["class", "levelup-badge", 4, "ngIf"], [1, "mastered-glow"], [1, "milestone-text"], [1, "milestone-text", "mastered-text"], [1, "levelup-badge"]], template: function SkillsPageComponent_Template(rf, ctx) {
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
        \u0275\u0275text(34, "\u{1F451}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div")(36, "div", 10);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 11);
        \u0275\u0275text(39, "Mastered");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(40, "div", 15);
        \u0275\u0275template(41, SkillsPageComponent_div_41_Template, 2, 1, "div", 16)(42, SkillsPageComponent_div_42_Template, 3, 0, "div", 16)(43, SkillsPageComponent_div_43_Template, 3, 0, "div", 16);
        \u0275\u0275elementStart(44, "div", 17);
        \u0275\u0275template(45, SkillsPageComponent_button_45_Template, 6, 8, "button", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(46, SkillsPageComponent_ng_container_46_Template, 4, 2, "ng-container", 19)(47, SkillsPageComponent_ng_container_47_Template, 39, 6, "ng-container", 19)(48, SkillsPageComponent_ng_container_48_Template, 25, 7, "ng-container", 19)(49, SkillsPageComponent_ng_template_49_Template, 39, 36, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(51, "div", 20)(52, "div", 21)(53, "span", 22);
        \u0275\u0275text(54, "Novice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "span", 23);
        \u0275\u0275text(56, "\u2192");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "span", 24);
        \u0275\u0275text(58, "Learner");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "span", 23);
        \u0275\u0275text(60, "\u2192");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "span", 25);
        \u0275\u0275text(62, "Practitioner");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "span", 23);
        \u0275\u0275text(64, "\u2192");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "span", 26);
        \u0275\u0275text(66, "Expert");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "span", 23);
        \u0275\u0275text(68, "\u2192");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "span", 27);
        \u0275\u0275text(70, "\u{1F451} Master");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "p", 28)(72, "strong");
        \u0275\u0275text(73, "Practice");
        \u0275\u0275elementEnd();
        \u0275\u0275text(74, " daily to earn XP and climb the tiers. Complete quests for bonus XP!");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.programmingSkills().length);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.game.avgSkillLevel());
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.totalXpEarned());
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.masteredCount());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.viewMode() === "grid");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewMode() === "tree");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewMode() === "path");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.viewModes);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewMode() === "grid");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewMode() === "tree");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.viewMode() === "path");
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet], styles: ['@charset "UTF-8";\n\n\n\n.skills-page[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.75rem;\n  max-width: 1200px;\n}\n.skills-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--primary-d);\n  margin-bottom: 0.4rem;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.stats-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.stat-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.65rem 1rem;\n  border-radius: 16px;\n  border: 2px solid;\n  min-width: 90px;\n  transition: transform 0.2s;\n}\n.stat-chip[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.chip-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  border-color: #93c5fd;\n}\n.chip-pink[_ngcontent-%COMP%] {\n  background: #fce7f3;\n  border-color: #f9a8d4;\n}\n.chip-purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  border-color: #c4b5fd;\n}\n.chip-gold[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border-color: #fcd34d;\n}\n.chip-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.chip-val[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: var(--text);\n}\n.chip-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.controls-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.cat-filter[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n}\n.cat-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.55rem 1.1rem;\n  border-radius: 999px;\n  border: 2px solid var(--border);\n  background: var(--bg-card);\n  font-family: "Nunito", sans-serif;\n  font-weight: 700;\n  font-size: 0.88rem;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.cat-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--cat-color, var(--primary));\n  color: var(--text);\n  transform: translateY(-2px);\n}\n.cat-btn.active[_ngcontent-%COMP%] {\n  background: var(--cat-color, var(--primary));\n  border-color: var(--cat-color, var(--primary));\n  color: #fff;\n  box-shadow: 0 4px 14px color-mix(in srgb, var(--cat-color, var(--primary)) 40%, transparent);\n  transform: translateY(-2px);\n}\n.cat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.cat-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3);\n  padding: 0.1rem 0.45rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 800;\n}\n.cat-btn[_ngcontent-%COMP%]:not(.active)   .cat-count[_ngcontent-%COMP%] {\n  background: var(--primary-l);\n  color: var(--primary-d);\n}\n.view-modes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  background: var(--bg-card);\n  border: 2px solid var(--border);\n  border-radius: 12px;\n  padding: 0.3rem;\n}\n.view-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.35rem 0.75rem;\n  border-radius: 8px;\n  border: none;\n  background: transparent;\n  font-family: "Nunito", sans-serif;\n  font-weight: 700;\n  font-size: 0.8rem;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.15s;\n  position: relative;\n}\n.view-btn[_ngcontent-%COMP%]:hover:not(.disabled) {\n  background: var(--primary-l);\n  color: var(--text);\n}\n.view-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n  box-shadow: 0 2px 8px var(--shadow);\n}\n.view-btn.disabled[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.view-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.soon-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -4px;\n  background: var(--secondary);\n  color: #fff;\n  font-size: 0.55rem;\n  font-weight: 800;\n  padding: 0.08rem 0.3rem;\n  border-radius: 6px;\n  white-space: nowrap;\n}\n.skill-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.section-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.45rem 1rem;\n  border-radius: 10px;\n  font-weight: 800;\n  font-size: 0.88rem;\n  align-self: flex-start;\n}\n.section-progress[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  opacity: 0.7;\n  margin-left: 0.25rem;\n}\n.programming-tag[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.creative-tag[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #6d28d9;\n}\n.life-tag[_ngcontent-%COMP%] {\n  background: #fdf2f8;\n  color: #9d174d;\n}\n.grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 1.1rem;\n}\n.skill-card[_ngcontent-%COMP%] {\n  background: var(--sk-bg, var(--bg-card));\n  border: 2px solid color-mix(in srgb, var(--sk-color, var(--primary)) 20%, transparent);\n  border-radius: 20px;\n  padding: 1.35rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  position: relative;\n  overflow: hidden;\n  cursor: default;\n  transition:\n    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),\n    box-shadow 0.25s,\n    border-color 0.25s;\n}\n.skill-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px) scale(1.015);\n  box-shadow: 0 16px 44px color-mix(in srgb, var(--sk-color) 22%, transparent);\n  border-color: color-mix(in srgb, var(--sk-color) 45%, transparent);\n}\n.skill-card.practicing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_cardPulse 0.4s ease;\n}\n.skill-card.levelled-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_levelBurst 0.6s ease;\n  border-color: var(--sk-color) !important;\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--sk-color) 30%, transparent), 0 16px 44px color-mix(in srgb, var(--sk-color) 25%, transparent) !important;\n}\n.skill-card.mastered[_ngcontent-%COMP%] {\n  border-color: #F59E0B !important;\n  background:\n    linear-gradient(\n      145deg,\n      #fffbeb,\n      var(--sk-bg, var(--bg-card)));\n}\n.skill-card.mastered[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 16px 44px rgba(245, 158, 11, 0.3) !important;\n  border-color: #D97706 !important;\n}\n.card-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -30px;\n  right: -30px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      color-mix(in srgb, var(--sk-color) 18%, transparent),\n      transparent 70%);\n  pointer-events: none;\n}\n.mastered-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 20px;\n  background: transparent;\n  pointer-events: none;\n  box-shadow: inset 0 0 20px rgba(245, 158, 11, 0.12);\n  animation: _ngcontent-%COMP%_masterGlow 3s ease-in-out infinite;\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.icon-wrap[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background: color-mix(in srgb, var(--sk-color) 12%, white);\n  border: 2px solid color-mix(in srgb, var(--sk-color) 20%, transparent);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.skill-card[_ngcontent-%COMP%]:hover   .icon-wrap[_ngcontent-%COMP%] {\n  transform: scale(1.12) rotate(-5deg);\n}\n.mastered[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  border-color: #F59E0B;\n  background: #fffbeb;\n}\n.skill-emoji[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.level-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n}\n.level-badge[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  background: var(--sk-color);\n  color: #fff;\n  padding: 0.25rem 0.55rem;\n  border-radius: 8px;\n}\n.mastered[_ngcontent-%COMP%]   .level-badge[_ngcontent-%COMP%] {\n  background: #D97706;\n}\n.tier-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  padding: 0.2rem 0.55rem;\n  border-radius: 999px;\n  white-space: nowrap;\n  border: 1.5px solid currentColor;\n}\n.stars[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  letter-spacing: 1px;\n}\n.card-mid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.skill-name[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 1rem;\n  color: var(--text);\n}\n.skill-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  line-height: 1.45;\n}\n.xp-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.xp-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.xp-label-left[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 800;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.xp-label-right[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  font-variant-numeric: tabular-nums;\n}\n.xp-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  background: color-mix(in srgb, var(--sk-color) 10%, white);\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1.5px solid color-mix(in srgb, var(--sk-color) 20%, transparent);\n  position: relative;\n}\n.mastered[_ngcontent-%COMP%]   .xp-track[_ngcontent-%COMP%] {\n  border-color: #F59E0B;\n  background: #fffbeb;\n}\n.xp-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);\n  position: relative;\n}\n.xp-shimmer[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.45) 50%,\n      transparent 100%);\n  animation: _ngcontent-%COMP%_shimmer 2s infinite;\n  border-radius: 999px;\n}\n.milestone-row[_ngcontent-%COMP%] {\n  min-height: 1.1rem;\n}\n.milestone-text[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.milestone-text.mastered-text[_ngcontent-%COMP%] {\n  color: #D97706;\n}\n.practice-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 100%;\n  padding: 0.65rem;\n  border-radius: 12px;\n  border: 2px solid color-mix(in srgb, var(--sk-color) 35%, transparent);\n  background: color-mix(in srgb, var(--sk-color) 10%, white);\n  color: color-mix(in srgb, var(--sk-color) 80%, black);\n  font-family: "Nunito", sans-serif;\n  font-weight: 800;\n  font-size: 0.9rem;\n  cursor: pointer;\n  margin-top: auto;\n  transition: all 0.18s;\n}\n.practice-btn[_ngcontent-%COMP%]:hover {\n  background: var(--sk-color);\n  color: #fff;\n  border-color: var(--sk-color);\n  transform: scale(1.03);\n  box-shadow: 0 6px 18px color-mix(in srgb, var(--sk-color) 35%, transparent);\n}\n.practice-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.practice-btn.mastered-btn[_ngcontent-%COMP%] {\n  border-color: #F59E0B;\n  background: #fffbeb;\n  color: #D97706;\n}\n.practice-btn.mastered-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #F59E0B,\n      #D97706);\n  color: #fff;\n  border-color: #D97706;\n  box-shadow: 0 6px 18px rgba(245, 158, 11, 0.4);\n}\n.btn-spark[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.btn-reward[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  padding: 0.05rem 0.4rem;\n  border-radius: 6px;\n  font-size: 0.75rem;\n}\n.xp-burst[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 28%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--sk-color);\n  color: #fff;\n  font-weight: 900;\n  font-size: 0.95rem;\n  padding: 0.35rem 0.9rem;\n  border-radius: 10px;\n  pointer-events: none;\n  z-index: 10;\n  animation: _ngcontent-%COMP%_floatUpFade 0.9s ease forwards;\n  white-space: nowrap;\n  box-shadow: 0 4px 14px color-mix(in srgb, var(--sk-color) 40%, transparent);\n}\n.levelup-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: color-mix(in srgb, var(--sk-color) 85%, transparent);\n  color: #fff;\n  font-weight: 900;\n  font-size: 1.15rem;\n  border-radius: 18px;\n  pointer-events: none;\n  z-index: 11;\n  animation: _ngcontent-%COMP%_levelBadgeAnim 2.5s ease forwards;\n}\n.tip-banner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  background: var(--primary-l);\n  border: 2px solid var(--border);\n  border-radius: 16px;\n}\n.tip-tiers[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.tier-pill[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  padding: 0.2rem 0.6rem;\n  border-radius: 999px;\n  border: 1.5px solid currentColor;\n  white-space: nowrap;\n}\n.tier-arrow[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.tip-text[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  line-height: 1.5;\n}\n@keyframes _ngcontent-%COMP%_cardPulse {\n  0% {\n    transform: scale(1);\n  }\n  40% {\n    transform: scale(1.04) translateY(-4px);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_levelBurst {\n  0% {\n    transform: scale(1);\n  }\n  30% {\n    transform: scale(1.06);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatUpFade {\n  0% {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-44px);\n  }\n}\n@keyframes _ngcontent-%COMP%_levelBadgeAnim {\n  0% {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n  15% {\n    opacity: 1;\n    transform: scale(1.05);\n  }\n  70% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(200%);\n  }\n}\n@keyframes _ngcontent-%COMP%_masterGlow {\n  0%, 100% {\n    box-shadow: inset 0 0 20px rgba(245, 158, 11, 0.1);\n  }\n  50% {\n    box-shadow: inset 0 0 28px rgba(245, 158, 11, 0.22);\n  }\n}\n@media (max-width: 768px) {\n  .skills-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n    gap: 1.25rem;\n  }\n  .skills-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .controls-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .grid-3[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n    gap: 0.75rem;\n  }\n  .stat-chip[_ngcontent-%COMP%] {\n    min-width: 75px;\n    padding: 0.55rem 0.75rem;\n  }\n  .tip-tiers[_ngcontent-%COMP%] {\n    gap: 0.3rem;\n  }\n  .tier-arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .svg-tree-panel[_ngcontent-%COMP%] {\n    padding: 1rem 0.75rem;\n    gap: 1rem;\n  }\n  .tree-legend[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n}\n@media (max-width: 480px) {\n  .grid-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .view-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  .tree-cat-btn[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n    padding: 0.4rem 0.8rem;\n  }\n}\n.tree-hint[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  padding: 0.4rem 0.75rem;\n  background: var(--primary-l);\n  border: 1.5px solid var(--border);\n  border-radius: 999px;\n}\n.svg-tree-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  background: var(--bg-card);\n  border: 2px solid var(--border);\n  border-radius: 24px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n.tree-cat-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.tree-cat-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.5rem 1.1rem;\n  border-radius: 999px;\n  border: 2px solid var(--border);\n  background: var(--bg-card);\n  font-family: "Nunito", sans-serif;\n  font-weight: 700;\n  font-size: 0.88rem;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.tree-cat-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--text);\n  transform: translateY(-2px);\n}\n.tree-cat-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: #fff;\n  box-shadow: 0 4px 14px var(--shadow);\n  transform: translateY(-2px);\n}\n.svg-scroll-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  overflow-y: hidden;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #fafbff 0%,\n      #f8f9fc 100%);\n  border: 1.5px solid var(--border);\n  padding: 1rem 0.5rem;\n  background-image:\n    radial-gradient(\n      circle,\n      #d1d5db 1px,\n      transparent 1px);\n  background-size: 28px 28px;\n  background-color: #f9fafb;\n}\n.skill-tree-svg[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.skill-node-group[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.skill-node-group[_ngcontent-%COMP%]   .node-body[_ngcontent-%COMP%], .skill-node-group[_ngcontent-%COMP%]   .node-halo[_ngcontent-%COMP%], .skill-node-group[_ngcontent-%COMP%]   .level-badge-g[_ngcontent-%COMP%] {\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  transform-origin: center;\n  transform-box: fill-box;\n}\n.skill-node-group[_ngcontent-%COMP%]:hover:not(.node-locked)   .node-body[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.skill-node-group[_ngcontent-%COMP%]:hover:not(.node-locked)   .node-halo[_ngcontent-%COMP%] {\n  transform: scale(1.15);\n  opacity: 0.14 !important;\n}\n.skill-node-group[_ngcontent-%COMP%]:hover:not(.node-locked)   .level-badge-g[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.skill-node-group.node-locked[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.node-mastered[_ngcontent-%COMP%]   .mastered-ring[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_masteredPulse 2.4s ease-in-out infinite;\n}\n.progress-arc[_ngcontent-%COMP%] {\n  transition: stroke-dashoffset 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.svg-xp-burst[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_svgBurstFloat 0.9s ease forwards;\n  pointer-events: none;\n}\n.conn-line[_ngcontent-%COMP%] {\n  transition: opacity 0.2s, stroke-width 0.2s;\n}\n.conn-active[_ngcontent-%COMP%]:hover {\n  opacity: 0.9 !important;\n}\n.conn-badge[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n  transform-box: fill-box;\n  transform-origin: center;\n}\n.tree-legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n  padding: 0.65rem 1rem;\n  background: var(--primary-l);\n  border: 1.5px solid var(--border);\n  border-radius: 12px;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.legend-swatch[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  border: 2px solid;\n}\n.swatch-unlocked[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--primary) 15%, white);\n  border-color: var(--primary);\n}\n.swatch-locked[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  border-color: #CBD5E1;\n}\n@keyframes _ngcontent-%COMP%_masteredPulse {\n  0%, 100% {\n    opacity: 0.55;\n    stroke-width: 3;\n  }\n  50% {\n    opacity: 0.9;\n    stroke-width: 4;\n  }\n}\n@keyframes _ngcontent-%COMP%_svgBurstFloat {\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  80% {\n    opacity: 1;\n    transform: translateY(-12px);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-22px);\n  }\n}\n.roadmap-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.rm-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n  background: var(--bg-card);\n  border: 2px solid var(--border);\n  border-radius: 22px;\n  padding: 1.35rem 1.6rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);\n}\n.rm-title[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--primary-d);\n  margin-bottom: 0.35rem;\n}\n.rm-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.rm-overall[_ngcontent-%COMP%] {\n  min-width: 230px;\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n.rm-overall-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.rm-overall-text[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--text-muted);\n}\n.rm-overall-val[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  color: var(--primary-d);\n}\n.rm-overall-track[_ngcontent-%COMP%] {\n  height: 13px;\n  background: var(--primary-l);\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1.5px solid var(--border);\n}\n.rm-overall-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      var(--secondary));\n  border-radius: 999px;\n  transition: width 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.rm-stat-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.73rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.rm-dot[_ngcontent-%COMP%] {\n  color: var(--border);\n}\n.focus-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.focus-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.focus-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 900;\n  color: var(--text);\n}\n.focus-sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.focus-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n  gap: 0.85rem;\n}\n.focus-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: color-mix(in srgb, var(--fc-bg, var(--bg-card)) 80%, white);\n  border: 2px solid color-mix(in srgb, var(--fc-color, var(--primary)) 22%, transparent);\n  border-radius: 18px;\n  padding: 0.9rem 1rem;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.22s;\n}\n.focus-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 28px color-mix(in srgb, var(--fc-color, var(--primary)) 20%, transparent);\n}\n.fc-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  right: -20px;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      color-mix(in srgb, var(--fc-color) 18%, transparent),\n      transparent 70%);\n  pointer-events: none;\n}\n.fc-icon[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n  flex-shrink: 0;\n}\n.fc-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.fc-name[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 0.9rem;\n  color: var(--text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fc-meta[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.fc-track[_ngcontent-%COMP%] {\n  height: 7px;\n  background: color-mix(in srgb, var(--fc-color) 10%, white);\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1px solid color-mix(in srgb, var(--fc-color) 15%, transparent);\n}\n.fc-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.fc-pct[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  color: var(--fc-color);\n  flex-shrink: 0;\n  min-width: 30px;\n  text-align: center;\n}\n.fc-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  border: 2px solid color-mix(in srgb, var(--fc-color) 28%, transparent);\n  background: color-mix(in srgb, var(--fc-color) 10%, white);\n  font-size: 1rem;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: all 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.fc-btn[_ngcontent-%COMP%]:hover {\n  background: var(--fc-color);\n  border-color: var(--fc-color);\n  transform: scale(1.12);\n}\n.fc-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.path-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n  background: var(--bg-card);\n  border: 2px solid var(--border);\n  border-radius: 22px;\n  padding: 1.35rem 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);\n}\n.path-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.path-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.path-mastered-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.path-progress-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.path-progress-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 9px;\n  background: var(--primary-l);\n  border-radius: 999px;\n  overflow: hidden;\n  border: 1.5px solid var(--border);\n}\n.path-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.path-progress-pct[_ngcontent-%COMP%] {\n  font-size: 0.73rem;\n  font-weight: 800;\n  color: var(--text-muted);\n  min-width: 36px;\n  text-align: right;\n}\n.road-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding-bottom: 0.5rem;\n}\n.road-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.road-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--primary-l);\n  border-radius: 2px;\n}\n.road-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border);\n  border-radius: 2px;\n}\n.road-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  padding: 0.5rem 0 0.25rem;\n  min-width: max-content;\n}\n.road-stop[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3rem;\n  width: 112px;\n  flex-shrink: 0;\n  cursor: pointer;\n  position: relative;\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.road-stop[_ngcontent-%COMP%]:hover:not(.stop-locked) {\n  transform: translateY(-5px);\n}\n.road-stop.stop-locked[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.stop-ring-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 76px;\n  height: 76px;\n}\n.stop-arc[_ngcontent-%COMP%] {\n  transition: stroke-dashoffset 0.8s ease;\n}\n.stop-level-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  right: -4px;\n  color: #fff;\n  font-size: 0.42rem;\n  padding: 0.15rem 0.38rem;\n  border-radius: 7px;\n  white-space: nowrap;\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.18);\n}\n.stop-label-name[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 0.82rem;\n  color: var(--text);\n  text-align: center;\n  line-height: 1.3;\n}\n.stop-label-name.stop-label-locked[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.stop-label-tier[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-align: center;\n  line-height: 1.2;\n}\n.xp-burst-stop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--primary);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 900;\n  padding: 0.2rem 0.55rem;\n  border-radius: 8px;\n  pointer-events: none;\n  white-space: nowrap;\n  animation: _ngcontent-%COMP%_floatUpFade 0.9s ease forwards;\n}\n.road-connector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 76px;\n  flex-shrink: 0;\n  gap: 1px;\n}\n.conn-rail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3px;\n  border-radius: 2px;\n  background: var(--border);\n  opacity: 0.5;\n}\n.connector-locked[_ngcontent-%COMP%]   .conn-rail[_ngcontent-%COMP%] {\n  height: 2px;\n  background:\n    repeating-linear-gradient(\n      90deg,\n      #CBD5E1 0px,\n      #CBD5E1 5px,\n      transparent 5px,\n      transparent 9px) !important;\n  opacity: 0.6;\n}\n.conn-chevron[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 900;\n  line-height: 1;\n  opacity: 0.55;\n  margin-top: -2px;\n}\n@media (max-width: 768px) {\n  .rm-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .rm-overall[_ngcontent-%COMP%] {\n    min-width: unset;\n    width: 100%;\n  }\n  .focus-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .path-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .roadmap-view[_ngcontent-%COMP%] {\n    gap: 1.1rem;\n  }\n}\n/*# sourceMappingURL=skills-page.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkillsPageComponent, { className: "SkillsPageComponent", filePath: "src\\app\\pages\\skills-page\\skills-page.component.ts", lineNumber: 129 });
})();
export {
  SkillsPageComponent
};
//# sourceMappingURL=chunk-LBJLNJ37.js.map
