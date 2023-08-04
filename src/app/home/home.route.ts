import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { authGuard } from "./auth.guard";
import { GlobalFeedService } from "./service/globalFeed.service";

export const HOME_ROUTE: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path:'',
        redirectTo:'global',
        pathMatch:'full',
        
      },
      {
        path: 'global',
        providers:[GlobalFeedService],
        loadComponent: () => import('./global/global.component').then((c) => c.GlobalComponent)
      },
      {
        path: 'your',
        canActivate:[authGuard],
        loadComponent: () => import('./your/your.component').then((c) => c.YourComponent)
      },
      {
        path: 'tag',
        loadComponent: () => import('./tag/tag.component').then((c) => c.TagComponent)
      }
    ]
  }


]