/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from './shared/layout/app-layouts/main-layout.component';
import {AuthLayoutComponent} from './shared/layout/app-layouts/auth-layout.component';
import {EmptyLayoutComponent} from './shared/layout/app-layouts/empty-layout.component';
import {ModuleWithProviders} from '@angular/core';
import { PublicLayoutComponent } from './shared/layout/app-layouts/public-layout.component';
import { TokenGuard } from './shared/token/token-guard.service';

export const routes: Routes = [
  { path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/+public/public.module#PublicModule'
      },
      {
        path: 'home',
        canActivate: [TokenGuard],
        loadChildren: 'app/+home/home.module#HomeModule'
      },
    ]

  },
  { path: '**', component: EmptyLayoutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes,
  { enableTracing: true } // <-- debugging purposes only
);
