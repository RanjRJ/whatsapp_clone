import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loginFailed, loginRequest, loginSuccess} from '../actions/login.actions';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {LoginService} from '../../services/login.service';
import {of} from 'rxjs';

@Injectable()
export class LoginEffect {
  constructor(private action$: Actions, private loginSev: LoginService) {
  }

  loginRequest$ = createEffect(() =>
    this.action$.pipe(
      ofType(loginRequest),
      mergeMap(action => this.loginSev.login(action.loginData).pipe(
        tap(token => localStorage.setItem('token', token.token)),
        map(token => loginSuccess({token})),
        catchError(error => of(loginFailed({error: error.error})))
      ))
    )
  );
}


