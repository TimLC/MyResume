import {Component, Input, OnInit} from '@angular/core';
import {experience} from "../../Model/experience";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() experienceTransfert: experience;
  constructor() { }

  ngOnInit() {

  }

}
