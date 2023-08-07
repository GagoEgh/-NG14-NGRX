import { createSelector, createFeatureSelector } from '@ngrx/store'
import { IHomeState } from '../model/homeState.interface';

const homeFeatureSelector = createFeatureSelector<IHomeState>('home');
export const isLoad = createSelector(homeFeatureSelector, (state: IHomeState) => state.isLoad);
export const globalFeed = createSelector(homeFeatureSelector, (state: IHomeState) => state.globalFeed);
export const yourFeed = createSelector(homeFeatureSelector, (state: IHomeState) => state.yourFeed);
