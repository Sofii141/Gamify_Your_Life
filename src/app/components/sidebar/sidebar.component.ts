import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GameService } from '../../services/game.service';

interface NavItem { icon: string; label: string; route: string; }

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  game = inject(GameService);
  collapsed = signal(false);

  nav: NavItem[] = [
    { icon: '🏠', label: 'Home',      route: '/dashboard' },
    { icon: '⚔️',  label: 'Quests',   route: '/quests'    },
    { icon: '✨',  label: 'Skills',   route: '/skills'    },
    { icon: '👤',  label: 'Character',route: '/character' },
    { icon: '⚙️',  label: 'Settings', route: '/settings'  },
  ];

  toggle() { this.collapsed.update(v => !v); }
}
