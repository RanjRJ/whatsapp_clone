import {createAction, props} from '@ngrx/store';

export interface LoginRequest {
  username: string;
  password: string;
}

export const loginRequest = createAction('login', props<{loginData: LoginRequest}>());
export const loginSuccess = createAction('login success', props<{token: any}>());
export const loginFailed = createAction('login failed', props<{error: any}>());
