import { Injectable } from '@angular/core';
import {Skill} from '../Model/skill';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080";
  }

  getSkills() {
    return this.http.get<Skill[]>(`${this.url}/skills`).pipe(timeout(10000));
  }

  deleteSkill(id: number)  {
    return this.http.delete(`${this.url}/skills/delete/${id}`).pipe(timeout(10000));
  }

  updateSkill(skill: Skill): Observable<Skill> {
    return this.http.post<any>(`${this.url}/skills/update`, skill).pipe(timeout(10000));
  }

  addSkill(skill: Skill) {
    return this.http.post<any>(`${this.url}/skills/add`, skill).subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  getSkill(id: number): Observable<Skill> {
    return this.http.get<any>(`${this.url}/skills/${id}`).pipe(timeout(10000));
  }

}
