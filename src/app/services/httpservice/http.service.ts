import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseurl=environment.baseUrl
  constructor(private http:HttpClient) { }
  post(url,data){
  return  this.http.post(this.baseurl +url ,data)

  }
}
