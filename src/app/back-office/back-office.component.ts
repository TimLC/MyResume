import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      hobbies: this.formBuilder.array([]),
      competences: this.formBuilder.array([])
    });
  }

  onSubmitForm() {

  }


  onSubmit(form: ngForm) {
    const lastName = form.value['lastName'];
    const firstName = form.value['firstName'];
    const oldPassword = form.value['oldPassword'];
    const newPassword = form.value['newPassword'];
    const confirmNewPassword = form.value['confirmNewPassword'];
    const jobTittle = form.value['jobTittle'];

  onAddHobby() {
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
  }
  getHobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddCompetence() {
    const newCompetenceControl = this.formBuilder.control(null, Validators.required);
    this.getCompetences().push(newCompetenceControl);
  }
  getCompetences(): FormArray {
    return this.userForm.get('competences') as FormArray;

  }
}