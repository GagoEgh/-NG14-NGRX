import { createReducer, on } from '@ngrx/store';
import { articleErrorAction, articleStartAction, articleSuccesAction } from './action';
import { IArticleState } from '../model/articleState.interface';
import { routerNavigatedAction } from '@ngrx/router-store';

const articleState:IArticleState = {
  isLoad: false,
  article: null,
  comments:null
}

export const articleReducer = createReducer(
  articleState,
  on(articleStartAction, (state: IArticleState) => ({ ...state, isLoad: true })),
  on(articleSuccesAction, (state: IArticleState, action) => ({ ...state, isLoad: false, article: action })),
  on(articleErrorAction, (state: IArticleState) => ({ ...state, isLoad: false, article: null })),
  on(routerNavigatedAction,(state:IArticleState)=>({...state,article:null}))
)