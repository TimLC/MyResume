import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfilPictureComponent } from './profil-picture/profil-picture.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes} from '@angular/router';
import { MyLinkedinComponent} from './my-linkedin/my-linkedin.component';
import { MyGitComponent} from './my-git/my-git.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { ResumeComponent} from './resume/resume.component';
import { HobbieComponent} from './hobbie/hobbie.component';
import { SkillComponent} from './skill/skill.component';
import { ExperienceComponent} from './experience/experience.component';
import { ProjetsComponent} from './projets/projets.component';
import { BackOfficeLogComponent} from './back-office-log/back-office-log.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { EditHobbieComponent } from './edit-hobbie/edit-hobbie.component';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';
import { EditCompetenceComponent } from './edit-competence/edit-competence.component';
import {GitAPIService} from '../service/git-api.service';
import {GitAPIModel} from '../Model/gitAPI.model';
import { MyGitProjectComponent } from './my-git-project/my-git-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ExperienceService } from '../service/experience.service';
import {AuthGuard} from '../service/auth-guard.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PersonService} from "../service/person.service";
import {ProjectService} from "../service/project.service";
import {UserService} from "../service/user-service.service";
import {HobbyService} from "../service/hobby.service";
import {SkillService} from "../service/skill.service";


const appRoutes: Routes = [
  {path: 'frontend', component: FrontEndComponent,
    children: [
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
      },
      {path: '**', redirectTo: 'activities'}
    ]},
  {path: 'login', component: BackOfficeLogComponent},

  {path: 'backoffice', component: BackOfficeComponent, canActivate: [AuthGuard] ,

    children: [
      {
        path : 'Profil',
        component: EditProfilComponent
      },
      {
        path : 'Experiences',
        component: EditExperienceComponent
      },
      {
        path: 'Projets',
        component: EditProjectComponent
      },
      {
        path: 'Competences',
        component: EditCompetenceComponent
      },
      {
        path : 'Hobbies',
        component: EditHobbieComponent
      },
      {path: '**', redirectTo: 'Profil'}
    ]},
  {path: '**', redirectTo: 'frontend'}
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
    ProjetsComponent,
    EditProfilComponent,
    EditHobbieComponent,
    EditExperienceComponent,
    MyGitProjectComponent,
    EditCompetenceComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GitAPIService, GitAPIModel, MyGitComponent,ExperienceService,PersonService,ProjectService,AuthGuard,UserService,HobbyService, SkillService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
