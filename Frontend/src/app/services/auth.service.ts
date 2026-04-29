import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

interface AuthResponse {
  access_token: string;
  token_type: string;
  user_id: number;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private tokenKey = 'gamify_token';
  private userKey = 'gamify_user';

  constructor(private http: HttpClient) {}

  async signup(username: string, email: string, password: string): Promise<void> {
    const res = await firstValueFrom(
      this.http.post<AuthResponse>(`${this.apiUrl}/auth/signup`, {
        username,
        email,
        password,
      })
    );
    this.setToken(res.access_token);
    this.setUser({ id: res.user_id, username: res.username });
  }

  async login(email: string, password: string): Promise<void> {
    const res = await firstValueFrom(
      this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, {
        email,
        password,
      })
    );
    this.setToken(res.access_token);
    this.setUser({ id: res.user_id, username: res.username });
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): { id: number; username: string } | null {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private setUser(user: { id: number; username: string }): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }
}
