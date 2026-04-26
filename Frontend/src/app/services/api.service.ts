import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, Quest, Skill, GameData } from '../models/game.models';
import { environment } from '../../environments/environment';

export interface GameDataResponse {
  character: Character;
  quests: Quest[];
  skills: Skill[];
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;

  getGame(): Observable<GameDataResponse> {
    return this.http.get<GameDataResponse>(`${this.base}/game`);
  }

  updateCharacter(updates: Partial<Character>): Observable<Character> {
    return this.http.put<Character>(`${this.base}/character`, updates);
  }

  checkIn(): Observable<Character> {
    return this.http.post<Character>(`${this.base}/character/check-in`, {});
  }

  addQuest(title: string, category: 'daily' | 'weekly' | 'custom'): Observable<Quest> {
    return this.http.post<Quest>(`${this.base}/quests`, { title, category });
  }

  toggleQuest(questId: string): Observable<GameDataResponse> {
    return this.http.put<GameDataResponse>(`${this.base}/quests/${questId}/toggle`, {});
  }

  deleteQuest(questId: string): Observable<{ ok: boolean }> {
    return this.http.delete<{ ok: boolean }>(`${this.base}/quests/${questId}`);
  }

  resetDailyQuests(): Observable<Quest[]> {
    return this.http.post<Quest[]>(`${this.base}/quests/reset-daily`, {});
  }

  gainSkillXp(skillId: string, amount: number): Observable<Skill> {
    return this.http.put<Skill>(`${this.base}/skills/${skillId}/xp`, { amount });
  }
}
