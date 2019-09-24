
export class Person {
    id: number;
    fullName: string;
    jobTittle: string;
    idGithub: string;
    phoneNumber: number;
    emailAddress: string;
    linkedInLink: string;

    constructor(id: number, fullName: string, jobTittle: string, idGithub: string, phoneNumber: number,
                emailAddress: string, linkedInLink: string) {
        this.id = id;
        this.fullName = fullName;
        this.jobTittle = jobTittle;
        this.idGithub = idGithub;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
        this.linkedInLink = linkedInLink;
    }
}