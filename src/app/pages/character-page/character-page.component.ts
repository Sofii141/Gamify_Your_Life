import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent {
  game = inject(GameService);
  editName  = signal(false);
  editTitle = signal(false);
  tempName  = '';
  tempTitle = '';

  saveName() {
    if (this.tempName.trim()) this.game.updateCharacter({ name: this.tempName.trim() });
    this.editName.set(false);
  }
  saveTitle() {
    if (this.tempTitle.trim()) this.game.updateCharacter({ title: this.tempTitle.trim() });
    this.editTitle.set(false);
  }

  get topSkills() { return [...this.game.skills()].sort((a, b) => b.level - a.level || b.xp - a.xp).slice(0, 6); }

  get achievements() {
    const c = this.game.character();
    const s = this.game.skills();
    return [
      { icon: '🔥', label: 'Streak Master',     desc: `${c.streak} day streak`,               earned: c.streak >= 3 },
      { icon: '⭐', label: 'Level Up!',          desc: `Reached level ${c.level}`,             earned: c.level >= 2 },
      { icon: '💻', label: 'Code Witch',         desc: 'Practiced a programming skill',         earned: s.filter(sk => sk.category === 'Programming').some(sk => sk.xp > 0 || sk.level > 1) },
      { icon: '🎨', label: 'Creative Soul',      desc: 'Practiced a creative skill',            earned: s.filter(sk => sk.category === 'Creative').some(sk => sk.xp > 0 || sk.level > 1) },
      { icon: '🪙', label: 'Coin Collector',     desc: 'Earned 100+ coins',                     earned: c.coins >= 100 },
      { icon: '💅', label: 'Self-care Queen',    desc: 'Practiced self-care',                   earned: s.find(sk => sk.id === 'selfcare')!?.xp > 20 },
      { icon: '🐍', label: 'Pythonista',         desc: 'Python skill level 2+',                 earned: s.find(sk => sk.id === 'python')!?.level >= 2 },
      { icon: '👑', label: 'Full-stack Queen',   desc: 'Web Dev level 3+',                      earned: s.find(sk => sk.id === 'web')!?.level >= 3 },
    ];
  }

  xpPercent(xp: number, max: number) { return Math.min(100, (xp / max) * 100); }
}
