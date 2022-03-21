import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  login(request): Observable<any> {

    return this.http.post('/api/auth/token/obtain/', request);
  }
}
