import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UseLogService} from '../../service/use-log.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-back-office-log',
  templateUrl: './back-office-log.component.html',
  styleUrls: ['./back-office-log.component.css']
})
export class BackOfficeLogComponent implements OnInit {

  constructor( private useLog: UseLogService,
               private router: Router) { }

  ngOnInit() {
  }
  onLogIn(form: NgForm) {
    console.log(form.value);
    const username = form.value['username'];
    const password = form.value['password'];
    this.useLog.logUser(username,password);
    this.router.navigate(['/backoffice']);


  }

}
