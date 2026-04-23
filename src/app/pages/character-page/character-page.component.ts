import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent {
  game = inject(GameService);
  editName  = signal(false);
  editTitle = signal(false);
  tempName  = '';
  tempTitle = '';

  readonly HAIR_COLORS = [
    { value: '#1a1a1a', label: 'Negro' },
    { value: '#8b6914', label: 'Café oscuro' },
    { value: '#c68642', label: 'Café' },
    { value: '#f5d896', label: 'Rubio' },
    { value: '#e8a0bf', label: 'Rosa' },
    { value: '#8b4acd', label: 'Morado' },
    { value: '#e87070', label: 'Rojo' },
    { value: '#70b8e8', label: 'Azul' },
    { value: '#f5a623', label: 'Naranja' },
    { value: '#e0e0e0', label: 'Plateado' },
  ];

  readonly EYE_COLORS = [
    { value: '#8b5cf6', label: 'Morado' },
    { value: '#3b82f6', label: 'Azul' },
    { value: '#22c55e', label: 'Verde' },
    { value: '#f59e0b', label: 'Ámbar' },
    { value: '#ef4444', label: 'Rojo' },
    { value: '#ec4899', label: 'Rosa' },
    { value: '#8b5e3c', label: 'Café' },
    { value: '#6b7280', label: 'Gris' },
  ];

  readonly SKIN_TONES = [
    { value: '#ffdec9', label: 'Muy claro' },
    { value: '#f5c5a3', label: 'Claro' },
    { value: '#dda07a', label: 'Medio' },
    { value: '#c0845a', label: 'Canela' },
    { value: '#8b5e3c', label: 'Oscuro' },
    { value: '#6b3c28', label: 'Muy oscuro' },
  ];

  readonly OUTFIT_COLORS = [
    { value: '#f48fb1', label: 'Rosa' },
    { value: '#ce93d8', label: 'Lavanda' },
    { value: '#7cb342', label: 'Verde salvia' },
    { value: '#7e57c2', label: 'Morado' },
    { value: '#ff7043', label: 'Naranja' },
    { value: '#5a7c9a', label: 'Azul' },
    { value: '#d97884', label: 'Coral' },
    { value: '#c06860', label: 'Terracota' },
    { value: '#f5d87a', label: 'Amarillo' },
    { value: '#e0e0e0', label: 'Blanco' },
  ];

  readonly ACCESSORIES = [
    { id: 'none',       label: 'Sin accesorio', icon: '✨' },
    { id: 'headphones', label: 'Audífonos',     icon: '🎧' },
    { id: 'bow',        label: 'Moño',          icon: '🎀' },
    { id: 'star-clips', label: 'Estrellas',     icon: '⭐' },
  ] as const;

  readonly ACC_COLORS = [
    { value: '#f48fb1', label: 'Rosa' },
    { value: '#c0a0f0', label: 'Lavanda' },
    { value: '#85c4f0', label: 'Celeste' },
    { value: '#85d4a8', label: 'Menta' },
    { value: '#f5d87a', label: 'Amarillo' },
    { value: '#f0b898', label: 'Melocotón' },
    { value: '#e87070', label: 'Rojo' },
    { value: '#e0e0e0', label: 'Plateado' },
  ];

  avatarStyle = computed(() => {
    const c = this.game.character();
    return {
      '--pixel-hair': c.hairColor,
      '--pixel-dress': c.dressColor,
      '--pixel-skin': c.skinTone ?? '#ffdec9',
      '--pixel-eyes': c.eyeColor ?? '#8b5cf6',
      '--pixel-accessory': c.accessoryColor ?? '#f48fb1',
    };
  });

  saveName() {
    if (this.tempName.trim()) this.game.updateCharacter({ name: this.tempName.trim() });
    this.editName.set(false);
  }
  saveTitle() {
    if (this.tempTitle.trim()) this.game.updateCharacter({ title: this.tempTitle.trim() });
    this.editTitle.set(false);
  }

  setHair(color: string)   { this.game.updateCharacter({ hairColor: color }); }
  setEyes(color: string)   { this.game.updateCharacter({ eyeColor: color }); }
  setSkin(color: string)   { this.game.updateCharacter({ skinTone: color }); }
  setOutfit(color: string) { this.game.updateCharacter({ dressColor: color }); }
  setAccessory(acc: 'none' | 'headphones' | 'bow' | 'star-clips') { this.game.updateCharacter({ accessory: acc }); }
  setAccColor(color: string) { this.game.updateCharacter({ accessoryColor: color }); }

  get topSkills() { return [...this.game.skills()].sort((a, b) => b.level - a.level || b.xp - a.xp).slice(0, 6); }

  get achievements() {
    const c = this.game.character();
    const s = this.game.skills();
    return [
      { icon: '🔥', label: 'Streak Master',   desc: `${c.streak} day streak`,       earned: c.streak >= 3 },
      { icon: '⭐', label: 'Level Up!',        desc: `Reached level ${c.level}`,     earned: c.level >= 2 },
      { icon: '💻', label: 'Code Witch',       desc: 'Practiced a programming skill', earned: s.filter(sk => sk.category === 'Programming').some(sk => sk.xp > 0 || sk.level > 1) },
      { icon: '🎨', label: 'Creative Soul',    desc: 'Practiced a creative skill',    earned: s.filter(sk => sk.category === 'Creative').some(sk => sk.xp > 0 || sk.level > 1) },
      { icon: '🪙', label: 'Coin Collector',   desc: 'Earned 100+ coins',             earned: c.coins >= 100 },
      { icon: '💅', label: 'Self-care Queen',  desc: 'Practiced self-care',           earned: s.find(sk => sk.id === 'selfcare')!?.xp > 20 },
      { icon: '🐍', label: 'Pythonista',       desc: 'Python skill level 2+',         earned: s.find(sk => sk.id === 'python')!?.level >= 2 },
      { icon: '👑', label: 'Full-stack Queen', desc: 'Web Dev level 3+',              earned: s.find(sk => sk.id === 'web')!?.level >= 3 },
    ];
  }

  xpPercent(xp: number, max: number) { return Math.min(100, (xp / max) * 100); }
}
