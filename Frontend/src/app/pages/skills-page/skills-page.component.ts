import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { Skill } from '../../models/game.models';

type Category    = 'All' | 'Programming' | 'Creative' | 'Life';
type ViewMode    = 'grid' | 'tree' | 'path';
type TreeCat     = 'Programming' | 'Creative' | 'Life';

interface CategoryMeta { id: Category; icon: string; label: string; color: string; }
interface NodePos       { x: number; y: number; }
interface SkillDep      { parent: string; requiresLevel: number; }

interface SvgNode {
  skill:         Skill;
  pos:           NodePos;
  isLocked:      boolean;
  requiresLevel: number;
  parentId:      string;
}

interface SvgConnection {
  path:          string;
  isLocked:      boolean;
  color:         string;
  midX:          number;
  midY:          number;
  requiresLevel: number;
  parentName:    string;
}

interface RoadmapStop {
  skill:         Skill;
  index:         number;
  isLocked:      boolean;
  isMastered:    boolean;
  xpPercent:     number;
  requiresLevel: number;
  parentId:      string;
}

interface RoadmapPathData {
  id:            TreeCat;
  icon:          string;
  label:         string;
  color:         string;
  bgColor:       string;
  tagClass:      string;
  stops:         RoadmapStop[];
  masteredCount: number;
  totalStops:    number;
  pathProgress:  number;
}

interface FocusSkill {
  skill:  Skill;
  pct:    number;
  needed: number;
}

/* ── Skill dependency map ── */
const SKILL_DEPS: Record<string, SkillDep> = {
  'algo':      { parent: 'python', requiresLevel: 2 },
  'db':        { parent: 'python', requiresLevel: 2 },
  'ts':        { parent: 'js',     requiresLevel: 2 },
  'web':       { parent: 'js',     requiresLevel: 2 },
  'sysdesign': { parent: 'web',    requiresLevel: 3 },
  'uiux':      { parent: 'creativity', requiresLevel: 2 },
  'selfcare':  { parent: 'wellness',   requiresLevel: 2 },
  'study':     { parent: 'focus',      requiresLevel: 2 },
};

/* ── SVG node positions per category ── */
const SVG_CONFIGS: Record<TreeCat, { width: number; height: number; positions: Record<string, NodePos> }> = {
  Programming: {
    width: 760, height: 650,
    positions: {
      python:    { x: 110, y: 140 },
      js:        { x: 110, y: 330 },
      git:       { x: 110, y: 490 },
      cpp:       { x: 110, y: 590 },
      algo:      { x: 370, y:  70 },
      db:        { x: 370, y: 200 },
      ts:        { x: 370, y: 300 },
      web:       { x: 370, y: 420 },
      sysdesign: { x: 620, y: 380 },
    }
  },
  Creative: {
    width: 520, height: 340,
    positions: {
      creativity: { x: 110, y: 130 },
      writing:    { x: 110, y: 280 },
      uiux:       { x: 370, y: 130 },
    }
  },
  Life: {
    width: 520, height: 500,
    positions: {
      wellness: { x: 110, y: 120 },
      focus:    { x: 110, y: 280 },
      social:   { x: 110, y: 430 },
      selfcare: { x: 370, y: 120 },
      study:    { x: 370, y: 280 },
    }
  }
};

/* ── Roadmap ordered progression ── */
const ROADMAP_ORDER: Record<TreeCat, string[]> = {
  Programming: ['python', 'js', 'git', 'cpp', 'algo', 'ts', 'db', 'web', 'sysdesign'],
  Creative:    ['creativity', 'writing', 'uiux'],
  Life:        ['wellness', 'focus', 'social', 'selfcare', 'study'],
};

const PATH_DEFS: { id: TreeCat; icon: string; label: string; color: string; bgColor: string; tagClass: string }[] = [
  { id: 'Programming', icon: '💻', label: 'Programming Path', color: '#3776ab', bgColor: '#dbeafe', tagClass: 'programming-tag' },
  { id: 'Creative',    icon: '🎨', label: 'Creative Path',    color: '#7c3aed', bgColor: '#f3e8ff', tagClass: 'creative-tag'    },
  { id: 'Life',        icon: '🌸', label: 'Life Mastery',     color: '#be185d', bgColor: '#fdf2f8', tagClass: 'life-tag'        },
];

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent {
  game = inject(GameService);

  selectedCategory = signal<Category>('All');
  hoveredSkill     = signal<string | null>(null);
  xpBurst          = signal<string | null>(null);
  viewMode         = signal<ViewMode>('grid');
  svgCategory      = signal<TreeCat>('Programming');

  treeCats: { id: TreeCat; icon: string; label: string }[] = [
    { id: 'Programming', icon: '💻', label: 'Programming' },
    { id: 'Creative',    icon: '🎨', label: 'Creative'    },
    { id: 'Life',        icon: '🌸', label: 'Life'        },
  ];

  categories: CategoryMeta[] = [
    { id: 'All',         icon: '✦',  label: 'All Skills',  color: 'var(--primary)' },
    { id: 'Programming', icon: '💻', label: 'Programming', color: '#3776ab'        },
    { id: 'Creative',    icon: '🎨', label: 'Creative',    color: '#7c3aed'        },
    { id: 'Life',        icon: '🌸', label: 'Life',        color: '#be185d'        },
  ];

  viewModes = [
    { id: 'grid' as ViewMode, icon: '⊞', label: 'Cards',   available: true },
    { id: 'tree' as ViewMode, icon: '🌳', label: 'Tree',    available: true },
    { id: 'path' as ViewMode, icon: '🗺️', label: 'Roadmap', available: true },
  ];

  /* ── Grid signals ── */
  filteredSkills    = computed(() => {
    const cat = this.selectedCategory();
    return cat === 'All' ? this.game.skills() : this.game.skills().filter(s => s.category === cat);
  });
  programmingSkills = computed(() => this.game.skills().filter(s => s.category === 'Programming'));
  creativeSkills    = computed(() => this.game.skills().filter(s => s.category === 'Creative'));
  lifeSkills        = computed(() => this.game.skills().filter(s => s.category === 'Life'));
  totalXpEarned     = computed(() => this.game.skills().reduce((sum, s) => sum + s.xp, 0));
  masteredCount     = computed(() => this.game.skills().filter(s => s.level >= 10).length);

  /* ── Helper: extract canonical key from skill ID
     Backend uses "{key}_{userId}" format (e.g. "python_1").
     Offline fallback uses plain keys (e.g. "python").
     This normalises both so lookups always work. ── */
  private skillKey(id: string): string {
    return id.replace(/_\d+$/, '');
  }

  private buildKeyMap(skills: import('../../models/game.models').Skill[]) {
    return new Map(skills.map(s => [this.skillKey(s.id), s]));
  }

  /* ── SVG tree signals ── */
  svgNodes = computed<SvgNode[]>(() => {
    const cat      = this.svgCategory();
    const config   = SVG_CONFIGS[cat];
    const skills   = this.game.skills();
    const skillMap = this.buildKeyMap(skills);

    return Object.entries(config.positions).map(([id, pos]) => {
      const skill = skillMap.get(id);
      if (!skill) return null;
      const dep      = SKILL_DEPS[id];
      const isLocked = dep ? (skillMap.get(dep.parent)?.level ?? 0) < dep.requiresLevel : false;
      return {
        skill,
        pos,
        isLocked,
        requiresLevel: dep?.requiresLevel ?? 0,
        parentId:      dep?.parent ?? '',
      };
    }).filter((n): n is SvgNode => n !== null);
  });

  svgConnections = computed<SvgConnection[]>(() => {
    const cat      = this.svgCategory();
    const config   = SVG_CONFIGS[cat];
    const skills   = this.game.skills();
    const skillMap = this.buildKeyMap(skills);

    return Object.entries(SKILL_DEPS)
      .filter(([cId, dep]) => config.positions[cId] && config.positions[dep.parent])
      .map(([cId, dep]) => {
        const from        = config.positions[dep.parent];
        const to          = config.positions[cId];
        const parentSkill = skillMap.get(dep.parent);
        const childSkill  = skillMap.get(cId);
        const isLocked    = (parentSkill?.level ?? 0) < dep.requiresLevel;
        return {
          path:          this.bezierPath(from, to),
          isLocked,
          color:         childSkill?.color ?? '#ccc',
          midX:          (from.x + to.x) / 2,
          midY:          (from.y + to.y) / 2,
          requiresLevel: dep.requiresLevel,
          parentName:    parentSkill?.name ?? '',
        };
      });
  });

  getSvgConfig() { return SVG_CONFIGS[this.svgCategory()]; }

  /* ── Roadmap signals ── */
  roadmapPaths = computed<RoadmapPathData[]>(() => {
    const skills   = this.game.skills();
    const skillMap = this.buildKeyMap(skills);

    return PATH_DEFS.map(path => {
      const stops = ROADMAP_ORDER[path.id].map((id, index) => {
        const skill = skillMap.get(id);
        if (!skill) return null;
        const dep      = SKILL_DEPS[id];
        const isLocked = dep ? (skillMap.get(dep.parent)?.level ?? 0) < dep.requiresLevel : false;
        return {
          skill,
          index,
          isLocked,
          isMastered:    skill.level >= 10,
          xpPercent:     Math.min(100, (skill.xp / skill.xpToNext) * 100),
          requiresLevel: dep?.requiresLevel ?? 0,
          parentId:      dep?.parent ?? '',
        } as RoadmapStop;
      }).filter((s): s is RoadmapStop => s !== null);

      const masteredCount = stops.filter(s => s.isMastered).length;
      const pathProgress  = stops.length
        ? Math.round(stops.reduce((sum, s) => sum + s.skill.xp / s.skill.xpToNext, 0) / stops.length * 100)
        : 0;

      return { ...path, stops, masteredCount, totalStops: stops.length, pathProgress };
    });
  });

  focusSkills = computed<FocusSkill[]>(() =>
    this.game.skills()
      .filter(s => s.level < 10)
      .map(s => ({
        skill:  s,
        pct:    Math.round((s.xp / s.xpToNext) * 100),
        needed: s.xpToNext - s.xp,
      }))
      .sort((a, b) => b.pct - a.pct)
      .slice(0, 3)
  );

  overallProgress = computed(() => {
    const skills = this.game.skills();
    if (!skills.length) return 0;
    return Math.round(skills.reduce((sum, s) => sum + s.xp / s.xpToNext, 0) / skills.length * 100);
  });

  bezierPath(from: NodePos, to: NodePos): string {
    const dx = (to.x - from.x) * 0.55;
    return `M ${from.x} ${from.y} C ${from.x + dx} ${from.y}, ${to.x - dx} ${to.y}, ${to.x} ${to.y}`;
  }

  progressArc(xp: number, xpToNext: number, r: number): string {
    const pct = Math.min(0.9999, xp / xpToNext);
    if (pct <= 0) return '';
    const angle = pct * 2 * Math.PI;
    const x     = r * Math.sin(angle);
    const y     = -r * Math.cos(angle);
    const large = angle > Math.PI ? 1 : 0;
    return `M 0 -${r} A ${r} ${r} 0 ${large} 1 ${x} ${y}`;
  }

  /* ── Helpers ── */
  masteredInCategory(skills: Skill[]): number { return skills.filter(s => s.level >= 10).length; }
  xpPercent(skill: Skill): number  { return Math.min(100, (skill.xp / skill.xpToNext) * 100); }
  xpNeeded(skill: Skill): number   { return Math.max(0, skill.xpToNext - skill.xp); }
  categoryCount(cat: Category): number {
    if (cat === 'All') return this.game.skills().length;
    return this.game.skills().filter(s => s.category === cat).length;
  }

  stars(level: number): string {
    const filled = Math.min(5, Math.floor((level - 1) / 2) + 1);
    return '★'.repeat(filled) + '☆'.repeat(5 - filled);
  }

  getTier(level: number): string {
    if (level >= 10) return 'Master';
    if (level >= 7)  return 'Expert';
    if (level >= 5)  return 'Practitioner';
    if (level >= 3)  return 'Learner';
    return 'Novice';
  }

  getTierColor(level: number): string {
    if (level >= 10) return '#DC2626';
    if (level >= 7)  return '#D97706';
    if (level >= 5)  return '#7C3AED';
    if (level >= 3)  return '#2563EB';
    return '#9CA3AF';
  }

  getTierBg(level: number): string {
    if (level >= 10) return '#FEF2F2';
    if (level >= 7)  return '#FFFBEB';
    if (level >= 5)  return '#F5F3FF';
    if (level >= 3)  return '#EFF6FF';
    return '#F9FAFB';
  }

  practice(skill: Skill) {
    this.game.gainSkillXp(skill.id, 10);
    this.xpBurst.set(skill.id);
    setTimeout(() => this.xpBurst.set(null), 900);
  }

  isPracticing(id: string) { return this.game.practicingSkill() === id; }
  isLevelling(id: string)  { return this.game.levelledSkill() === id; }
}
