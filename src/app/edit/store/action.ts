import { createAction, props } from '@ngrx/store';
import { EditActionType } from './article.action.type';
import { EditDTO } from '../model/editDTO';
import { IBackError } from 'src/app/shared/model/backendErrore.interface';
import { IFeed } from 'src/app/home/model/globalFeed.interface';

export const editActionStart = createAction(EditActionType.EDIT_START,props<EditDTO>());
export const editActionSucces = createAction(EditActionType.EDIT_SUCCESS,props<IFeed>());
export const editActionErrore = createAction(EditActionType.EDIT_ERROR,props<IBackError>())