import {Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../service/project.service";
import {Project} from "../../Model/projects";
import {Person} from "../../Model/person";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private projectService: ProjectService) {}

  ngOnInit() {

    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      projects: this.formBuilder.array([]),
    });
    this.findProjectBDD();
  }
  findProjectBDD() {
    this.projectService.getProjects().subscribe(
      projects => {
        console.log(projects)
        projects.forEach(
          project => {
            const newProjectControl = this.formBuilder.group(project);
            this.getProjects().push(newProjectControl);
          }
        )
      }
    )
  }
  onSubmitForm() {
    console.log("test")
    console.log(this.userForm.value)
    const formValue = this.userForm.value;
    console.log(formValue.value(0))

    // var newProject = new Project(
    //   1,
    //   formValue.projectName,
    //   formValue.emailAddress,
    //   formValue.phoneNumber,
    //   formValue.linkedInLink,
    //   formValue.idGithub,
    // );
    // this.personService.updatePerson(newProject);
  }

  onAddProject() {
    const project = new Project(2,null,null,null,null,null)
    const newHobbyControl = this.formBuilder.group(project);
    this.getProjects().push(newHobbyControl);
  }
  getProjects(): FormArray {
    return this.userForm.get('projects') as FormArray;
  }

  onSuppProject(index) {
    this.getProjects().removeAt(index);
  }
}
