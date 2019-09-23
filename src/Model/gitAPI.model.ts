import {Injectable} from "@angular/core";

@Injectable()
export class GitAPIModel {


  constructor(public id: number, public login?: string, public name?: string, public description?:string, public commits_url?:string, public totalCommits?:number) {
  }

}
