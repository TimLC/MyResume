
export class Person {
    id: number;
    fullName: string;
    jobTitle: string;
    idGithub: string;
    phoneNumber: number;
    emailAddress: string;
    linkedInLink: string;

    constructor(id: number, fullName: string, jobTitle: string, idGithub: string, phoneNumber: number,
                emailAddress: string, linkedInLink: string) {
        this.id = id;
        this.fullName = fullName;
        this.jobTitle = jobTitle;
        this.idGithub = idGithub;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
        this.linkedInLink = linkedInLink;
    }
}
