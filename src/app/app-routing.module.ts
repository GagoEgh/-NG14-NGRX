import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './auth/store/register.effect';
import { AuthService } from './auth/auth.service';
import { LoginEffect } from './auth/store/login.effect';
import { StoreModule } from "@ngrx/store";
import { articleReducer } from './article/store/reducers';
import { ArticleEffect } from './article/store/article.effect';
import { ArticleService } from './article/services/article.service';
import { EditService } from './edit/edit.service';
import { editReducers } from './edit/store/reducers';
import { EditEffect } from './edit/store/edit.effect';

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
    loadComponent: () => import('./auth/login/login.component').then((c) => c.LoginComponent),
    providers: [
      AuthService,
      importProvidersFrom(EffectsModule.forFeature([LoginEffect]))
    ]
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.component').then(c => c.RegisterComponent),
    providers: [
      AuthService,
      importProvidersFrom(EffectsModule.forFeature([RegisterEffect]))
    ]

  },
  {
    path: 'articles',
    providers: [
      ArticleService,
      importProvidersFrom(
        StoreModule.forFeature('article', articleReducer),
        EffectsModule.forFeature([ArticleEffect])
      )
    ],
    loadComponent: () => import('./article/article.component').then((c) => c.ArticleComponent)
  },
  {
    path: 'edit',
    providers: [
      EditService,
      importProvidersFrom(
        StoreModule.forFeature('edit', editReducers),
        EffectsModule.forFeature([EditEffect])
      )
    ],
    loadComponent: () => import('./edit/edit.component').then((c) => c.EditComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
