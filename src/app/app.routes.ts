import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'store', loadComponent: () => import('./pages/store/store.component').then(m => m.StoreComponent) },
    { path: 'management', loadComponent: () => import('./pages/management/management.component').then(m => m.ManagementComponent) },
    { path: '**', redirectTo: '/' }
];
