import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = environment.baseUrl
  constructor(private http: HttpClient) { }
  post(url, data) {
    return this.http.post(this.baseurl + url, data)

  }
  get(url) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmViZWFiMDBmOTAyYTAwMTc2YjZiN2QiLCJpYXQiOjE2MDkzOTEyNDYsImV4cCI6MTYwOTQ3NzY0Nn0.u-BVCrDdq7WG0hOLQbIRZAzXs7G_Smd2KqjiKSCN2wU'
      })
    }
    return this.http.get(this.baseurl + url, options);
  }
}
