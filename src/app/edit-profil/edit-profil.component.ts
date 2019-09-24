import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
    });

  }

  onSubmit(form: NgForm) {
    const lastName = form.value['lastName'];
    const firstName = form.value['firstName'];
    const email = form.value['email'];
    const phoneNumber = form.value['phoneNumber'];

    const urlLinkedin = form.value['urlLinkedin'];
    const urlGithub = form.value['urlGithub'];
    const jobTittle = form.value['jobTittle'];
  }

}
