import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HobbyService} from "../../service/hobby.service";

@Component({
  selector: 'app-edit-hobbie',
  templateUrl: './edit-hobbie.component.html',
  styleUrls: ['./edit-hobbie.component.css']
})
export class EditHobbieComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private hobbyService: HobbyService) {}

  ngOnInit() {

    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      hobbies: this.formBuilder.array([]),
    });
    this.findProjectBDD()
  }
  findProjectBDD() {
    this.hobbyService.getHobbies().subscribe(
      hobbites => {
        console.log(hobbites)
        hobbites.forEach(
          hobbite => {
            const newProjectControl = this.formBuilder.group(hobbite);
            this.getHobbies().push(newProjectControl);
          }
        )
      }
    )
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
