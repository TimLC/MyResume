import {Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../service/project.service";

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
    this.findExperienceBDD();
  }
  findExperienceBDD() {
    this.projectService.getProjects().subscribe(
      projects => {
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

  }

  onAddProject() {
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getProjects().push(newHobbyControl);
  }
  getProjects(): FormArray {
    return this.userForm.get('projects') as FormArray;
  }

  onSuppProject(index) {
    this.getProjects().removeAt(index);
  }
}
