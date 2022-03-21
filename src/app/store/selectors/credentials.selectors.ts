import {AppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';

const state = (appState: AppState) => appState.loginCredential;
export const selectLoginCredential = createSelector(
  state,
  (credentials: any) => credentials.token ? credentials.token : null
)
