import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FIR } from '../user-dashboard/fir';
import { AddFIRData } from './addfirdata';
import { FIRData } from './firdata';
import { UpdateFIRData } from './updatefirdata';

@Injectable({
  providedIn: 'root'
})
export class FirdataserviceService {

  private baseApiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getFIR(): Observable<FIRData[]> {
    return this.httpClient.get<FIRData[]>(this.baseApiUrl + '/adminfir');
  }

  getFIRbyid(id:string):  Observable<FIRData> {
    return this.httpClient.get<FIRData>(this.baseApiUrl + '/adminfir/' + id);
  }

  addFIR(FIRrequest: FIRData): Observable<FIRData>{
    const AddFIRrequest: AddFIRData = {
      id:FIRrequest.id,
      name: FIRrequest.name,
      email:FIRrequest.email,
      phone:FIRrequest.phone,
      address:FIRrequest.address,
      complaint:FIRrequest.complaint,
      remark:FIRrequest.remark,
      status:FIRrequest.status
    };
    return this.httpClient.post<FIRData>(this.baseApiUrl + '/adminfir', AddFIRrequest);
  }

  updateFIR(id: number, FIRrequest: FIRData): Observable<FIRData>{
    const UpdateFIRrequest: UpdateFIRData = {
      id: FIRrequest.id,
      name: FIRrequest.name,
      email: FIRrequest.email,
      phone: FIRrequest.phone,
      address: FIRrequest.address,
      complaint: FIRrequest.complaint,
      remark:FIRrequest.remark,
      status:FIRrequest.status
    };
    return this.httpClient.put<FIRData>(this.baseApiUrl + '/adminfir' , UpdateFIRrequest);
  }

  deleteFIR(id: number): Observable<FIRData>{
    return this.httpClient.delete<FIRData>(this.baseApiUrl+ '/adminfir/' + id);
  }

  getregisteredFIRbyid(id:string):  Observable<FIRData> {
    return this.httpClient.get<FIRData>(this.baseApiUrl + '/firregisteration/' + id);
  }
  
}
