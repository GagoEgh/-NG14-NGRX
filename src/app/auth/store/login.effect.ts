import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../auth.service';
import { loginStart, loginSuccess, registerError } from './action';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { IRequestUser } from '../model/requestUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class LoginEffect {
  private actions = inject(Actions);
  private authService = inject(AuthService);
  private router = inject(Router);
  loginEffect = createEffect(() => this.actions
    .pipe(
      ofType(loginStart),
      switchMap((request: IRequestUser) => {
        return this.authService.loginUser(request)
          .pipe(
            map((response: any) => {
              localStorage.setItem('accessToken', response.user.token);
              return loginSuccess(response.user)
            }),
            catchError((error: HttpErrorResponse) => {
              return of(registerError(error.error.errors))
            })
          )
      })
    )
  )

  loginSucces = createEffect(() => this.actions
    .pipe(
      ofType(loginSuccess),
      tap(() => {
        this.router.navigateByUrl('home/home/your');
      })
    ), {
      dispatch:false
  }
  )
}
