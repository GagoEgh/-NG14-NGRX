import { createReducer, on } from '@ngrx/store';
import { IHomeState } from '../model/homeState.interface';

const homeState:IHomeState = {
  isLoad:false,
  globalFeed:null
}