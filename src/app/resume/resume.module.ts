import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ResumeComponent} from "../resume/resume.component";
import {ExperienceComponent} from "../experience/experience.component";
import {SkillComponent} from "../skill/skill.component";
import {HobbieComponent} from "../hobbie/hobbie.component";

const appRoutes: Routes = [
  {path: 'resume', component: ResumeComponent, outlet: 'frontend'}
];

@NgModule({
  declarations: [
    ResumeComponent,
    ExperienceComponent,
    SkillComponent,
    HobbieComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: []
})
export class ResumeModule { }
