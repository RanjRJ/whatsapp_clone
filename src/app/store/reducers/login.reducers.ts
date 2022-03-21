import {ActionReducerMap, createReducer, on} from '@ngrx/store';
import {AppState, initialAppState} from '../state/app.state';
import {loginFailed, loginSuccess} from '../actions/login.actions';


// for login

// @ts-ignore
// tslint:disable-next-line:max-line-length
const loginReducer = createReducer(initialAppState.loginCredential, on(loginSuccess, (state, payload) => ({token: payload.token})), on(loginFailed, (state, payload) => ({token: undefined})));

// tslint:disable-next-line:typedef
export function loginCredentialReducer(state, action) {
  return loginReducer(state, action);
}

export const appReducers: ActionReducerMap<AppState,  any> = {
  loginCredential: loginCredentialReducer
}
