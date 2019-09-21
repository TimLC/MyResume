
export class User {
  id: number;
  username: string;
  fullName: string;
  jobTittle: string;
  idGithub: string;
  password: string;
  phoneNumber: number;
  emailAddress: string;


  constructor(id: number, username: string, fullName: string, jobTittle: string, idGithub: string,
              password: string, phoneNumber: number, emailAddress: string) {
    this.id = id;
    this.username = username;
    this.fullName = fullName;
    this.jobTittle = jobTittle;
    this.idGithub = idGithub;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
  }
}
