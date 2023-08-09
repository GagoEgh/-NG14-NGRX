import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeService } from "../../home/service/home.service";

import { catchError, map, of, switchMap } from "rxjs";
import { articleErrorAction, articleStartAction, articleSuccesAction } from "./action";
import { ArticleService } from "../services/article.service";

@Injectable()
export class ArticleEffect {
  private actions = inject(Actions);
  private articleService = inject(ArticleService)
  articleEffect = createEffect(() => this.actions.
    pipe(
      ofType(articleStartAction),
      switchMap((res: any) => {
        return this.articleService.getArticles(res.slug)
          .pipe(
            map((response: any) => {
              return articleSuccesAction(response)
            }),
            catchError(() => of(articleErrorAction()))
          )
      })
    )
  )
}