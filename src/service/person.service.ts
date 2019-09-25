import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {timeout} from 'rxjs/operators';
import {Person} from '../Model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080';
  }

  getPerson() {
    return this.http.get<Person>(`${this.url}/person`).pipe(timeout(10000));
  }

  updatePerson(person: Person) {
    return this.http.put<Person>(`${this.url}/person/update`, person).subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

}
