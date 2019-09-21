import { Component, OnInit } from '@angular/core';
import {GitAPIService} from "../../service/git-api.service";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private gitAPI: GitAPIService) { }

  ngOnInit() {
  }


}
