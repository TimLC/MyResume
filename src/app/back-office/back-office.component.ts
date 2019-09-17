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
