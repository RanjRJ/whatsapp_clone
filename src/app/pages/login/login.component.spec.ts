import {ComponentFixture, fakeAsync, TestBed, tick, inject, async} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {Store, StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {appReducers} from '../../store/reducers/login.reducers';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';
import {LoginEffect} from '../../store/effects/login.effects';
import {LoginService} from '../../services/login.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store;
  let actions: Observable<any>;
  let effects: LoginEffect;
  let loginService: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatDialogModule, RouterTestingModule, StoreModule.forRoot(appReducers), HttpClientTestingModule, HttpClientModule],
      declarations: [ LoginComponent ],
      providers: [
        {provide: fixture, useValue: true},
        LoginEffect,
        provideMockActions(() => actions),
        LoginService
      ],

    })
    .compileComponents();

    // effects = TestBed.inject(LoginEffect);
    loginService = TestBed.inject(LoginService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind inputs to component', () => {
    const hostElement = fixture.nativeElement;
    const usernameInput: HTMLInputElement = hostElement.querySelector('#username');
    const password: HTMLInputElement = hostElement.querySelector('#password');

    usernameInput.value = 'agentkssk';
    password.value = 'user1234';

    usernameInput.dispatchEvent(new Event('input'));
    password.dispatchEvent(new Event('input'));

    expect(component.loginData.get('username').value).toBe('agentkssk');
    expect(component.loginData.get('password').value).toBe('user1234');

  });

  it ('should set input values and click login', fakeAsync(() => {

    // for inputs
    const hostElement = fixture.nativeElement;
    const usernameInput: HTMLInputElement = hostElement.querySelector('#username');
    const password: HTMLInputElement = hostElement.querySelector('#password');

    usernameInput.value = 'agentkssk';
    password.value = 'user1234';

    usernameInput.dispatchEvent(new Event('input'));
    password.dispatchEvent(new Event('input'));

    // for buttons
    spyOn(component, 'login');
    let loginButton = fixture.debugElement.nativeElement.querySelector('#loginBtn');
    loginButton.click();
    tick();

    fixture.detectChanges();
    expect(component.loginData.get('username').value).toBe('agentkssk');
    expect(component.loginData.get('password').value).toBe('user1234');
    expect(component.login).toHaveBeenCalled();

  }));



  it ('should set input values and login http call', fakeAsync(inject([LoginService, HttpTestingController],(loginServ: LoginService, backend: HttpTestingController) => {

    // for inputs
    const hostElement = fixture.nativeElement;
    const usernameInput: HTMLInputElement = hostElement.querySelector('#username');
    const password: HTMLInputElement = hostElement.querySelector('#password');

    usernameInput.value = 'agentkssk';
    password.value = 'user1234';

    usernameInput.dispatchEvent(new Event('input'));
    password.dispatchEvent(new Event('input'));

    // for buttons
    spyOn(component, 'login');
    let loginButton = fixture.debugElement.nativeElement.querySelector('#loginBtn');
    loginButton.click();
    tick();

    fixture.detectChanges();
    expect(component.loginData.get('username').value).toBe('agentkssk');
    expect(component.loginData.get('password').value).toBe('user1234');
    expect(component.login).toHaveBeenCalled();


    let req = loginServ.login({username: component.loginData.get('username').value, password: component.loginData.get('password').value});

    req.subscribe(tempdat => tempdat);
    tick(10000);
    backend.expectOne('/api/auth/token/obtain/').flush({}, { status: 200, statusText: 'Ok' });

  })));
});
