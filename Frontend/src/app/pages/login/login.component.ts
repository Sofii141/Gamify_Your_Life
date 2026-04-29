import { Component, inject, signal, AfterViewInit, ElementRef, ViewChild, NgZone, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements AfterViewInit, OnDestroy {
  private auth   = inject(AuthService);
  private router = inject(Router);
  private zone   = inject(NgZone);

  @ViewChild('googleBtnContainer') googleBtnContainer?: ElementRef<HTMLDivElement>;

  isLogin   = signal(true);
  email     = signal('');
  password  = signal('');
  username  = signal('');
  loading   = signal(false);
  error     = signal('');
  showPass  = signal(false);

  readonly googleEnabled = !!environment.googleClientId;

  private googleRetries = 0;
  private googleTimer: any;

  // ── Lifecycle ──────────────────────────────────────────────────────────────

  ngAfterViewInit() {
    if (this.googleEnabled) this.tryInitGoogle();
  }

  ngOnDestroy() {
    clearTimeout(this.googleTimer);
  }

  // ── Google sign-in ─────────────────────────────────────────────────────────

  private tryInitGoogle() {
    const g = (window as any).google;
    if (g?.accounts?.id && this.googleBtnContainer?.nativeElement) {
      g.accounts.id.initialize({
        client_id: environment.googleClientId,
        callback: (res: any) => this.zone.run(() => this.handleGoogleCredential(res))
      });
      g.accounts.id.renderButton(this.googleBtnContainer.nativeElement, {
        theme: 'outline',
        size: 'large',
        shape: 'pill',
        text: 'continue_with',
        width: this.googleBtnContainer.nativeElement.offsetWidth || 320,
        locale: 'en'
      });
    } else if (this.googleRetries < 15) {
      this.googleRetries++;
      this.googleTimer = setTimeout(() => this.tryInitGoogle(), 400);
    }
  }

  private async handleGoogleCredential(response: { credential: string }) {
    this.loading.set(true);
    this.error.set('');
    try {
      await this.auth.googleLogin(response.credential);
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      this.error.set(err.error?.detail ?? 'Google sign-in failed. Please try again.');
    } finally {
      this.loading.set(false);
    }
  }

  // ── Email/password ─────────────────────────────────────────────────────────

  toggleMode() {
    this.isLogin.update(v => !v);
    this.error.set('');
  }

  togglePass() {
    this.showPass.update(v => !v);
  }

  async submit() {
    this.error.set('');
    this.loading.set(true);
    try {
      if (this.isLogin()) {
        await this.auth.login(this.email(), this.password());
      } else {
        await this.auth.signup(this.username(), this.email(), this.password());
      }
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      this.error.set(err.error?.detail ?? 'Something went wrong. Try again!');
    } finally {
      this.loading.set(false);
    }
  }

  fillDemo() {
    this.email.set('sofii@gamify.dev');
    this.password.set('demo123456');
  }
}
