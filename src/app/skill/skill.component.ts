import { Component, OnInit } from '@angular/core';
import {SkillService} from "../../service/skill.service";
import {Skill} from "../../Model/skill";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: Skill[]=[];
  constructor(private skillServ: SkillService) { }

  ngOnInit() {
    this.skillServ.getSkills().subscribe(data=>{
      data.forEach(skill=>{
        this.skills.push(skill);
      })
    })
  }

}
