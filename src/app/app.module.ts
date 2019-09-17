import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfilPictureComponent } from './profil-picture/profil-picture.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ResumeComponent } from './resume/resume.component';
import {RouterModule, Routes} from "@angular/router";
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { HobbieComponent } from './hobbie/hobbie.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent},
  { path: 'activities', component: ActivitiesComponent },
  { path: '', component: ActivitiesComponent }
];


import {MyLinkedinComponent} from "./my-linkedin/my-linkedin.component";
import {MyGitComponent} from "./my-git/my-git.component";


@NgModule({
  declarations: [
    AppComponent,
    ProfilPictureComponent,
    ActivitiesComponent,
    MyLinkedinComponent,
    MyGitComponent,
    ResumeComponent,
    ExperienceComponent,
    SkillComponent,
    HobbieComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
