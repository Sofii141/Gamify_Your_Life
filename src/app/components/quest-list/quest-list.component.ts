import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-quest-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.scss']
})
export class QuestListComponent {
  game = inject(GameService);
  activeTab = signal<'daily' | 'weekly' | 'custom'>('daily');
  newQuestTitle = signal('');
  adding = signal(false);

  get visibleQuests() {
    return this.game.quests().filter(q => q.category === this.activeTab());
  }

  get completedCount() {
    return this.visibleQuests.filter(q => q.completed).length;
  }

  addQuest() {
    const title = this.newQuestTitle().trim();
    if (!title) return;
    this.game.addQuest(title, this.activeTab());
    this.newQuestTitle.set('');
    this.adding.set(false);
  }

  cancelAdd() {
    this.newQuestTitle.set('');
    this.adding.set(false);
  }
}
