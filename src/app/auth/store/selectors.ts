import { createSelector,createFeatureSelector } from '@ngrx/store';
import { IAuthState } from '../model/authState.interface';

const authFeature = createFeatureSelector<IAuthState>('auth');

export const isLoad = createSelector(authFeature,(state:IAuthState)=>state.isLoad);
export const logedIn = createSelector(authFeature,(state:IAuthState)=>state.logedIn);
export const currentUser = createSelector(authFeature,(state:IAuthState)=>state.currentUser);
export const backendErrore = createSelector(authFeature,(state:IAuthState)=>state.backError);