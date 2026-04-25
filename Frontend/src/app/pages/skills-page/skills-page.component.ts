import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { Skill } from '../../models/game.models';

type Category = 'All' | 'Programming' | 'Creative' | 'Life';

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
  hoveredSkill = signal<string | null>(null);
  xpBurst = signal<string | null>(null);

  categories: CategoryMeta[] = [
    { id: 'All',         icon: '✦',  label: 'All Skills',    color: 'var(--primary)' },
    { id: 'Programming', icon: '💻', label: 'Programming',   color: '#3776ab' },
    { id: 'Creative',    icon: '🎨', label: 'Creative',      color: '#7c3aed' },
    { id: 'Life',        icon: '🌸', label: 'Life',          color: '#be185d' },
  ];

  filteredSkills = computed(() => {
    const cat = this.selectedCategory();
    return cat === 'All'
      ? this.game.skills()
      : this.game.skills().filter(s => s.category === cat);
  });

  programmingSkills = computed(() => this.game.skills().filter(s => s.category === 'Programming'));
  creativeSkills    = computed(() => this.game.skills().filter(s => s.category === 'Creative'));
  lifeSkills        = computed(() => this.game.skills().filter(s => s.category === 'Life'));

  xpPercent(skill: Skill): number {
    return Math.min(100, (skill.xp / skill.xpToNext) * 100);
  }

  stars(level: number): string {
    const filled = Math.min(5, Math.floor((level - 1) / 2) + 1);
    return '★'.repeat(filled) + '☆'.repeat(5 - filled);
  }

  practice(skill: Skill) {
    this.game.gainSkillXp(skill.id, 10);
    this.xpBurst.set(skill.id);
    setTimeout(() => this.xpBurst.set(null), 900);
  }

  isPracticing(id: string) { return this.game.practicingSkill() === id; }
  isLevelling(id: string)  { return this.game.levelledSkill() === id; }

  categoryCount(cat: Omit<CategoryMeta, 'color'>['id']): number {
    if (cat === 'All') return this.game.skills().length;
    return this.game.skills().filter(s => s.category === cat).length;
  }

  totalXpEarned = computed(() =>
    this.game.skills().reduce((sum, s) => sum + s.xp, 0)
  );

  masteredCount = computed(() =>
    this.game.skills().filter(s => s.level >= 5).length
  );
}
