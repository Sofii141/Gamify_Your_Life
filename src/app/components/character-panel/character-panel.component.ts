import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-character-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.scss']
})
export class CharacterPanelComponent {
  game = inject(GameService);
  editingName = signal(false);
  editingTitle = signal(false);
  tempName = '';
  tempTitle = '';

  startEditName() {
    this.tempName = this.game.character().name;
    this.editingName.set(true);
  }
  saveName() {
    if (this.tempName.trim()) this.game.updateCharacter({ name: this.tempName.trim() });
    this.editingName.set(false);
  }

  startEditTitle() {
    this.tempTitle = this.game.character().title;
    this.editingTitle.set(true);
  }
  saveTitle() {
    if (this.tempTitle.trim()) this.game.updateCharacter({ title: this.tempTitle.trim() });
    this.editingTitle.set(false);
  }

  gainSkillXp(skillId: string) {
    this.game.gainSkillXp(skillId, 5);
  }

  get topSkills() { return this.game.skills().slice(0, 4); }

  get avatarStyle() {
    const c = this.game.character();
    return {
      '--pixel-hair':      c.hairColor,
      '--pixel-dress':     c.dressColor,
      '--pixel-skin':      c.skinTone      ?? '#ffdec9',
      '--pixel-eyes':      c.eyeColor      ?? '#8b5cf6',
      '--pixel-accessory': c.accessoryColor ?? '#f48fb1',
    };
  }
}
