import { createAction, props } from '@ngrx/store';
import { SettingsActionType } from './settings.action.type';
import { ICurrentUser } from 'src/app/shared/model/currentUser.interface';

export const settingsActionStart = createAction(SettingsActionType.SETTINGS_START,props<ICurrentUser>());
export const settingsActionSucces = createAction(SettingsActionType.SETTINGS_SUCCES,props<ICurrentUser>());
export const settingsActionError = createAction(SettingsActionType.SETTINGS_ERROR)