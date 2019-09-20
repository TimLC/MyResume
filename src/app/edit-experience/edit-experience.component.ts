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
  //Experience[] = [{id: 1,company: 'Google',beginDate: '10', endDate: '20',adress: 'aaa',description: 'lol'},
   //               {id: 1,company: 'Google',beginDate: '10', endDate: '20',adress: 'aaa',description: 'lol'}
   //               ];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      experiences: this.formBuilder.array([])
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
