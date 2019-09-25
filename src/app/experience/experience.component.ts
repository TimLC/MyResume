import {Component, Input, OnInit} from '@angular/core';
import {Experience} from "../../Model/experience";
import {ExperienceService} from "../../service/experience.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() experienceTransfert: Experience;
  experiences: Experience[]=[];
  constructor(private expServ: ExperienceService) { }

  ngOnInit() {
    this.expServ.getExperiences().subscribe(data=>{
      data.forEach(exp=>{
        this.experiences.push(exp);
      })
    })
  }

}
