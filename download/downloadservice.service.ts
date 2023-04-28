import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadserviceService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getFiles(): Observable<any> {
    return this.http.get(this.baseUrl + '/downloadfiles');
  }
  
}
