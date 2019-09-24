import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExperienceService} from '../../service/experience.service';
import {Experience} from "../../Model/experience";

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  userForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private experiences: ExperienceService) { }

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
    this.experiences.getExperiences().subscribe(
      experiences => {
        experiences.forEach(
          experience => {
            const newExperienceControl = this.formBuilder.group(experience);
            this.getExperiences().push(newExperienceControl);
          }
        )
      }
    )
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
