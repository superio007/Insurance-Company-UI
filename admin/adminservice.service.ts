import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { admin } from './admin';
import { signup } from './signup';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  private baseApiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getlogin(): Observable<admin[]> {
    return this.httpClient.get<admin[]>(this.baseApiUrl + '/admin');
  }

  signup(signuprequest: signup): Observable<signup>{
    const AddSignup:signup ={
      id:signuprequest.id,
      name: signuprequest.name,
      email:signuprequest.email,
      username:signuprequest.username,
      password:signuprequest.password
    };
    return this.httpClient.post<signup>(this.baseApiUrl + '/admin',AddSignup )
  }

}
