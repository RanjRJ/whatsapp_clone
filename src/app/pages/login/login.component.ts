import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModalComponent} from "../../comcomponents/modal/modal.component";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {loginFailed, loginRequest, loginSuccess} from '../../store/actions/login.actions';
import {Actions, ofType} from '@ngrx/effects';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  pageIsLoading = false;
  loginData: FormGroup;
  loginFailed = false;
  errorMessage = '';

  constructor(private matDialog: MatDialog, private formBuilder: FormBuilder, private store: Store<any>, private actions$: Actions, private loginSev: LoginService) {
    this.loginData = formBuilder.group({
      username: new FormControl('agentkssk', [Validators.required]),
      password: new FormControl('user1234', [Validators.required]),
      rememberMe: new FormControl(null)
    });

    this.actions$.pipe(
      ofType(loginFailed)
    ).subscribe((tempData: any) => {
      this.errorMessage = 'Login Failed.';
      this.pageIsLoading = false;
    });

    this.actions$.pipe(
      ofType(loginSuccess)
    ).subscribe((tempData: any) => {
      this.errorMessage = '';
      this.pageIsLoading = false;
      this.closeModal.emit(true);
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  forgotPassword() {
    this.matDialog.closeAll();
    const modalConfig = new MatDialogConfig();
    modalConfig.width = 'auto';
    modalConfig.minWidth = '400px';
    modalConfig.id = 'forgotPassword';
    modalConfig.data = {
      type: 'forgotPassword'
    };

    const dialog = this.matDialog.open(ModalComponent, modalConfig);
  }

  // tslint:disable-next-line:typedef
  checkBoxUpdate() {
    this.loginData.get('rememberMe').patchValue(!this.loginData.get('rememberMe').value);
  }

  // tslint:disable-next-line:typedef
  login() {
    if(!this.pageIsLoading) {
      if (this.loginData.valid) {
        this.pageIsLoading = true;
        this.errorMessage = '';

        const request = {
          username: this.loginData.get('username').value,
          password: this.loginData.get('password').value
        };

        this.store.dispatch(loginRequest({loginData: request}));
      } else {
        if (this.loginData.get('username').invalid) {
          this.errorMessage = 'Username is required';
        } else if(this.loginData.get('password').invalid) {
          this.errorMessage = 'Password is required';
        }

        this.pageIsLoading = false;
      }
    }

  }

}
