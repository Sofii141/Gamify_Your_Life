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
  mobileOpen = signal(false);

  nav: NavItem[] = [
    { icon: 'home',      label: 'Home',      route: '/dashboard' },
    { icon: 'quests',    label: 'Quests',    route: '/quests'    },
    { icon: 'skills',    label: 'Skills',    route: '/skills'    },
    { icon: 'character', label: 'Character', route: '/character' },
    { icon: 'calendar',  label: 'Calendar',  route: '/calendar'  },
    { icon: 'settings',  label: 'Settings',  route: '/settings'  },
  ];

  toggle() { this.collapsed.update(v => !v); }
  openMobile() { this.mobileOpen.set(true); }
  closeMobile() { this.mobileOpen.set(false); }
}
