import { Component, OnInit } from '@angular/core';
import {experienceService} from "../../service/experience.service";
import {experience} from "../../Model/experience";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  test=['a','b','c','d'];
  Experiences: experience[] = [];
  constructor(private experiences: experienceService) { }

  ngOnInit() {
    this.findExperienceBDD();
  }
  findExperienceBDD() {
    this.experiences.setExperience();
    this.Experiences = this.experiences.getExperience();
  }

}
