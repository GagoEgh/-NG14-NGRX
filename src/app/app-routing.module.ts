import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './auth/store/effect';
import { AuthService } from './auth/auth.service';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './auth/store/reducers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',

  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.route').then((r) => r.HOME_ROUTE)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then((c) => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.component').then(c => c.RegisterComponent),
    providers: [
      AuthService,
      importProvidersFrom( 
        StoreModule.forFeature('auth',authReducer),
        EffectsModule.forFeature([RegisterEffect]))
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
