import { createAction, props } from '@ngrx/store';
import { ArticleActionType } from './article.action.type';
import { IFeed } from 'src/app/home/model/globalFeed.interface';


export const articleStartAction = createAction(ArticleActionType.ARTICLE_START, props<{ slug: string }>());
export const articleSuccesAction = createAction(ArticleActionType.ARTICLE_SUCCESS, props<IFeed>());
export const articleErrorAction = createAction(ArticleActionType.ARTICLE_ERROR)
