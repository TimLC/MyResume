import { Injectable } from '@angular/core';
import {Skill} from '../Model/skill';
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
export class SkillService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.url}/skills`, httpOptions).pipe(timeout(10000));
  }

  deleteSkill(id: number): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.url}/skills/delete/${id}`, httpOptions).pipe(timeout(10000));
  }

  updateSkill(skill: Skill): Observable<Skill> {
    return this.http.post<any>(`${this.url}/skills/update`, skill, httpOptions).pipe(timeout(10000));
  }

  addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<any>(`${this.url}/skills/add`, skill).pipe(timeout(10000));
  }

  getSkill(id: number): Observable<Skill> {
    return this.http.get<any>(`${this.url}/skills/${id}`).pipe(timeout(10000));
  }

}
