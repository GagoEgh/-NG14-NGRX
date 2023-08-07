import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeService } from '../service/home.service';
import { yourErrorAction, yourStatrtAction, yourSuccessAction } from './action';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class YourFeedEffect {
  private actions = inject(Actions);
  private homeService = inject(HomeService);

  yourFeedEffect = createEffect(
    () => this.actions.pipe(
      ofType(yourStatrtAction),
      switchMap((page)=>{
        return this.homeService.getYourFeed(page.page)
        .pipe(
          map((response:any)=>{
            return yourSuccessAction(response)
          }),
          catchError(()=>of(yourErrorAction()))
        )
      })
    )
  )
}