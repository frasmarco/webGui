import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { ModuleWithProviders } from '@angular/core';

export const PublicRoutes: Routes = [
    {
        path: '',
        component: PublicComponent,
        data: {
            pageTitle: 'Speleo Web Gis'
        }
    }
];

export const PublicRouting: ModuleWithProviders = RouterModule.forChild(PublicRoutes);

