import { Component, computed, inject, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { AvatarExportService } from '../../services/avatar-export.service';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent {
  game   = inject(GameService);
  exporter = inject(AvatarExportService);

  @ViewChild('avatarSvg') avatarSvgRef!: ElementRef<SVGElement>;

  exporting = signal(false);
  editName  = signal(false);
  editTitle = signal(false);
  tempName  = '';
  tempTitle = '';

  readonly HAIR_COLORS =[
    { value: '#1a1a1a', label: 'Negro' }, { value: '#8b6914', label: 'Café oscuro' },
    { value: '#c68642', label: 'Café' }, { value: '#f5d896', label: 'Rubio' },
    { value: '#e8a0bf', label: 'Rosa' }, { value: '#8b4acd', label: 'Morado' },
    { value: '#e87070', label: 'Rojo' }, { value: '#70b8e8', label: 'Azul' },
    { value: '#f5a623', label: 'Naranja' }, { value: '#e0e0e0', label: 'Plateado' },
  ];

  readonly EYE_COLORS =[
    { value: '#8b5cf6', label: 'Morado' }, { value: '#3b82f6', label: 'Azul' },
    { value: '#22c55e', label: 'Verde' }, { value: '#f59e0b', label: 'Ámbar' },
    { value: '#ef4444', label: 'Rojo' }, { value: '#ec4899', label: 'Rosa' },
    { value: '#8b5e3c', label: 'Café' }, { value: '#6b7280', label: 'Gris' },
  ];

  readonly SKIN_TONES =[
    { value: '#ffdec9', label: 'Muy claro' }, { value: '#f5c5a3', label: 'Claro' },
    { value: '#dda07a', label: 'Medio' }, { value: '#c0845a', label: 'Canela' },
    { value: '#8b5e3c', label: 'Oscuro' }, { value: '#6b3c28', label: 'Muy oscuro' },
  ];

  readonly OUTFIT_COLORS =[
    { value: '#f48fb1', label: 'Rosa' }, { value: '#ce93d8', label: 'Lavanda' },
    { value: '#7cb342', label: 'Verde salvia' }, { value: '#7e57c2', label: 'Morado' },
    { value: '#ff7043', label: 'Naranja' }, { value: '#5a7c9a', label: 'Azul' },
    { value: '#d97884', label: 'Coral' }, { value: '#c06860', label: 'Terracota' },
    { value: '#f5d87a', label: 'Amarillo' }, { value: '#e0e0e0', label: 'Blanco' },
  ];

  readonly ACCESSORIES =[
    { id: 'none',       label: 'Nada',          icon: '✨' },
    { id: 'headphones', label: 'Audífonos',     icon: '🎧' },
    { id: 'bow',        label: 'Moño',          icon: '🎀' },
    { id: 'star-clips', label: 'Estrellas',     icon: '⭐' },
    { id: 'glasses',    label: 'Lentes',        icon: '👓' },
    { id: 'cat-ears',   label: 'Orejas Gato',   icon: '🐱' },
    { id: 'flower',     label: 'Flor',          icon: '🌸' },
    { id: 'crown',      label: 'Corona',        icon: '👑' },
    { id: 'halo',       label: 'Aureola',       icon: '👼' },
  ] as const;

  readonly ACC_COLORS =[
    { value: '#f48fb1', label: 'Rosa' }, { value: '#c0a0f0', label: 'Lavanda' },
    { value: '#85c4f0', label: 'Celeste' }, { value: '#85d4a8', label: 'Menta' },
    { value: '#f5d87a', label: 'Amarillo' }, { value: '#f0b898', label: 'Melocotón' },
    { value: '#e87070', label: 'Rojo' }, { value: '#e0e0e0', label: 'Plateado' },
    { value: '#1a1a1a', label: 'Negro' },
  ];

  readonly PRESETS =[
    { id: 'goth', name: 'Dark Academia', icon: '🦇', colors: { hair: '#1a1a1a', dress: '#7e57c2', skin: '#ffdec9', eyes: '#ef4444', acc: 'glasses', accColor: '#1a1a1a' } },
    { id: 'pastel', name: 'Pastel Dream', icon: '🦄', colors: { hair: '#e8a0bf', dress: '#ce93d8', skin: '#ffdec9', eyes: '#8b5cf6', acc: 'cat-ears', accColor: '#e8a0bf' } },
    { id: 'cyber', name: 'Cyber Hacker', icon: '💻', colors: { hair: '#70b8e8', dress: '#1c1c21', skin: '#8b5e3c', eyes: '#ec4899', acc: 'headphones', accColor: '#f5a623' } },
    { id: 'nature', name: 'Cottagecore', icon: '🌿', colors: { hair: '#c68642', dress: '#7cb342', skin: '#f5c5a3', eyes: '#22c55e', acc: 'flower', accColor: '#f48fb1' } },
    { id: 'royal', name: 'Royal Code', icon: '👑', colors: { hair: '#e0e0e0', dress: '#f48fb1', skin: '#ffdec9', eyes: '#3b82f6', acc: 'crown', accColor: '#f5d87a' } },
    { id: 'classic', name: 'Cozy Dev', icon: '☕', colors: { hair: '#8b6914', dress: '#d97884', skin: '#f5c5a3', eyes: '#8b5e3c', acc: 'none', accColor: '#ffffff' } },
  ] as const;

  // ================= GETTERS LIMPIOS PARA EL HTML =================
  // Al forzar "as any", evitamos el error estricto en el template.
  get acc(): string { return (this.game.character() as any).accessory ?? 'none'; }
  get mood(): string { return (this.game.character() as any).avatarMood ?? 'happy'; }

  avatarStyle = computed(() => {
    const c = this.game.character();
    return {
      '--pixel-hair':      c.hairColor      ?? '#8b4acd', 
      '--pixel-dress':     c.dressColor     ?? '#d97884',
      '--pixel-skin':      c.skinTone       ?? '#f5c5a3',
      '--pixel-eyes':      c.eyeColor       ?? '#1a1a24',
      '--pixel-accessory': c.accessoryColor ?? '#f5d87a',
    };
  });

  saveName() { if (this.tempName.trim()) this.game.updateCharacter({ name: this.tempName.trim() }); this.editName.set(false); }
  saveTitle() { if (this.tempTitle.trim()) this.game.updateCharacter({ title: this.tempTitle.trim() }); this.editTitle.set(false); }

  setHair(color: string)   { this.game.updateCharacter({ hairColor: color }); }
  setEyes(color: string)   { this.game.updateCharacter({ eyeColor: color }); }
  setSkin(color: string)   { this.game.updateCharacter({ skinTone: color }); }
  setOutfit(color: string) { this.game.updateCharacter({ dressColor: color }); }
  setAccessory(acc: string) { this.game.updateCharacter({ accessory: acc as any }); }
  setAccColor(color: string) { this.game.updateCharacter({ accessoryColor: color }); }

  applyPreset(preset: typeof this.PRESETS[number]) {
    this.game.updateCharacter({
      hairColor: preset.colors.hair, dressColor: preset.colors.dress, skinTone: preset.colors.skin,
      eyeColor: preset.colors.eyes, accessory: preset.colors.acc as any, accessoryColor: preset.colors.accColor, avatarMood: 'happy'
    });
  }

  cycleMood() {
    const next: Record<string, string> = { happy: 'excited', excited: 'tired', tired: 'happy', neutral: 'excited' };
    this.game.updateCharacter({ avatarMood: next[this.mood] as any ?? 'happy' });
  }

  get topSkills() { return[...this.game.skills()].sort((a, b) => b.level - a.level || b.xp - a.xp).slice(0, 6); }
  get achievements() {
    const c = this.game.character(); const s = this.game.skills();
    return[
      { icon: '🔥', label: 'Streak Master', desc: `${c.streak} day streak`, earned: c.streak >= 3 },
      { icon: '⭐', label: 'Level Up!', desc: `Reached level ${c.level}`, earned: c.level >= 2 },
      { icon: '💻', label: 'Code Witch', desc: 'Programming skill > 1', earned: s.filter(sk => sk.category === 'Programming').some(sk => sk.xp > 0 || sk.level > 1) },
      { icon: '🎨', label: 'Creative Soul', desc: 'Creative skill > 1', earned: s.filter(sk => sk.category === 'Creative').some(sk => sk.xp > 0 || sk.level > 1) },
    ];
  }
  xpPercent(xp: number, max: number) { return Math.min(100, (xp / max) * 100); }

  async downloadCharacter(): Promise<void> {
    if (this.exporting()) return;
    this.exporting.set(true);
    try { await this.exporter.downloadPng(this.avatarSvgRef.nativeElement, this.game.character(), 8, `${this.game.character().name}-pixel.png`); } 
    finally { this.exporting.set(false); }
  }
}