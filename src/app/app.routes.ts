import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'quests',
    loadComponent: () => import('./pages/quests-page/quests-page.component').then(m => m.QuestsPageComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills-page/skills-page.component').then(m => m.SkillsPageComponent)
  },
  {
    path: 'character',
    loadComponent: () => import('./pages/character-page/character-page.component').then(m => m.CharacterPageComponent)
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent)
  },
  {
    path: 'calendar',
    loadComponent: () => import('./pages/calendar/calendar.component').then(m => m.CalendarComponent)
  },
  { path: '**', redirectTo: 'dashboard' }
];
