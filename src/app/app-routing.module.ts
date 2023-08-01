import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home',
    
  },
  {
    path:'home',
    loadChildren:()=>import('./home/home.route').then((r)=>r.HOME_ROUTE)
  },
  {
    path:'login',
    loadComponent:()=>import('./auth/login/login.component').then((c)=>c.LoginComponent)
  },
  {
    path:'register',
    loadComponent:()=>import('./auth/register/register.component').then(c=>c.RegisterComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
