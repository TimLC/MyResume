import { Component, OnInit } from '@angular/core';
import {Project} from "../../Model/projects";
import {ProjectService} from "../../service/project.service";

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
    projects: Project[]=[];
  constructor(private projectServ: ProjectService) {}

  ngOnInit() {
    this.projectServ.getProjects().subscribe(projet=>{
      projet.forEach(data=>{
        this.projects.push(data);
      })

    })
  }

}
