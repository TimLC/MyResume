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
  experienceList:Experience[]=[];


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
    let Experiences: Array<Experience> = [];
    this.experiences.getExperiences().subscribe(
      experiences => {
        this.experienceList=experiences;
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
    //TODO: supprimer les ancienne bdd
    // recuperer tout les formulaire
    //mettre en forme d'objets experience
    //push les objets dans la bdd
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
