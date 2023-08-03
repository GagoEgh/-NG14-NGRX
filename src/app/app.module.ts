import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from "@ngrx/store";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { MainInterceptor } from './main.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './auth/store/reducers';
import { CurrentUserEffect } from './auth/store/currentUser.effect';
import { LoadingComponent } from './shared/loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreModule.forRoot(),
    StoreModule.forFeature('auth',authReducer),
    StoreDevtoolsModule.instrument({ maxAge: 55, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([CurrentUserEffect]),
    HomeComponent,
    LoadingComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
