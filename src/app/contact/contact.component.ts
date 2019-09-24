import { Component, OnInit,Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  url: string = 'http://localhost:3000/send';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
