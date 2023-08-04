import { createReducer, on } from '@ngrx/store';
import { IHomeState } from '../model/homeState.interface';
import { globalErrorActon, globalStartAction, globalSuccesActon } from './action';

const homeState:IHomeState = {
  isLoad:false,
  globalFeed:null
}

export const homeReducer = createReducer(
  homeState,
  // -----------GLOBAL FEED-----------------
  on(globalStartAction,(state:IHomeState)=>({...state,isLoad:true})),
  on(globalSuccesActon,(state:IHomeState,action)=>({...state,isLoad:false,globalFeed:action.feed})),
  on(globalErrorActon,(state:IHomeState)=>({...state,isLoad:false,globalFeed:null})),

)