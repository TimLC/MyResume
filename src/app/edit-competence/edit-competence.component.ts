import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SkillService} from "../../service/skill.service";
import {Skill} from "../../Model/skill";

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styleUrls: ['./edit-competence.component.css']
})
export class EditCompetenceComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private skillServ: SkillService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      competences: this.formBuilder.array([])
    });
    this.findExperienceBDD();
  }
  findExperienceBDD() {
    this.skillServ.getSkills().subscribe(
      skill => {
      skill.forEach(
        ski => {
          const newskillControl = this.formBuilder.group(ski);
          this.getSkills().push(newskillControl)
        }
      )
    })
  }

  onSubmitForm() {

    const formValue = this.userForm.value;

    formValue.experiences.forEach(data=>{
      console.log(data);
      if(data.id==null){
        this.skillServ.addSkill(data)
      }
      else {
        this.skillServ.updateSkill(data);
      }

    })
  }

  onAddSkill() {
    const ski= new Skill(null,null,);
    const newCompetenceControl = this.formBuilder.group(ski);
    this.getSkills().push(newCompetenceControl);
  }
  getSkills(): FormArray {
    return this.userForm.get('competences') as FormArray;

  }

  onSuppSkill(index) {
    this.getSkills().removeAt(index);
  }
}
