import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'store', loadComponent: () => import('./pages/store/store').then(m => m.Store) },
    { path: 'management', loadComponent: () => import('./pages/management/management').then(m => m.Management) },
    { path: '**', redirectTo: '/' }
];
