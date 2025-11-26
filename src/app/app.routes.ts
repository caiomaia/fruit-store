import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'store', loadComponent: () => import('./pages/store-component/store-component').then(m => m.StoreComponent) },
    { path: 'management', loadComponent: () => import('./pages/management-component/management-component').then(m => m.ManagementComponent) },
    { path: '**', redirectTo: '/' }
];
