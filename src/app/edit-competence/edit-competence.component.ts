import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styleUrls: ['./edit-competence.component.css']
})
export class EditCompetenceComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      competences: this.formBuilder.array([])
    });
  }

  onSubmitForm() {

  }

  onAddCompetence() {
    const newCompetenceControl = this.formBuilder.control(null, Validators.required);
    this.getCompetences().push(newCompetenceControl);
  }
  getCompetences(): FormArray {
    return this.userForm.get('competences') as FormArray;

  }

  onSuppCompetence() {

  }
}
