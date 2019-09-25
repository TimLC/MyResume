import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SkillService} from "../../service/skill.service";
import {Skill} from "../../Model/skill";
import {HobbyService} from "../../service/hobby.service";

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styleUrls: ['./edit-competence.component.css']
})
export class EditCompetenceComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private skillServ: SkillService) {}

  ngOnInit() {

    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      competence: this.formBuilder.array([]),
    });
    this.findProjectBDD()
  }
  findProjectBDD() {
    this.skillServ.getSkills().subscribe(
      skills => {
        console.log(skills);
        skills.forEach(
          skill => {
            const newProjectControl = this.formBuilder.group(skill);
            this.getSkills().push(newProjectControl);
          }
        )
      }
    )
  }

  onSubmitForm() {

    const formValue = this.userForm.value;
    console.log(formValue);
    formValue.competence.forEach(data=>{
      console.log(data);
      if(data.id==null){
        console.log("data");
        this.skillServ.addSkill(data)
      }
      else {
        this.skillServ.updateSkill(data);
      }

    })
  }

  onAddSkill() {
    const skill =new Skill(null,null);
    const newSkillControl = this.formBuilder.group(skill);
    this.getSkills().push(newSkillControl);
  }
  getSkills(): FormArray {
    return this.userForm.get('competence') as FormArray;
  }

  onSuppSkill(index) {
    let id=this.getSkills().value[index].id;
    if (id != null){
      console.log(id);
      this.skillServ.deleteSkill(id);
    }
    this.getSkills().removeAt(index);


  }
}
