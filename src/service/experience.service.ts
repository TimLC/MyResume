import {experience} from "../Model/experience";
import {Injectable} from "@angular/core";

@Injectable()
export class experienceService {
  //constructor(public experiences: experience[]) {}
  private experiences: experience[] = [];

  setExperience() {
    this.experiences.push(new experience(1  ,'b','c','d','e','f'));
    this.experiences.push(new experience(2  ,'q','s','d','f','g'));
  }

  getExperience() {
    return this.experiences;
  }

  addExperience() {

  }

  suppExperience() {

  }
}
