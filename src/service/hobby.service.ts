import { Injectable } from '@angular/core';
import {Hobby} from '../Model/hobbies';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080';
  }

  getHobbies(){
    return this.http.get<Hobby[]>(`${this.url}/hobbies`).pipe(timeout(10000));
  }

  deleteHobby(id: number){
    return this.http.delete(`${this.url}/hobbies/delete/${id}`).pipe(timeout(10000));
  }

  updateHobby(hobby: Hobby): Observable<Hobby> {
    return this.http.post<any>(`${this.url}/hobbies/update`, hobby).pipe(timeout(10000));
  }

  addHobby(hobby: Hobby): Observable<Hobby> {
    return this.http.post<any>(`${this.url}/hobbies/add`, hobby).pipe(timeout(10000));
  }

  getHobby(id: number): Observable<Hobby> {
    return this.http.get<any>(`${this.url}/hobbies/${id}`).pipe(timeout(10000));
  }

}
