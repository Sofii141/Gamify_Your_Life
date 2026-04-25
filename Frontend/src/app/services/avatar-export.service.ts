import { Injectable } from '@angular/core';
import { Character } from '../models/game.models';

@Injectable({ providedIn: 'root' })
export class AvatarExportService {

  /**
   * Exports the live SVG pixel-art character as a crisp PNG file.
   *
   * Strategy:
   *  1. Clone the SVG element (only visible DOM nodes are cloned — *ngIf
   *     already removed hidden elements, so we get exactly what the user sees).
   *  2. Replace every CSS custom property (var(--pixel-*)) with its real hex
   *     value from the Character state, because the canvas renderer cannot
   *     resolve CSS variables.
   *  3. Serialise → Blob URL → draw on an <canvas> with
   *     imageSmoothingEnabled = false → export as PNG.
   */
  async downloadPng(
    svgEl: SVGElement,
    character: Character,
    scale = 8,
    filename = 'mi-personaje.png'
  ): Promise<void> {
    const dataUrl = await this.renderToPng(svgEl, character, scale);
    const a = document.createElement('a');
    a.href     = dataUrl;
    a.download = filename;
    a.click();
  }

  async renderToPng(
    svgEl: SVGElement,
    character: Character,
    scale = 8
  ): Promise<string> {
    // ── 1. Build CSS-variable → real colour map ──────────────────────
    const cssVars: Record<string, string> = {
      '--pixel-hair':      character.hairColor,
      '--pixel-dress':     character.dressColor,
      '--pixel-skin':      character.skinTone      ?? '#ffdec9',
      '--pixel-eyes':      character.eyeColor      ?? '#8b5cf6',
      '--pixel-accessory': character.accessoryColor ?? '#f48fb1',
    };

    // ── 2. Clone the SVG and resolve var() in every fill attribute ───
    const clone = svgEl.cloneNode(true) as SVGElement;

    clone.querySelectorAll<SVGElement>('[fill]').forEach(el => {
      const raw   = el.getAttribute('fill') ?? '';
      const match = raw.match(/var\(\s*(--[\w-]+)\s*\)/);
      if (match) {
        const resolved = cssVars[match[1]];
        if (resolved) el.setAttribute('fill', resolved);
      }
    });

    // ── 3. Set explicit pixel dimensions on the clone ─────────────────
    // viewBox="0 0 24 40" → native size 24×40, exported at scale×
    const nativeW = 24;
    const nativeH = 40;
    clone.setAttribute('width',  String(nativeW * scale));
    clone.setAttribute('height', String(nativeH * scale));
    // Keep viewBox so SVG scales correctly
    clone.setAttribute('viewBox', '0 0 24 40');

    // ── 4. Serialise to a Blob URL ────────────────────────────────────
    const svgMarkup = new XMLSerializer().serializeToString(clone);
    const blob      = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
    const blobUrl   = URL.createObjectURL(blob);

    // ── 5. Draw on canvas with no smoothing ──────────────────────────
    return new Promise<string>((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        const canvas    = document.createElement('canvas');
        canvas.width    = nativeW * scale;
        canvas.height   = nativeH * scale;
        const ctx       = canvas.getContext('2d')!;

        // ✅ Pixel-perfect: disable all interpolation
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(img, 0, 0);

        URL.revokeObjectURL(blobUrl);
        resolve(canvas.toDataURL('image/png'));
      };

      img.onerror = () => {
        URL.revokeObjectURL(blobUrl);
        reject(new Error('Failed to load SVG for export'));
      };

      img.src = blobUrl;
    });
  }
}
