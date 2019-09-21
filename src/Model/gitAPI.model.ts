import {Injectable} from "@angular/core";

@Injectable()
export class GitAPIModel {


  constructor(public id: number, public login: string, public repos_url: string, public git_commits_url?:string) {
  }

}
