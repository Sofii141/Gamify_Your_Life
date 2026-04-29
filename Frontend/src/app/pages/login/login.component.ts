import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  isLogin = signal(true);
  email = signal('');
  password = signal('');
  username = signal('');
  loading = signal(false);
  error = signal('');

  toggleMode() {
    this.isLogin.update(v => !v);
    this.error.set('');
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
      this.router.navigate(['/']);
    } catch (err: any) {
      this.error.set(err.error?.detail || 'Something went wrong');
    } finally {
      this.loading.set(false);
    }
  }
}
