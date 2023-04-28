import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addcontact } from './addcontact';
import { contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseApiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<contact[]> {
    return this.httpClient.get<contact[]>(this.baseApiUrl + '/contact');
  }

  savecontact(contactrequest: contact): Observable<contact>{
    const AddContact:addcontact ={
      name: contactrequest.name,
      email: contactrequest.email,
      inquiry: contactrequest.inquiry
    };
    return this.httpClient.post<contact>(this.baseApiUrl + '/contact', AddContact )
  }

}
