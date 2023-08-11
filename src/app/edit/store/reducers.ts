import { Action, createReducer, on } from '@ngrx/store';
import { IEditState } from '../model/editState.interface';
import { editActionErrore, editActionStart, editActionSucces } from './action';


const editState: IEditState = {
  isLoad: false,
  article: null,
  backError: null
}

export const editReducers = createReducer(
  editState,
  on(editActionStart, (state: IEditState) => ({ ...state, isLoad: true })),
  on(editActionSucces,(state:IEditState,action)=>({...state,isLoad:false,article:action})),
  on(editActionErrore,(state:IEditState,action)=>({...state,isLoad:false,backError:action}))
)