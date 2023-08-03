import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SharedService } from "src/app/shared/shared.service";
import { currentUserError, currentUserStart, currentUserSuccess } from "./action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class CurrentUserEffect {

  private actions$ = inject(Actions);
  private sharedService = inject(SharedService);

  currentUserEffect = createEffect(() => this.actions$
    .pipe(
      ofType(currentUserStart),
      switchMap(() => {
        return this.sharedService.getCurrentUser()
          .pipe(
            map((response: any) => {
              const token = localStorage.getItem('accessToken');
              return token ? currentUserSuccess(response.user) : currentUserError()

            }),
            catchError(() => {
              return of(currentUserError())
            })
          )
      })
    )
  )
}