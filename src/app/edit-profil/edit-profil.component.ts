import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {PersonService} from "../../service/person.service";
import {Person} from "../../Model/person";

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private personService: PersonService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      fullName: '',
      emailAddress: '',
      phoneNumber: '',
      linkedInLink: '',
      idGithub:'',
      jobTittle:''});
    this.initForm();
  }

  initForm() {

    this.personService.getPerson().subscribe(
      person => {
        console.log(person);
        this.userForm = this.formBuilder.group({
          fullName: person.fullName,
          emailAddress: person.emailAddress,
          phoneNumber: person.phoneNumber,
          linkedInLink: person.linkedInLink,
          idGithub: person.idGithub,
          jobTittle: person.jobTitle
        });
      }
    )

  }

  onSubmitProfil() {
    const formValue = this.userForm.value;
    const newPerson = new Person(
      1,
      formValue['fullName'],
      formValue['emailAddress'],
      formValue['phoneNumber'],
      formValue['linkedInLink'],
      formValue['idGithub'],
      formValue['jobTittle']
    );

    let test = this.personService.updatePerson(newPerson);
    console.log(test);
  }

}
