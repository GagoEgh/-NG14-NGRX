import { createSelector, createFeatureSelector } from '@ngrx/store'
import { IArticleState } from '../model/articleState.interface';

const articleFeatureSelector = createFeatureSelector<IArticleState>('article');
export const article = createSelector(articleFeatureSelector,(state:IArticleState)=>state.article);
export const isLoad = createSelector(articleFeatureSelector,(state:IArticleState)=>state.isLoad)