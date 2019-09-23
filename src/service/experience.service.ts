
import { Injectable } from '@angular/core';
import {Experience} from '../Model/experience';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private experiences: Experience[] = [];
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.url}/experiences`).pipe(timeout(10000));
  }

  deleteExperience(id: number): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.url}/experiences/delete/${id}`).pipe(timeout(10000));
  }

  updateExperience(experience: Experience): Observable<Experience> {
    return this.http.post<any>(`${this.url}/experiences/update`, experience).pipe(timeout(10000));
  }

  addExperience(experience: Experience): Observable<Experience> {
    return this.http.post<any>(`${this.url}/experiences/add`, experience).pipe(timeout(10000));
  }

  getExperience(id: number): Observable<Experience> {
    return this.http.get<any>(`${this.url}/experiences/${id}`).pipe(timeout(10000));
  }

  // setExperience() {
  //   this.experiences.push(new experience(1  ,'b','c','d','e','f'));
  //   this.experiences.push(new experience(2  ,'q','s','d','f','g'));
  // }
  //
  // getExperience() {
  //   return this.experiences;
  // }

}
