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

    const configUrl = 'https://api.github.com/users/PolFRX';
    const commitUrl='https://api.github.com/repos';
    this.gitAPIService.getConfig(configUrl).subscribe(data => {

      let spiderMan: GitAPIModel;
      spiderMan=this.gitAPIService.fetchedData(data);

      this.gitAPIService.getConfig(spiderMan.name).subscribe(dataRepo => {
         let venomtab:GitAPIModel[]=[];
         let veno:GitAPIModel;

         for(let item in dataRepo){
           veno=this.gitAPIService.fetchedDataM(dataRepo[item]);

            venomtab.push(veno);

           this.gitAPIService.getConfig(commitUrl+"/"+spiderMan.login+"/"+dataRepo[item].name+"/stats/commit_activity").subscribe(dataCommits=> {


             venomtab[item].totalCommits=this.gitAPIService.commitsCalculus(dataCommits);
             console.log(venomtab);

           });

         }



       });
       console.log(data);});



  }

}
