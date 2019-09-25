import {Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
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
    const formValue = this.userForm.value;
    console.log(formValue.projects)

    formValue.projects.forEach( project => {
      console.log(project)
      const newProject = new Project(Number(project.id), project.projectName,project.beginDate,project.endDate,project.description,project.gitLink);
      console.log(newProject);
      if(project.id == null) {
        this.projectService.addProject(newProject);
      }
      else {
        this.projectService.addProject(newProject);
      }
    })
  }

  onAddProject() {
    const project = new Project(null,null,null,null,null,null)
    const newHobbyControl = this.formBuilder.group(project);
    this.getProjects().push(newHobbyControl);
  }
  getProjects(): FormArray {
    return this.userForm.get('projects') as FormArray;
  }

  onSuppProject(index) {
    {
      let id=this.getProjects().value[index].id;
      if (id != null){
        console.log(id);
        this.projectService.deleteProject(id);
      }
      this.getProjects().removeAt(index);


    }
    // this.getProjects().removeAt(index);
    // const formValue = this.userForm.value;
    // formValue.projects.forEach( function(project,index2) {
    //   console.log("bite");
    //   if(project.id != null && index == index2 ) {
    //     console.log(index2);
    //     console.log("bite");
    //     console.log(project.id);
    //     this.projectService.deleteProject(project.id);
    //   }
    // })
  }
}
