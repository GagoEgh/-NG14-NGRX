import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeService } from "../service/home.service";
import { popularTagsErrorAction, popularTagsStartAction, popularTagsSuccesAction } from "./action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class PopularTagsEffect {
  private actions = inject(Actions);
  private homeService = inject(HomeService);

  tagsEffect = createEffect(() => this.actions.pipe(
    ofType(popularTagsStartAction),
    switchMap(() => {
      return this.homeService.getTags()
        .pipe(
          map((response: any) => {
            return popularTagsSuccesAction(response)
          }),
          catchError(()=>of(popularTagsErrorAction()))
        )
    })
  ))
}