import {Component, Input, OnInit} from '@angular/core';
import {Experience} from "../../Model/experience";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() experienceTransfert: Experience;
  constructor() { }

  ngOnInit() {

  }

}
