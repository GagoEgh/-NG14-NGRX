import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ISettingsState } from '../model/settings.state.interface';

const settingFeatureSelector = createFeatureSelector<ISettingsState>('settings');
export const updateCurrentUser = createSelector(settingFeatureSelector ,(state:ISettingsState)=>state.currentUser);
export const settingsIsLoad = createSelector(settingFeatureSelector,(state:ISettingsState)=>state.isLoad);
