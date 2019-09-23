import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const lastName = form.value['lastName'];
    const firstName = form.value['firstName'];
    const oldPassword = form.value['oldPassword'];
    const newPassword = form.value['newPassword'];
    const confirmNewPassword = form.value['confirmNewPassword'];
    const jobTittle = form.value['jobTittle'];
  }

}
