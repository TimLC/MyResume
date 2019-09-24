import { Component, OnInit ,Input} from '@angular/core';
import {GitAPIModel} from "../../Model/gitAPI.model";

@Component({
  selector: 'app-my-git-project',
  templateUrl: './my-git-project.component.html',
  styleUrls: ['./my-git-project.component.css']
})
export class MyGitProjectComponent implements OnInit {

  @Input()
  public project: GitAPIModel;

  constructor() { }

  ngOnInit() {

  }

}
