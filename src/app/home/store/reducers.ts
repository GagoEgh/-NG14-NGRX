import { createReducer, on } from '@ngrx/store';
import { IHomeState } from '../model/homeState.interface';
import { globalErrorActon, globalStartAction, globalSuccesActon, yourErrorAction, yourStatrtAction, yourSuccessAction } from './action';
import { routerNavigatedAction } from '@ngrx/router-store';

const homeState: IHomeState = {
  isLoad: false,
  globalFeed: null,
  yourFeed: null,
  article: null
}

export const homeReducer = createReducer(
  homeState,
  // ----------- GLOBAL FEED -----------------
  on(globalStartAction, (state: IHomeState) => ({ ...state, isLoad: true })),
  on(globalSuccesActon, (state: IHomeState, action) => ({ ...state, isLoad: false, globalFeed: action.feed })),
  on(globalErrorActon, (state: IHomeState) => ({ ...state, isLoad: false, globalFeed: null })),
  on(routerNavigatedAction, (state: IHomeState) => ({ ...state, globalFeed: null, yourFeed: null, article: null })),
  // ------- YOUR FEED -----------------
  on(yourStatrtAction, (state: IHomeState) => ({ ...state, isLoad: true })),
  on(yourSuccessAction, (state: IHomeState, action) => ({ ...state, isLoad: false, yourFeed: action })),
  on(yourErrorAction, (state: IHomeState) => ({ ...state, yourFeed: null, isLoad: false })),

)