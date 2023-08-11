import { Action, createReducer, on } from '@ngrx/store';
import { ISettingsState } from '../model/settings.state.interface';
import { settingsActionError, settingsActionStart, settingsActionSucces } from './setting.action';

const settingsState: ISettingsState = {
  isLoad: false,
  currentUser: null
}

export const settingsReducers = createReducer(
  settingsState,
  on(settingsActionStart,(state:ISettingsState)=>({...state, isLoad:true})),
  on(settingsActionSucces,(state:ISettingsState,action)=>({...state,currentUser:action,isLoad:false})),
  on(settingsActionError,(state:ISettingsState)=>({...state,isLoad:false}))
)