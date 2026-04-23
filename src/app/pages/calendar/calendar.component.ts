import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';

interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  isToday: boolean;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  game = inject(GameService);

  private readonly STICKER_KEY = 'cozy-calendar-stickers';
  private readonly NOTE_KEY    = 'cozy-calendar-notes';

  private today = new Date();

  viewYear  = signal(this.today.getFullYear());
  viewMonth = signal(this.today.getMonth());

  selectedDay    = signal<number | null>(null);
  noteInputValue = '';

  stickerData = signal<Record<string, Record<string, string[]>>>(this.loadStickers());
  noteData    = signal<Record<string, Record<string, string>>>(this.loadNotes());

  readonly STICKER_LIST = [
    '🌸', '🌺', '🌼', '🌻', '🌹', '🪷', '🌿', '🍀',
    '🌱', '🌾', '🍒', '🍓', '🍑', '🫐', '🍊', '🍵',
    '🧁', '🍰', '🍡', '🧋', '⭐', '🌟', '💫', '✨',
    '🌙', '☀️', '🌈', '🎀', '💕', '💝', '🐱', '🐰',
    '🦋', '🌊', '🎵', '📚', '✏️', '🎐', '🍄', '🧸',
    '🌛', '🏮', '🪄', '🌂', '🫧', '🎋', '💮', '🌴',
  ];

  readonly DAY_HEADERS  = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  readonly MONTH_NAMES  = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
  ];

  monthLabel = computed(() => `${this.MONTH_NAMES[this.viewMonth()]} ${this.viewYear()}`);

  calendarDays = computed((): CalendarDay[] => {
    const year  = this.viewYear();
    const month = this.viewMonth();
    const today = this.today;
    const firstDay    = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const offset      = (firstDay.getDay() + 6) % 7; // Mon-start

    const days: CalendarDay[] = [];
    for (let i = 0; i < offset; i++) {
      days.push({ date: 0, isCurrentMonth: false, isToday: false });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push({
        date: d,
        isCurrentMonth: true,
        isToday: year  === today.getFullYear()
               && month === today.getMonth()
               && d    === today.getDate(),
      });
    }
    while (days.length % 7 !== 0) {
      days.push({ date: 0, isCurrentMonth: false, isToday: false });
    }
    return days;
  });

  prevMonth() {
    if (this.viewMonth() === 0) { this.viewMonth.set(11); this.viewYear.update(y => y - 1); }
    else                        { this.viewMonth.update(m => m - 1); }
    this.selectedDay.set(null);
  }

  nextMonth() {
    if (this.viewMonth() === 11) { this.viewMonth.set(0); this.viewYear.update(y => y + 1); }
    else                         { this.viewMonth.update(m => m + 1); }
    this.selectedDay.set(null);
  }

  goToToday() {
    this.viewYear.set(this.today.getFullYear());
    this.viewMonth.set(this.today.getMonth());
    this.selectedDay.set(null);
  }

  selectDay(day: number) {
    if (!day) return;
    if (this.selectedDay() === day) { this.selectedDay.set(null); return; }
    this.selectedDay.set(day);
    this.noteInputValue = this.getDayNote(day);
  }

  private ymKey(): string {
    return `${this.viewYear()}-${String(this.viewMonth() + 1).padStart(2, '0')}`;
  }

  getDayStickers(day: number): string[] {
    return this.stickerData()[this.ymKey()]?.[String(day)] ?? [];
  }

  getDayNote(day: number): string {
    return this.noteData()[this.ymKey()]?.[String(day)] ?? '';
  }

  hasNote(day: number): boolean {
    return !!this.noteData()[this.ymKey()]?.[String(day)];
  }

  addSticker(sticker: string) {
    const key    = this.ymKey();
    const dayKey = String(this.selectedDay()!);
    this.stickerData.update(s => {
      const u = { ...s, [key]: { ...(s[key] ?? {}), [dayKey]: [...(s[key]?.[dayKey] ?? []), sticker] } };
      return u;
    });
    this.saveStickers();
  }

  removeSticker(index: number) {
    const key    = this.ymKey();
    const dayKey = String(this.selectedDay()!);
    this.stickerData.update(s => {
      if (!s[key]?.[dayKey]) return s;
      const arr = [...s[key][dayKey]];
      arr.splice(index, 1);
      return { ...s, [key]: { ...s[key], [dayKey]: arr } };
    });
    this.saveStickers();
  }

  saveNote() {
    const key    = this.ymKey();
    const dayKey = String(this.selectedDay()!);
    const note   = this.noteInputValue.trim();
    this.noteData.update(n => ({ ...n, [key]: { ...(n[key] ?? {}), [dayKey]: note } }));
    this.saveNotes();
  }

  clearDay() {
    const key    = this.ymKey();
    const dayKey = String(this.selectedDay()!);
    this.stickerData.update(s => {
      if (!s[key]) return s;
      const u = { ...s[key] };
      delete u[dayKey];
      return { ...s, [key]: u };
    });
    this.noteData.update(n => {
      if (!n[key]) return n;
      const u = { ...n[key] };
      delete u[dayKey];
      return { ...n, [key]: u };
    });
    this.noteInputValue = '';
    this.saveStickers();
    this.saveNotes();
  }

  private loadStickers(): Record<string, Record<string, string[]>> {
    try { const r = localStorage.getItem(this.STICKER_KEY); return r ? JSON.parse(r) : {}; } catch { return {}; }
  }

  private loadNotes(): Record<string, Record<string, string>> {
    try { const r = localStorage.getItem(this.NOTE_KEY); return r ? JSON.parse(r) : {}; } catch { return {}; }
  }

  private saveStickers() {
    try { localStorage.setItem(this.STICKER_KEY, JSON.stringify(this.stickerData())); } catch {}
  }

  private saveNotes() {
    try { localStorage.setItem(this.NOTE_KEY, JSON.stringify(this.noteData())); } catch {}
  }
}
