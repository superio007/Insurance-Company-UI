import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { signup } from './signup';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private baseApiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getlogin(): Observable<user[]> {
    return this.httpClient.get<user[]>(this.baseApiUrl + '/user');
  }

  signup(signuprequest: signup): Observable<signup>{
    const AddSignup:signup ={
      id:signuprequest.id,
      name: signuprequest.name,
      email:signuprequest.email,
      username:signuprequest.username,
      password:signuprequest.password
    };
    return this.httpClient.post<signup>(this.baseApiUrl + '/user',AddSignup )
  }

}
