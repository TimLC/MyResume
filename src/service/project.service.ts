import { Injectable } from '@angular/core';
import {Project} from '../Model/projects';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080';
  }

  getProjects(){
    return this.http.get<Project[]>(`${this.url}/projects`).pipe(timeout(10000));
  }

  deleteProject(id: number){
    return this.http.delete(`${this.url}/projects/delete/${id}`).subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.post<any>(`${this.url}/projects/update`, project).pipe(timeout(10000));
  }

  addProject(project: Project){
    return this.http.post<Project>(`${this.url}/projects/add`, project).subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<any>(`${this.url}/projects/${id}`).pipe(timeout(10000));
  }

}
