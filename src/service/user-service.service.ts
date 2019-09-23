import { Injectable } from '@angular/core';
import {User} from '../Model/user';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {timeout} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Basic ' + btoa('admin:admin')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  connectUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(`${this.url}/user`, user, httpOptions).pipe(timeout(10000));
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/user/update`, user, httpOptions).pipe(timeout(10000));
  }

  updateUserName(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/user/update/username`, user, httpOptions).pipe(timeout(10000));
  }

  updateUserPassword(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/user/update/password`, user, httpOptions).pipe(timeout(10000));
  }

}
