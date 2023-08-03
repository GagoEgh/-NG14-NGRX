import { createAction, props } from '@ngrx/store';
import { AuthType } from './auth.type';
import { IRequestUser } from '../model/requestUser.interface';
import { ICurrentUser } from 'src/app/shared/model/currentUser.interface';
import { IBackError } from 'src/app/shared/model/backendErrore.interface';

export const registerStart = createAction(AuthType.REGISTER_START, props<IRequestUser>());
export const registerSuccess = createAction(AuthType.REGISTER_SUCCESS, props<ICurrentUser>());
export const registerError = createAction(AuthType.REGISTER_ERROR, props<IBackError>());

export const loginStart = createAction(AuthType.LOGIN_START, props<IRequestUser>());
export const loginSuccess = createAction(AuthType.LOGIN_SUCCESS, props<ICurrentUser>());
export const loginError = createAction(AuthType.LOGIN_ERROR, props<IBackError>());

export const currentUserStart = createAction(AuthType.CURRENT_USER_START);
export const currentUserSuccess = createAction(AuthType.CURRENT_USER_SUCCESS,props<ICurrentUser>());
export const currentUserError = createAction(AuthType.CURRENT_USER_ERROR);