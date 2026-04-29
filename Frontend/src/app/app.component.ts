import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { GameService } from './services/game.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  game = inject(GameService);
  router = inject(Router);
  theme = computed(() => this.game.character().theme);

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Update route state for sidebar visibility
      });
  }

  get showSidebar(): boolean {
    return !this.router.url.includes('/login');
  }
}
