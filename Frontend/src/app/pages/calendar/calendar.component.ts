import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game.service';

export interface DayNote {
  id: string;
  text: string;
  color: string;
  stickers: string[];
}

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
  private readonly NOTE_KEY    = 'cozy-calendar-notes-v2';

  private today = new Date();

  viewYear       = signal(this.today.getFullYear());
  viewMonth      = signal(this.today.getMonth());
  selectedDay    = signal<number | null>(null);
  activeCategory = signal(0);

  // Note editing state — null = not editing; { color } = adding new; { id, color } = editing existing
  editingNote         = signal<{ id?: string; color: string } | null>(null);
  editingNoteText     = '';
  editingNoteStickers: string[] = [];

  stickerData = signal<Record<string, Record<string, string[]>>>(this.loadStickers());
  noteData    = signal<Record<string, Record<string, DayNote[]>>>(this.loadNotes());

  readonly NOTE_COLORS = [
    { id: 'default',  emoji: '🤍', bg: '#ffffff',  border: '#e0e0e0' },
    { id: 'pink',     emoji: '🩷', bg: '#fff0f5',  border: '#ffb3d1' },
    { id: 'yellow',   emoji: '💛', bg: '#fffbf0',  border: '#f5d87a' },
    { id: 'mint',     emoji: '💚', bg: '#f0faf5',  border: '#85d4a8' },
    { id: 'blue',     emoji: '🩵', bg: '#f0f8ff',  border: '#85c4f0' },
    { id: 'lavender', emoji: '💜', bg: '#f8f0ff',  border: '#c0a0f0' },
    { id: 'peach',    emoji: '🍑', bg: '#fff5f0',  border: '#f0b898' },
  ];

  readonly STICKER_CATEGORIES = [
    { label: '🌸', name: 'Flores',  stickers: ['🌸', '🌺', '🌼', '🌻', '🌹', '🪷', '🌷', '💐', '🌿', '🍀', '🌱', '🌾'] },
    { label: '🍒', name: 'Comida',  stickers: ['🍒', '🍓', '🍑', '🫐', '🍊', '🍵', '🧁', '🍰', '🍡', '🧋', '🍬', '🍮'] },
    { label: '⭐', name: 'Magia',   stickers: ['⭐', '🌟', '💫', '✨', '🌙', '☀️', '🌈', '🌛', '🪄', '🏮', '🎋', '💮'] },
    { label: '🎀', name: 'Cute',    stickers: ['🎀', '💕', '💝', '💖', '💗', '🫧', '🎐', '🌂', '🧸', '🐱', '🐰', '🦋'] },
    { label: '🎵', name: 'Varios',  stickers: ['🎵', '📚', '✏️', '🌊', '🌴', '🍄', '🏮', '🎯', '🖊️', '📷', '🎨', '🎪'] },
  ];

  readonly DAY_HEADERS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  readonly MONTH_NAMES = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
  ];

  activeCategoryStickers = computed(() =>
    this.STICKER_CATEGORIES[this.activeCategory()].stickers
  );

  calendarDays = computed((): CalendarDay[] => {
    const year  = this.viewYear();
    const month = this.viewMonth();
    const today = this.today;
    const firstDay    = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const offset      = (firstDay.getDay() + 6) % 7;

    const days: CalendarDay[] = [];
    for (let i = 0; i < offset; i++) {
      days.push({ date: 0, isCurrentMonth: false, isToday: false });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push({
        date: d,
        isCurrentMonth: true,
        isToday: year === today.getFullYear() && month === today.getMonth() && d === today.getDate(),
      });
    }
    while (days.length % 7 !== 0) {
      days.push({ date: 0, isCurrentMonth: false, isToday: false });
    }
    return days;
  });

  /* ── Navigation ── */
  prevMonth() {
    if (this.viewMonth() === 0) { this.viewMonth.set(11); this.viewYear.update(y => y - 1); }
    else { this.viewMonth.update(m => m - 1); }
    this.selectedDay.set(null);
    this.cancelEdit();
  }

  nextMonth() {
    if (this.viewMonth() === 11) { this.viewMonth.set(0); this.viewYear.update(y => y + 1); }
    else { this.viewMonth.update(m => m + 1); }
    this.selectedDay.set(null);
    this.cancelEdit();
  }

  goToToday() {
    this.viewYear.set(this.today.getFullYear());
    this.viewMonth.set(this.today.getMonth());
    this.selectedDay.set(null);
    this.cancelEdit();
  }

  selectDay(day: number) {
    if (!day) return;
    if (this.selectedDay() === day) { this.selectedDay.set(null); this.cancelEdit(); return; }
    this.selectedDay.set(day);
    this.cancelEdit();
  }

  isWeekend(index: number): boolean { return index % 7 >= 5; }

  private ymKey(): string {
    return `${this.viewYear()}-${String(this.viewMonth() + 1).padStart(2, '0')}`;
  }

  /* ── Stickers ── */
  getDayStickers(day: number): string[] {
    return this.stickerData()[this.ymKey()]?.[String(day)] ?? [];
  }

  addSticker(sticker: string) {
    const key = this.ymKey(), dayKey = String(this.selectedDay()!);
    this.stickerData.update(s => ({
      ...s, [key]: { ...(s[key] ?? {}), [dayKey]: [...(s[key]?.[dayKey] ?? []), sticker] },
    }));
    this.saveStickers();
  }

  removeSticker(index: number) {
    const key = this.ymKey(), dayKey = String(this.selectedDay()!);
    this.stickerData.update(s => {
      if (!s[key]?.[dayKey]) return s;
      const arr = [...s[key][dayKey]];
      arr.splice(index, 1);
      return { ...s, [key]: { ...s[key], [dayKey]: arr } };
    });
    this.saveStickers();
  }

  /* ── Notes ── */
  getDayNotes(day: number): DayNote[] {
    return this.noteData()[this.ymKey()]?.[String(day)] ?? [];
  }

  getDaysWithStickersCount(): number {
    return Object.values(this.stickerData()[this.ymKey()] ?? {}).filter(a => a.length > 0).length;
  }

  getDaysWithNotesCount(): number {
    return Object.values(this.noteData()[this.ymKey()] ?? {}).filter(a => a.length > 0).length;
  }

  startAddNote() {
    this.editingNote.set({ color: 'pink' });
    this.editingNoteText = '';
    this.editingNoteStickers = [];
  }

  startEditNote(note: DayNote) {
    this.editingNote.set({ id: note.id, color: note.color });
    this.editingNoteText = note.text;
    this.editingNoteStickers = [...(note.stickers ?? [])];
  }

  addStickerToNote(sticker: string) {
    this.editingNoteStickers = [...this.editingNoteStickers, sticker];
  }

  removeStickerFromNote(index: number) {
    this.editingNoteStickers = this.editingNoteStickers.filter((_, i) => i !== index);
  }

  setEditingNoteColor(colorId: string) {
    const current = this.editingNote();
    if (current) this.editingNote.set({ ...current, color: colorId });
  }

  saveEditingNote() {
    const editing = this.editingNote();
    if (!editing) return;
    const text = this.editingNoteText.trim();
    if (!text) { this.cancelEdit(); return; }

    const key = this.ymKey(), dayKey = String(this.selectedDay()!);

    if (editing.id) {
      this.noteData.update(n => ({
        ...n,
        [key]: {
          ...(n[key] ?? {}),
          [dayKey]: (n[key]?.[dayKey] ?? []).map(note =>
            note.id === editing.id
              ? { ...note, text, color: editing.color, stickers: [...this.editingNoteStickers] }
              : note
          ),
        },
      }));
    } else {
      const newNote: DayNote = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
        text,
        color: editing.color,
        stickers: [...this.editingNoteStickers],
      };
      this.noteData.update(n => ({
        ...n,
        [key]: { ...(n[key] ?? {}), [dayKey]: [...(n[key]?.[dayKey] ?? []), newNote] },
      }));
    }

    this.cancelEdit();
    this.saveNotes();
  }

  cancelEdit() {
    this.editingNote.set(null);
    this.editingNoteText = '';
    this.editingNoteStickers = [];
  }

  deleteNote(noteId: string) {
    const key = this.ymKey(), dayKey = String(this.selectedDay()!);
    this.noteData.update(n => ({
      ...n,
      [key]: { ...(n[key] ?? {}), [dayKey]: (n[key]?.[dayKey] ?? []).filter(n => n.id !== noteId) },
    }));
    this.saveNotes();
  }

  clearDay() {
    const key = this.ymKey(), dayKey = String(this.selectedDay()!);
    const drop = (obj: Record<string, Record<string, unknown>>) => {
      if (!obj[key]) return obj;
      const u = { ...obj[key] };
      delete u[dayKey];
      return { ...obj, [key]: u };
    };
    this.stickerData.update(drop as any);
    this.noteData.update(drop as any);
    this.cancelEdit();
    this.saveStickers();
    this.saveNotes();
  }

  private loadStickers(): Record<string, Record<string, string[]>> {
    try { const r = localStorage.getItem(this.STICKER_KEY); return r ? JSON.parse(r) : {}; } catch { return {}; }
  }

  private loadNotes(): Record<string, Record<string, DayNote[]>> {
    try { const r = localStorage.getItem(this.NOTE_KEY); return r ? JSON.parse(r) : {}; } catch { return {}; }
  }

  private saveStickers() { try { localStorage.setItem(this.STICKER_KEY, JSON.stringify(this.stickerData())); } catch {} }
  private saveNotes()    { try { localStorage.setItem(this.NOTE_KEY,    JSON.stringify(this.noteData()));    } catch {} }
}
