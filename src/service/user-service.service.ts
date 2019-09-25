import { Injectable } from '@angular/core';
import {User} from '../Model/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080';
  }

  connectUser(user: User) {
    let connexionVerified = 'false';
    return this.http.post<string>(`${this.url}/user`, user).pipe(timeout(10000)).subscribe(
        (response) => {
          console.log(response);
          connexionVerified = response;
          if (connexionVerified) {
            localStorage.setItem('isLog', 'true');
          }
          return connexionVerified;
        }, (error) => {
          console.log(error);
          return false;
        }
    );

  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/user/update`, user).pipe(timeout(10000));
  }

  updateUserName(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/user/update/username`, user).pipe(timeout(10000));
  }

  updateUserPassword(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/user/update/password`, user).pipe(timeout(10000));
  }

  public isLog() {
    if (localStorage.getItem('isLog')) {
      return true;
    }
    return false;
  }

}
