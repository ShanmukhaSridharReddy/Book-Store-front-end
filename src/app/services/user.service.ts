import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  signup(data:object){
    return this.httpService.signup('User/register',data)
  }

  login(data:object){
    return this.httpService.login('User/Login', data) 
  }
}
