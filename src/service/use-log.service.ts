import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseLogService {

  constructor() { }
  logUser(username:  string, password: string){
    //password hash
    //send verification beteween hash and user name
    //if ok redierct to backoffice
  }
}
