import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { Skill } from '../../models/game.models';

type Category = 'All' | 'Programming' | 'Creative' | 'Life';
type ViewMode = 'grid' | 'tree' | 'path';

interface CategoryMeta { id: Category; icon: string; label: string; color: string; }

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

  categories: CategoryMeta[] = [
    { id: 'All',         icon: '✦',  label: 'All Skills',  color: 'var(--primary)' },
    { id: 'Programming', icon: '💻', label: 'Programming', color: '#3776ab'        },
    { id: 'Creative',    icon: '🎨', label: 'Creative',    color: '#7c3aed'        },
    { id: 'Life',        icon: '🌸', label: 'Life',        color: '#be185d'        },
  ];

  viewModes = [
    { id: 'grid' as ViewMode, icon: '⊞', label: 'Cards',     available: true  },
    { id: 'tree' as ViewMode, icon: '🌳', label: 'Tree',      available: false },
    { id: 'path' as ViewMode, icon: '🗺️', label: 'Roadmap',   available: false },
  ];

  filteredSkills    = computed(() => {
    const cat = this.selectedCategory();
    return cat === 'All' ? this.game.skills() : this.game.skills().filter(s => s.category === cat);
  });

  programmingSkills = computed(() => this.game.skills().filter(s => s.category === 'Programming'));
  creativeSkills    = computed(() => this.game.skills().filter(s => s.category === 'Creative'));
  lifeSkills        = computed(() => this.game.skills().filter(s => s.category === 'Life'));

  totalXpEarned = computed(() => this.game.skills().reduce((sum, s) => sum + s.xp, 0));
  masteredCount = computed(() => this.game.skills().filter(s => s.level >= 10).length);

  masteredInCategory(skills: Skill[]): number {
    return skills.filter(s => s.level >= 10).length;
  }

  xpPercent(skill: Skill): number {
    return Math.min(100, (skill.xp / skill.xpToNext) * 100);
  }

  xpNeeded(skill: Skill): number {
    return Math.max(0, skill.xpToNext - skill.xp);
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

  categoryCount(cat: Category): number {
    if (cat === 'All') return this.game.skills().length;
    return this.game.skills().filter(s => s.category === cat).length;
  }

  isPracticing(id: string) { return this.game.practicingSkill() === id; }
  isLevelling(id: string)  { return this.game.levelledSkill() === id; }
}
