import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: ngForm) {
    const lastName = form.value['lastName'];
    const firstName = form.value['firstName'];
    const oldPassword = form.value['oldPassword'];
    const newPassword = form.value['newPassword'];
    const confirmNewPassword = form.value['confirmNewPassword'];
    const jobTittle = form.value['jobTittle'];
  }
}
