import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';

interface Theme { id: 'coquette'|'sage'|'dreamy'|'sunset'; label: string; icon: string; colors: string[]; }

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  game = inject(GameService);

  themes: Theme[] = [
    { id: 'coquette', label: 'Coquette Pink', icon: '🌸', colors: ['#f48fb1', '#fce4ed', '#ce93d8'] },
    { id: 'sage',     label: 'Sage Garden',   icon: '🌿', colors: ['#7cb342', '#dcedc8', '#26a69a'] },
    { id: 'dreamy',   label: 'Dreamy Purple', icon: '💜', colors: ['#7e57c2', '#e8eaf6', '#42a5f5'] },
    { id: 'sunset',   label: 'Sunset Peach',  icon: '🍑', colors: ['#ff7043', '#ffe0b2', '#ffca28'] },
  ];

  setTheme(id: 'coquette'|'sage'|'dreamy'|'sunset') {
    this.game.updateCharacter({ theme: id });
  }

  resetDaily() {
    this.game.resetDailyQuests();
  }

  get character() { return this.game.character(); }
}
