import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HobbyService} from "../../service/hobby.service";
import {Hobby} from "../../Model/hobbies";

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
        console.log(hobbites);
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

    const formValue = this.userForm.value;
    console.log(formValue);
    formValue.hobbies.forEach(data=>{
      console.log(data);
      if(data.id==null){
        this.hobbyService.addHobby(data)
      }
      else {
        this.hobbyService.updateHobby(data);
      }

    })
  }

  onAddHobby() {
    const hob= new Hobby(null,null);
    const newHobbyControl = this.formBuilder.group(hob);
    this.getHobbies().push(newHobbyControl);
  }
  getHobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  onSuppHobby(index) {
    let id=this.getHobbies().value[index].id;
    if (id != null){
      console.log(id);
      this.hobbyService.deleteHobby(id);
    }
    this.getHobbies().removeAt(index);


  }
}
