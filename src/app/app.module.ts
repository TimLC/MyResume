import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfilPictureComponent } from './profil-picture/profil-picture.component';
import { ActivitiesComponent } from './activities/activities.component';

import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'activities', component: ActivitiesComponent },
  { path: '', component: ActivitiesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfilPictureComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
