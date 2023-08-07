import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeService  } from '../service/home.service';
import { globalErrorActon, globalStartAction, globalSuccesActon } from './action';
import { catchError, map, of, switchMap } from 'rxjs';


@Injectable()
export class GlobalFeedEffects {
  private actions$ = inject(Actions);
  private globalFeedService = inject(HomeService );

  globalFeedEffects = createEffect(() => this.actions$
    .pipe(
      ofType(globalStartAction),
      switchMap((page) => {
        let num = 0
        if(page.page){
          num = page.page
        }
        return this.globalFeedService.getGlobalFeed(num)
          .pipe(
            map((response: any) => {
              return globalSuccesActon({ feed: response })
            }),
            catchError(() => of(globalErrorActon()))
          )
      })
    )
  )
}