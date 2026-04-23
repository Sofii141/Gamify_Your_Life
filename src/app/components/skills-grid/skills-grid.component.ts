import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { Skill } from '../../models/game.models';

@Component({
  selector: 'app-skills-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-grid.component.html',
  styleUrls: ['./skills-grid.component.scss']
})
export class SkillsGridComponent {
  game = inject(GameService);
  selected = signal<Skill | null>(null);

  practice(skill: Skill) {
    this.game.gainSkillXp(skill.id, 10);
    this.selected.set(skill);
    setTimeout(() => this.selected.set(null), 1200);
  }

  skillPercent(skill: Skill) {
    return Math.min(100, (skill.xp / skill.xpToNext) * 100);
  }
}
