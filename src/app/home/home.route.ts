import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { authGuard } from "./auth.guard";
import { HomeService } from "./service/home.service";
import { importProvidersFrom } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { homeReducer } from "./store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { GlobalFeedEffects } from "./store/globalFeed.effect";
import { YourFeedEffect } from "./store/yourFeed.effects";
import { PopularTagsEffect } from "./store/popularTages.effect";
import { TagEffect } from "./store/tag.effect";


export const HOME_ROUTE: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',

  },
  {
    path: 'home',
    component: HomeComponent,
    providers: [
      HomeService,
      importProvidersFrom(
        StoreModule.forFeature('home', homeReducer),
        EffectsModule.forFeature([GlobalFeedEffects, YourFeedEffect,PopularTagsEffect,TagEffect])
      )
    ],
    children: [
      {
        path: '',
        redirectTo: 'global',
        pathMatch: 'full',
      },
      {
        path: 'global',
        loadComponent: () => import('./global/global.component').then((c) => c.GlobalComponent)
      },
      {
        path: 'your',
        canActivate: [authGuard],
        loadComponent: () => import('./your/your.component').then((c) => c.YourComponent)
      },
      {
        path: 'tag',
        loadComponent: () => import('./tag/tag.component').then((c) => c.TagComponent)
      },
    ]
  }
]