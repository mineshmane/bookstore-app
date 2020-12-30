import { Injectable } from '@angular/core';
import {HttpService} from '../httpservice/http.service'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  registration(data){
  return  this.httpService.post('bookstore_user/registration',data)

  }
}
