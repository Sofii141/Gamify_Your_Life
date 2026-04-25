import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-stats-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-bar.component.html',
  styleUrls: ['./stats-bar.component.scss']
})
export class StatsBarComponent {
  game = inject(GameService);
  checkInMessage = signal('');

  checkIn() {
    const ok = this.game.checkIn();
    this.checkInMessage.set(ok ? '✨ +25 XP  +15 coins!' : '✓ Already checked in today!');
    setTimeout(() => this.checkInMessage.set(''), 2500);
  }
}
