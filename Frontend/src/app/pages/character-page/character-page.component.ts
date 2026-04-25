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

  // ================= HAIR STYLES =================
  readonly HAIR_STYLES =[
    { id: 'long',      label: 'Long',     icon: '👩' },
    { id: 'short',     label: 'Short',    icon: '🧑' },
    { id: 'twintails', label: 'Twintails', icon: '👧' },
    { id: 'ponytail',  label: 'Ponytail', icon: '👱‍♀️' },
    { id: 'spiky',     label: 'Spiky',    icon: '👦' },
  ] as const;

  readonly HAIR_COLORS =[
    { value: '#1a1a1a', label: 'Black' }, { value: '#8b6914', label: 'Dark Brown' },
    { value: '#c68642', label: 'Brown' }, { value: '#f5d896', label: 'Blonde' },
    { value: '#e8a0bf', label: 'Pink' }, { value: '#8b4acd', label: 'Purple' },
    { value: '#e87070', label: 'Red' }, { value: '#70b8e8', label: 'Blue' },
    { value: '#f5a623', label: 'Orange' }, { value: '#e0e0e0', label: 'Silver' },
  ];

  readonly EYE_COLORS =[
    { value: '#8b5cf6', label: 'Purple' }, { value: '#3b82f6', label: 'Blue' },
    { value: '#22c55e', label: 'Green' }, { value: '#f59e0b', label: 'Amber' },
    { value: '#ef4444', label: 'Red' }, { value: '#ec4899', label: 'Pink' },
    { value: '#8b5e3c', label: 'Brown' }, { value: '#6b7280', label: 'Gray' },
  ];

  readonly SKIN_TONES =[
    { value: '#ffdec9', label: 'Very Light' }, { value: '#f5c5a3', label: 'Light' },
    { value: '#dda07a', label: 'Medium' }, { value: '#c0845a', label: 'Tan' },
    { value: '#8b5e3c', label: 'Dark' }, { value: '#6b3c28', label: 'Very Dark' },
  ];

  readonly OUTFIT_COLORS =[
    { value: '#f48fb1', label: 'Pink' }, { value: '#ce93d8', label: 'Lavender' },
    { value: '#7cb342', label: 'Sage Green' }, { value: '#7e57c2', label: 'Purple' },
    { value: '#ff7043', label: 'Orange' }, { value: '#5a7c9a', label: 'Blue' },
    { value: '#d97884', label: 'Coral' }, { value: '#c06860', label: 'Terracotta' },
    { value: '#f5d87a', label: 'Yellow' }, { value: '#e0e0e0', label: 'White' },
  ];

  readonly ACCESSORIES =[
    { id: 'none',       label: 'None',       icon: '✨' },
    { id: 'headphones', label: 'Headphones', icon: '🎧' },
    { id: 'bow',        label: 'Bow',        icon: '🎀' },
    { id: 'star-clips', label: 'Star Clips', icon: '⭐' },
    { id: 'glasses',    label: 'Glasses',    icon: '👓' },
    { id: 'cat-ears',   label: 'Cat Ears',   icon: '🐱' },
    { id: 'flower',     label: 'Flower',     icon: '🌸' },
    { id: 'crown',      label: 'Crown',      icon: '👑' },
    { id: 'halo',       label: 'Halo',       icon: '👼' },
  ] as const;

  readonly ACC_COLORS =[
    { value: '#f48fb1', label: 'Pink' }, { value: '#c0a0f0', label: 'Lavender' },
    { value: '#85c4f0', label: 'Sky Blue' }, { value: '#85d4a8', label: 'Mint' },
    { value: '#f5d87a', label: 'Yellow' }, { value: '#f0b898', label: 'Peach' },
    { value: '#e87070', label: 'Red' }, { value: '#e0e0e0', label: 'Silver' },
    { value: '#1a1a1a', label: 'Black' },
  ];

  // Character presets
  readonly PRESETS =[
    { id: 'goth', name: 'Dark Academia', icon: '🦇', colors: { hairStyle: 'long', hair: '#1a1a1a', dress: '#7e57c2', skin: '#ffdec9', eyes: '#ef4444', acc: 'glasses', accColor: '#1a1a1a' } },
    { id: 'pastel', name: 'Pastel Dream', icon: '🦄', colors: { hairStyle: 'twintails', hair: '#e8a0bf', dress: '#ce93d8', skin: '#ffdec9', eyes: '#8b5cf6', acc: 'cat-ears', accColor: '#e8a0bf' } },
    { id: 'cyber', name: 'Cyber Hacker', icon: '💻', colors: { hairStyle: 'spiky', hair: '#70b8e8', dress: '#1c1c21', skin: '#8b5e3c', eyes: '#ec4899', acc: 'headphones', accColor: '#f5a623' } },
    { id: 'nature', name: 'Cottagecore', icon: '🌿', colors: { hairStyle: 'short', hair: '#c68642', dress: '#7cb342', skin: '#f5c5a3', eyes: '#22c55e', acc: 'flower', accColor: '#f48fb1' } },
    { id: 'royal', name: 'Royal Coder', icon: '👑', colors: { hairStyle: 'long', hair: '#e0e0e0', dress: '#f48fb1', skin: '#ffdec9', eyes: '#3b82f6', acc: 'crown', accColor: '#f5d87a' } },
    { id: 'classic', name: 'Cozy Dev', icon: '☕', colors: { hairStyle: 'ponytail', hair: '#8b6914', dress: '#d97884', skin: '#f5c5a3', eyes: '#8b5e3c', acc: 'none', accColor: '#ffffff' } },
  ] as const;

  // Getters limpios para forzar tipos en el HTML sin errores
  get hair(): string { return (this.game.character() as any).hairStyle ?? 'long'; }
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

  setHairStyle(style: string) { this.game.updateCharacter({ hairStyle: style as any }); }
  setHair(color: string)   { this.game.updateCharacter({ hairColor: color }); }
  setEyes(color: string)   { this.game.updateCharacter({ eyeColor: color }); }
  setSkin(color: string)   { this.game.updateCharacter({ skinTone: color }); }
  setOutfit(color: string) { this.game.updateCharacter({ dressColor: color }); }
  setAccessory(acc: string) { this.game.updateCharacter({ accessory: acc as any }); }
  setAccColor(color: string) { this.game.updateCharacter({ accessoryColor: color }); }

  applyPreset(preset: typeof this.PRESETS[number]) {
    this.game.updateCharacter({
      hairStyle: preset.colors.hairStyle as any, hairColor: preset.colors.hair, dressColor: preset.colors.dress, 
      skinTone: preset.colors.skin, eyeColor: preset.colors.eyes, accessory: preset.colors.acc as any, 
      accessoryColor: preset.colors.accColor, avatarMood: 'happy'
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
      { icon: '💻', label: 'Code Coder', desc: 'Programming skill > 1', earned: s.filter(sk => sk.category === 'Programming').some(sk => sk.xp > 0 || sk.level > 1) },
      { icon: '🎨', label: 'Creative Mind', desc: 'Creative skill > 1', earned: s.filter(sk => sk.category === 'Creative').some(sk => sk.xp > 0 || sk.level > 1) },
      { icon: '🪙', label: 'Coin Collector', desc: 'Earned 100+ coins', earned: c.coins >= 100 },
      { icon: '💅', label: 'Self-care Pro', desc: 'Self-care > 20 xp', earned: (s.find(sk => sk.id === 'selfcare')?.xp ?? 0) > 20 },
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