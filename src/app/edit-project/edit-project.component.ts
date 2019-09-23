import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      projects: this.formBuilder.array([]),
    });
  }

  onSubmitForm() {

  }

  onAddProject() {
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getProjects().push(newHobbyControl);
  }
  getProjects(): FormArray {
    return this.userForm.get('projects') as FormArray;
  }

  onSuppProject(index) {
    this.getProjects().removeAt(index);
  }
}
