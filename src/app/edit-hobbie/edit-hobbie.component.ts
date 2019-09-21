import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-hobbie',
  templateUrl: './edit-hobbie.component.html',
  styleUrls: ['./edit-hobbie.component.css']
})
export class EditHobbieComponent implements OnInit {

  userForm: FormGroup;
  save = ['a','b','c','d'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      hobbies: this.formBuilder.array(this.save),
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

  onSuppHobby(index) {
    this.getHobbies().removeAt(index);
  }
}
