import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'quests',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/quests-page/quests-page.component').then(m => m.QuestsPageComponent)
  },
  {
    path: 'skills',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/skills-page/skills-page.component').then(m => m.SkillsPageComponent)
  },
  {
    path: 'character',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/character-page/character-page.component').then(m => m.CharacterPageComponent)
  },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent)
  },
  {
    path: 'calendar',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/calendar/calendar.component').then(m => m.CalendarComponent)
  },
  { path: '**', redirectTo: 'dashboard' }
];
