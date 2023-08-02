import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { registerError, registerStart, registerSuccess } from './action';
import { AuthService } from '../auth.service';
import { catchError, map, of, switchMap, take, tap } from 'rxjs';
import { IRequestUser } from '../model/requestUser.interface';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class RegisterEffect {

  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private router = inject(Router);
  constructor() { }
  registerEffect = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerStart),
      switchMap((user: IRequestUser) => {
        return this.authService.registerUser(user)
          .pipe(
            map((response: any) => {

              localStorage.setItem('accessToken', response.user.token);
              return registerSuccess(response.user)
            }
            ),
            catchError((error:HttpErrorResponse) => {
              console.log('ttt________',error.error.errors);
              return of(registerError(error.error.errors))
            })
          )
      })
    )
  })

  registerSuccess = createEffect(() =>
    this.actions$.pipe(
      ofType(registerSuccess),
      tap(()=>{
        this.router.navigateByUrl('home/home/your')
      })
    ),
    {
      dispatch:false
    }
  )

}
