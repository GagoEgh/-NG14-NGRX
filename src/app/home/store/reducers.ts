import { createReducer, on } from '@ngrx/store';
import { IHomeState } from '../model/homeState.interface';
import { 
  globalErrorActon, 
  globalStartAction, 
  globalSuccesActon, 
  popularTagsErrorAction, 
  popularTagsStartAction, 
  popularTagsSuccesAction, 
  tagErroreAction, 
  tagStartAction, 
  tagSuccessAction, 
  yourErrorAction, 
  yourStatrtAction, 
  yourSuccessAction } from './action';
import { routerNavigatedAction } from '@ngrx/router-store';

const homeState: IHomeState = {
  isLoad: false,
  globalFeed: null,
  yourFeed: null,
  popularTags: null,
  tag:null,
  isTag:false
}

export const homeReducer = createReducer(
  homeState,
  // ----------- GLOBAL FEED -----------------
  on(globalStartAction, (state: IHomeState) => ({ ...state, isLoad: true })),
  on(globalSuccesActon, (state: IHomeState, action) => ({ ...state, isLoad: false, globalFeed: action.feed })),
  on(globalErrorActon, (state: IHomeState) => ({ ...state, isLoad: false, globalFeed: null })),
  on(routerNavigatedAction, (state: IHomeState) => ({ ...state, globalFeed: null, yourFeed: null, article: null,isTag:false})),
  // ------- YOUR FEED -----------------
  on(yourStatrtAction, (state: IHomeState) => ({ ...state, isLoad: true })),
  on(yourSuccessAction, (state: IHomeState, action) => ({ ...state, isLoad: false, yourFeed: action })),
  on(yourErrorAction, (state: IHomeState) => ({ ...state, yourFeed: null, isLoad: false })),
  // ------- POPULAR TAGS  -----------------
  on(popularTagsStartAction,(state:IHomeState)=>({...state,isLoad: true })),
  on(popularTagsSuccesAction,(state:IHomeState,action)=>({...state,popularTags:action.tags,isLoad: false})),
  on(popularTagsErrorAction,(state:IHomeState)=>({...state,isLoad: false})),
  // ----------------- TAG ------------------
  on(tagStartAction,(state:IHomeState)=>({...state,isLoad:true})),
  on(tagSuccessAction,(state:IHomeState,action)=>({...state,isLoad:false,isTag:true,tag:action})),
  on(tagErroreAction,(state:IHomeState)=>({...state,isLoad:false})),
)