import { Component, OnInit } from '@angular/core';
import {ExperienceService} from "../../service/experience.service";
import {Experience} from "../../Model/experience";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  test=['a','b','c','d'];
  Experiences: Experience[] = [];
  constructor(private experiences: ExperienceService) { }

  ngOnInit() {
    this.findExperienceBDD();
  }
  findExperienceBDD() {
    //this.experiences.setExperience();
    //this.Experiences = this.experiences.getExperience();
  }

}
