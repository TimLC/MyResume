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
    this.url = environment.url;
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.url}/projects`).pipe(timeout(10000));
  }

  deleteProject(id: number): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.url}/projects/delete/${id}`).pipe(timeout(10000));
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.post<any>(`${this.url}/projects/update`, project).pipe(timeout(10000));
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<any>(`${this.url}/projects/add`, project).pipe(timeout(10000));
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<any>(`${this.url}/projects/${id}`).pipe(timeout(10000));
  }

}
