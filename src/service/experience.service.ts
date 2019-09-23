
import { Injectable } from '@angular/core';
import {Experience} from '../Model/experience';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {timeout} from 'rxjs/operators';
import {experience} from "../Model/experience";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Basic ' + btoa('admin:admin')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private experiences: experience[] = [];
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.url}/experiences`, httpOptions).pipe(timeout(10000));
  }

  deleteExperience(id: number): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.url}/experiences/delete/${id}`, httpOptions).pipe(timeout(10000));
  }

  updateExperience(experience: Experience): Observable<Experience> {
    return this.http.post<any>(`${this.url}/experiences/update`, experience, httpOptions).pipe(timeout(10000));
  }

  addExperience(experience: Experience): Observable<Experience> {
    return this.http.post<any>(`${this.url}/experiences/add`, experience, httpOptions).pipe(timeout(10000));
  }

  getExperience(id: number): Observable<Experience> {
    return this.http.get<any>(`${this.url}/experiences/${id}`, httpOptions).pipe(timeout(10000));
  }

  setExperience() {
    this.experiences.push(new experience(1  ,'b','c','d','e','f'));
    this.experiences.push(new experience(2  ,'q','s','d','f','g'));
  }

  getExperience() {
    return this.experiences;
  }

  addExperience() {

  }

  suppExperience() {

  }
}
