import { Injectable } from '@angular/core';
import {Hobby} from '../Model/hobbies';
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
export class HobbyService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getHobbies(): Observable<Hobby[]> {
    return this.http.get<Hobby[]>(`${this.url}/hobbies`, httpOptions).pipe(timeout(10000));
  }

  deleteHobby(id: number): Observable<Hobby[]> {
    return this.http.get<Hobby[]>(`${this.url}/hobbies/delete/${id}`, httpOptions).pipe(timeout(10000));
  }

  updateHobby(hobby: Hobby): Observable<Hobby> {
    return this.http.post<any>(`${this.url}/hobbies/update`, hobby, httpOptions).pipe(timeout(10000));
  }

  addHobby(hobby: Hobby): Observable<Hobby> {
    return this.http.post<any>(`${this.url}/hobbies/add`, hobby, httpOptions).pipe(timeout(10000));
  }

  getHobby(id: number): Observable<Hobby> {
    return this.http.get<any>(`${this.url}/hobbies/${id}`, httpOptions).pipe(timeout(10000));
  }

}
