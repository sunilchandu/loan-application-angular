import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {IloanApplication} from './loanApplication'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  private url: string='http://192.168.0.3:8084/api/loan-application/';

  constructor(
    private http:HttpClient
  ) { }

  apiCall():Observable<IloanApplication[]>{
    return this.http.get<IloanApplication[]>(this.url)
  }
}
