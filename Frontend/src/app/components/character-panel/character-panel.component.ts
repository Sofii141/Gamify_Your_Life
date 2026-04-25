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

  // ================= GETTERS LIMPIOS PARA EL HTML =================
  get hair(): string { return (this.game.character() as any).hairStyle ?? 'long'; }
  get acc(): string { return (this.game.character() as any).accessory ?? 'none'; }
  get mood(): string { return (this.game.character() as any).avatarMood ?? 'happy'; }

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

  // Permite interactuar con el avatar desde el panel principal
  cycleMood() {
    const next: Record<string, string> = { happy: 'excited', excited: 'tired', tired: 'happy', neutral: 'excited' };
    this.game.updateCharacter({ avatarMood: next[this.mood] as any ?? 'happy' });
  }

  get topSkills() { 
    return this.game.skills().slice(0, 4); 
  }

  get avatarStyle() {
    const c = this.game.character();
    return {
      '--pixel-hair':      c.hairColor      ?? '#2e2e36',
      '--pixel-dress':     c.dressColor     ?? '#1c1c21',
      '--pixel-skin':      c.skinTone       ?? '#fff0e5',
      '--pixel-eyes':      c.eyeColor       ?? '#1a1a24',
      '--pixel-accessory': c.accessoryColor ?? '#ffffff',
    };
  }
}