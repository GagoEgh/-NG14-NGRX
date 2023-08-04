import { createAction, props } from '@ngrx/store';
import { HomeActionType } from './home.action.type';

export const globalStartAction = createAction(HomeActionType.GLOBAL_START);
export const globalSuccesActon = createAction(HomeActionType.GLOBAL_SUCCESS);
export const globalErrorActon = createAction(HomeActionType.GLOBAL_ERROR)