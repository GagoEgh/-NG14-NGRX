import { createReducer, on } from '@ngrx/store';
import { IAuthState } from '../model/authState.interface';
import { registerError, registerStart, registerSuccess } from './action';

const authState: IAuthState = {
  isLoad: false,
  logedIn: false,
  currentUser: null,
  backError: null
}

export const authReducer = createReducer(
  authState,
  on(registerStart, (state: IAuthState) => ({ ...state, isLoad: true })),
  on(registerSuccess, (state: IAuthState, action) => (
    {
      ...state,
      isLoad: false,
      logedIn: true,
      currentUser: action
    })
  ),
  on(registerError, (state: IAuthState, action) => ({
    ...state,
    isLoad: false,
    logedIn: false,
    backError:action
  }))
)

