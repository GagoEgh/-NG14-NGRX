import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IEditState } from '../model/editState.interface';

const editFeatureSelector = createFeatureSelector<IEditState>('edit');
export const editIsLoad = createSelector(editFeatureSelector, (state: IEditState) => state.isLoad);
export const editArticle = createSelector(editFeatureSelector, (state: IEditState) => state.article);
export const editBackError = createSelector(editFeatureSelector, (state: IEditState) => state.backError);
