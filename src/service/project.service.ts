import { Injectable } from '@angular/core';
import {Project} from '../Model/projects';
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
export class ProjectService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.url}/projects`, httpOptions).pipe(timeout(10000));
  }

  deleteProject(id: number): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.url}/projects/delete/${id}`, httpOptions).pipe(timeout(10000));
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.post<any>(`${this.url}/projects/update`, project, httpOptions).pipe(timeout(10000));
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<any>(`${this.url}/projects/add`, project, httpOptions).pipe(timeout(10000));
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<any>(`${this.url}/projects/${id}`, httpOptions).pipe(timeout(10000));
  }

}
