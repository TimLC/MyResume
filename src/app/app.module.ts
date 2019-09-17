import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfilPictureComponent } from './profil-picture/profil-picture.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
import {MyLinkedinComponent} from "./my-linkedin/my-linkedin.component";
import {MyGitComponent} from "./my-git/my-git.component";
import { FrontEndComponent } from './front-end/front-end.component';
import { BackEndComponent } from './back-end/back-end.component';
import {ResumeModule} from "./resume/resume.module";



const appRoutes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'activities', component: ActivitiesComponent },
  {path: '', component: FrontEndComponent},
  {path: 'backend', component: BackEndComponent}
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
    BackEndComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ResumeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
