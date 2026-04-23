import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { CharacterPanelComponent } from '../../components/character-panel/character-panel.component';
import { StatsBarComponent } from '../../components/stats-bar/stats-bar.component';
import { QuestListComponent } from '../../components/quest-list/quest-list.component';
import { SkillsGridComponent } from '../../components/skills-grid/skills-grid.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CharacterPanelComponent, StatsBarComponent, QuestListComponent, SkillsGridComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  game = inject(GameService);
}
