import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {GitAPIService} from "../../service/git-api.service";
import {GitAPIModel} from "../../Model/gitAPI.model";


@Component({
  selector: 'app-my-git',
  templateUrl: './my-git.component.html',
  styleUrls: ['./my-git.component.css']
})
@Injectable()
export class MyGitComponent implements OnInit {

  constructor(private http: HttpClient, private gitAPIService: GitAPIService) { }

  ngOnInit() {

    const configUrl = 'https://api.github.com/users/TimLC';
    this.gitAPIService.getConfig(configUrl).subscribe(data => {
      console.log(typeof data);
      let spiderMan: GitAPIModel;
      spiderMan=this.gitAPIService.fetchedData(data);
      console.log(typeof spiderMan);
      console.log(spiderMan.id);

      // //reception of the model
      // //call of commits
      console.log(typeof spiderMan.repos_url);
       this.gitAPIService.getConfig(spiderMan.repos_url).subscribe(dataRepo => {
        console.log(dataRepo);
        let venom:GitAPIModel;
        venom= this.gitAPIService.fetchedDataM(dataRepo);
      console.log(typeof venom.git_commits_url);
         this.gitAPIService.getConfig(venom.git_commits_url).subscribe(dataCommits=> {
           console.log(dataCommits);
         })
       });
       console.log(data);});



  }

}
