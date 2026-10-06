import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./curtain/curtain.component').then(m => m.CurtainComponent) },
  { path: 'marriage', loadComponent: () => import('./marriage/marriage.component').then(m => m.MarriageComponent) }
];
