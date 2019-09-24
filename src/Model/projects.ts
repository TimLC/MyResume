
export class Project {
  id: number;
  projectName: string;
  beginDate: string;
  endDate: string;
  description: string;
  gitLink: string;


  constructor(id: number, projectName: string, beginDate: string, endDate: string, description: string, gitLink: string) {
    this.id = id;
    this.projectName = projectName;
    this.beginDate = beginDate;
    this.endDate = endDate;
    this.description = description;
    this.gitLink = gitLink;
  }
}
