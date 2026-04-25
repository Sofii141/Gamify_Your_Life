import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';

interface Theme { id: 'coquette'|'sage'|'dreamy'|'sunset'|'misty'|'coral'|'terra'|'blush'|'midnight'; label: string; icon: string; colors: string[]; }

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
    { id: 'coquette',  label: 'Coquette Pink',    icon: '🌸', colors: ['#f48fb1', '#fce4ed', '#ce93d8'] },
    { id: 'sage',      label: 'Sage Garden',      icon: '🌿', colors: ['#7cb342', '#dcedc8', '#26a69a'] },
    { id: 'dreamy',    label: 'Dreamy Purple',    icon: '💜', colors: ['#7e57c2', '#e8eaf6', '#42a5f5'] },
    { id: 'sunset',    label: 'Sunset Peach',     icon: '🍑', colors: ['#ff7043', '#ffe0b2', '#ffca28'] },
    { id: 'misty',     label: 'Misty Blue',       icon: '🌊', colors: ['#5a7c9a', '#d5dde8', '#8fa8c0'] },
    { id: 'coral',     label: 'Coral Garden',     icon: '🌺', colors: ['#d97884', '#fdddd5', '#78a898'] },
    { id: 'terra',     label: 'Terracotta',       icon: '🍂', colors: ['#c06860', '#f0d0c5', '#a8896c'] },
    { id: 'blush',     label: 'Blush & Sage',     icon: '🫧', colors: ['#c08888', '#f0d8d8', '#8aa880'] },
    { id: 'midnight',  label: 'Midnight Garden',  icon: '🌙', colors: ['#6878b8', '#d5d8f0', '#9890c8'] },
  ];

  setTheme(id: 'coquette'|'sage'|'dreamy'|'sunset'|'misty'|'coral'|'terra'|'blush'|'midnight') {
    this.game.updateCharacter({ theme: id });
  }

  resetDaily() {
    this.game.resetDailyQuests();
  }

  get character() { return this.game.character(); }
}
