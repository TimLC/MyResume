import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {experience} from '../../Model/experience';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  userForm: FormGroup;

    Experience: Array<experience> = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.initForm();

  }

  initForm() {
    const newExperience = new experience(1,'Google','10','20','aaa','lol');
    this.Experience.push(newExperience);

    this.userForm = this.formBuilder.group({
      experiences: this.formBuilder.array([newExperience])
    });
  }

  onSubmitForm() {

  }

  onAddExperience() {
    const newExperienceControl = this.formBuilder.control(null, Validators.required);
    this.getExperiences().push(newExperienceControl);

  }
  getExperiences(): FormArray {
    return this.userForm.get('experiences') as FormArray;

  }
}
