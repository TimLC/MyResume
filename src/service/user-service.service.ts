import { Injectable } from '@angular/core';
import {User} from '../Model/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  connectUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(`${this.url}/user`, user).pipe(timeout(10000));
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

}
