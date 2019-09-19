import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfilPictureComponent } from './profil-picture/profil-picture.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ContactComponent } from './contact/contact.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { MyLinkedinComponent} from "./my-linkedin/my-linkedin.component";
import { MyGitComponent} from "./my-git/my-git.component";
import { FrontEndComponent } from './front-end/front-end.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule} from "@angular/forms";
import { ResumeComponent} from "./resume/resume.component";
import { HobbieComponent} from "./hobbie/hobbie.component";
import { SkillComponent} from "./skill/skill.component";
import { ExperienceComponent} from "./experience/experience.component";
import { ProjetsComponent} from "./projets/projets.component";
import {BackOfficeLogComponent} from "./back-office-log/back-office-log.component";

const appRoutes: Routes = [
  {path: 'frontend', component: FrontEndComponent,
    children:[
      {
        path : 'activities',
        component: ActivitiesComponent
      },
      {
        path : 'resume',
        component: ResumeComponent
      },
      {
        path: 'projects',
        component: ProjetsComponent
      },
      {
        path : 'contact',
        component: ContactComponent
      }
    ]},
  {path: 'backofficelog', component: BackOfficeLogComponent},
  {path: 'backoffice', component: BackOfficeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfilPictureComponent,
    ActivitiesComponent,
    MyLinkedinComponent,
    MyGitComponent,
    ContactComponent,
    FrontEndComponent,
    BackOfficeComponent,
    BackOfficeLogComponent,
    ResumeComponent,
    HobbieComponent,
    SkillComponent,
    ExperienceComponent,
    ProjetsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
