import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeService } from "../service/home.service";
import { tagErroreAction, tagStartAction, tagSuccessAction } from "./action";
import { catchError, map, of, switchMap } from "rxjs";
import { IHomeFeed } from "../model/homeFeed.interface";

@Injectable()
export class TagEffect{

  private actions = inject(Actions);
  private homeService = inject(HomeService);

  tagEffect = createEffect(
    () => this.actions.pipe(
      ofType(tagStartAction),
      switchMap((data)=>{
        return this.homeService.getTag(data)
        .pipe(
          map((response:IHomeFeed)=>{
            return tagSuccessAction(response)
          }),
          catchError(()=>of(tagErroreAction()))
        )
      })
    )
  )
}