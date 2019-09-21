import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {experience} from '../../Model/experience';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.initForm();

  }

  initForm() {

    this.userForm = this.formBuilder.group({
      experiences: this.formBuilder.array([])
    });
    var newExperienceControl = this.formBuilder.group({
      id: 1,
      company: 'google',
      beginDate: '10',
      endDate: '20',
      address: 'aaa',
      description: 'lol'
    });
    this.getExperiences().push(newExperienceControl);
    newExperienceControl = this.formBuilder.group({
      id: 1,
      company: 'AWS',
      beginDate: '10',
      endDate: '20',
      address: 'aaa',
      description: 'lol'
    });
    this.getExperiences().push(newExperienceControl);
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

  onSuppExperience(index) {
    this.getExperiences().removeAt(index);
  }
}
