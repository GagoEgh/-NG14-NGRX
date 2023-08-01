import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

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
        loadComponent: () => import('./global/global.component').then((c) => c.GlobalComponent)
      },
      {
        path: 'your',
        loadComponent: () => import('./your/your.component').then((c) => c.YourComponent)
      },
      {
        path: 'tag',
        loadComponent: () => import('./tag/tag.component').then((c) => c.TagComponent)
      }
    ]
  }


]