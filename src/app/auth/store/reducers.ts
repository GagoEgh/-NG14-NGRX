import { createReducer, on } from '@ngrx/store';
import { IAuthState } from '../model/authState.interface';
import {
  currentUserError,
  currentUserStart,
  currentUserSuccess,
  loginError,
  loginStart,
  loginSuccess,
  registerError,
  registerStart,
  registerSuccess
} from './action';

const authState: IAuthState = {
  isLoad: false,
  logedIn: false,
  currentUser: null,
  backError: null
}

export const authReducer = createReducer(
  authState,
  // ---------REGISTER------------
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
    backError: action,
    currentUser:null
  })),
  //----------LOGIN--------------
  on(loginStart, (state: IAuthState) => ({ ...state, isLoad: true })),
  on(loginSuccess, (state: IAuthState, action) => (
    {
      ...state,
      isLoad: false,
      logedIn: true,
      currentUser: action
    })
  ),
  on(loginError, (state: IAuthState, action) => ({
    ...state,
    isLoad: false,
    logedIn: false,
    backError: action,
    currentUser:null
  })),

  // ----------------CURRENT USER-----------------
  on(currentUserStart, (state: IAuthState) => ({ ...state, isLoad: true, logedIn: false })),
  on(currentUserSuccess, (state: IAuthState, action) => ({
    ...state,
    currentUser: action,
    isLoad: false,
    logedIn: true
  })),
  on(currentUserError,(state:IAuthState)=>({
    ...state,
    isLoad:false,
    logedIn:false,
    currentUser:null
  }))

)

