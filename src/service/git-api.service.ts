import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GitAPIModel} from "../Model/gitAPI.model";


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class GitAPIService {
   gitAPI:GitAPIModel;
  constructor(private http: HttpClient) { }

  getConfig(url: string){
    return this.http.get(url);
  }
  fetchedData(data:any){

     let gitAPI: GitAPIModel;
     gitAPI = new GitAPIModel(data.id, data.login,data.repos_url);
    console.log(gitAPI);
    return gitAPI
  }
  fetchedDataM(data:any){
    console.log(data);
    let gitAPIs: GitAPIModel;
    gitAPIs = new GitAPIModel(data.id, data.login,data.repos_url);

    console.log(gitAPIs);
    return gitAPIs;

  }
}



