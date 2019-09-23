import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {experienceService} from '../../service/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private experiences: experienceService) { }

  ngOnInit() {

    this.initForm();

  }

  initForm() {
    this.userForm = this.formBuilder.group({
      experiences: this.formBuilder.array([])
    });
    this.findExperienceBDD();
  }
  findExperienceBDD() {
    this.experiences.setExperience();
    var experiences = this.experiences.getExperience();

    formBuilder: FormBuilder
    for (var i = 0; i < experiences.length; i++) {
      console.log(experiences[i]);
      const newExperienceControl = this.formBuilder.group( experiences[i]);
      this.getExperiences().push(newExperienceControl);
    }
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
