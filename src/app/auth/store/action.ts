import { createAction, props } from '@ngrx/store';
import { AuthType } from './auth.type';
import { IRequestUser } from '../model/requestUser.interface';
import { ICurrentUser } from 'src/app/shared/model/currentUser.interface';
import { IBackError } from 'src/app/shared/model/backendErrore.interface';

export const registerStart = createAction(AuthType.REGISTER_START, props<IRequestUser>());
export const registerSuccess = createAction(AuthType.REGISTER_SUCCESS,
  props<ICurrentUser>());
export const registerError = createAction(AuthType.REGISTER_ERROR,props<IBackError>());
