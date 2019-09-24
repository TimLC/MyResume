import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../service/user-service.service';
import {Router} from '@angular/router';
import {User} from '../../Model/user';

@Component({
  selector: 'app-back-office-log',
  templateUrl: './back-office-log.component.html',
  styleUrls: ['./back-office-log.component.css']
})
export class BackOfficeLogComponent implements OnInit {
  errorConnexion: boolean;

  constructor( private userService: UserService,
               private router: Router) {
    this.errorConnexion = false;
  }

  ngOnInit() {
    this.errorConnexion = false;
  }
  onLogIn(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    const user = new User(null, username, password);
    if (this.userService.connectUser(user)) {
      this.router.navigate(['/backoffice']);
    } else {
      this.errorConnexion = true;
    }
  }

}
