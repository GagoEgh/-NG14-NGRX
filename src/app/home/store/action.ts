import { createAction, props } from '@ngrx/store';
import { HomeActionType } from './home.action.type';
import { IHomeFeed } from '../model/homeFeed.interface';


export const globalStartAction = createAction(HomeActionType.GLOBAL_START,props<{page:number}>());
export const globalSuccesActon = createAction(HomeActionType.GLOBAL_SUCCESS,props<{feed:IHomeFeed}>());
export const globalErrorActon = createAction(HomeActionType.GLOBAL_ERROR)