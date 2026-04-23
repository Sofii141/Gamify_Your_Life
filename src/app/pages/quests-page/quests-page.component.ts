import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';

type Tab = 'daily' | 'weekly' | 'custom';

interface TabInfo { id: Tab; icon: string; label: string; done: number; total: number; }

@Component({
  selector: 'app-quests-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quests-page.component.html',
  styleUrls: ['./quests-page.component.scss']
})
export class QuestsPageComponent {
  game = inject(GameService);

  activeTab    = signal<Tab>('daily');
  adding       = signal(false);
  newTitle     = signal('');
  newCategory  = signal<Tab>('daily');

  visibleQuests    = computed(() => this.game.quests().filter(q => q.category === this.activeTab()));
  completedCount   = computed(() => this.visibleQuests().filter(q => q.completed).length);
  totalXpAvailable = computed(() => this.visibleQuests().filter(q => !q.completed).reduce((a, q) => a + q.xpReward, 0));
  overallCompleted = computed(() => this.game.quests().filter(q => q.completed).length);
  overallTotal     = computed(() => this.game.quests().length);
  completionRate   = computed(() =>
    this.overallTotal() ? Math.round((this.overallCompleted() / this.overallTotal()) * 100) : 0
  );
  ringDash = computed(() => `${this.completionRate()}, 100`);

  tabInfos = computed<TabInfo[]>(() => {
    const qs = this.game.quests();
    return [
      { id: 'daily',  icon: '🌸', label: 'Daily',   done: qs.filter(q => q.category === 'daily'  && q.completed).length, total: qs.filter(q => q.category === 'daily').length  },
      { id: 'weekly', icon: '⭐', label: 'Weekly',  done: qs.filter(q => q.category === 'weekly' && q.completed).length, total: qs.filter(q => q.category === 'weekly').length },
      { id: 'custom', icon: '✨', label: 'My Quests',done: qs.filter(q => q.category === 'custom' && q.completed).length, total: qs.filter(q => q.category === 'custom').length },
    ];
  });

  addQuest() {
    const t = this.newTitle().trim();
    if (!t) return;
    this.game.addQuest(t, this.newCategory());
    this.newTitle.set('');
    this.adding.set(false);
  }

  cancelAdd() { this.newTitle.set(''); this.adding.set(false); }
}
