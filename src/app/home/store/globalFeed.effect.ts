import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GlobalFeedService } from '../service/globalFeed.service';
import { globalErrorActon, globalStartAction, globalSuccesActon } from './action';
import { catchError, map, of, switchMap } from 'rxjs';


@Injectable()
export class GlobalFeedEffects {
  private actions$ = inject(Actions);
  private globalFeedService = inject(GlobalFeedService);

  globalFeedEffects = createEffect(() => this.actions$
    .pipe(
      ofType(globalStartAction),
      switchMap((page) => {
        return this.globalFeedService.getGlobalFeed(page.page)
          .pipe(
            map((response:any) => {
              return globalSuccesActon({feed:response})
            }),
            catchError(() => of(globalErrorActon()))
          )
      })
    )
  )
}