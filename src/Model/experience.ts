
export class Experience {
  id: number;
  company: string;
  beginDate: string;
  endDate: string;
  address: string;
  description: string;

  constructor(id: number, company: string, beginDate: string, endDate: string, address: string, description: string) {
    this.id = id;
    this.company = company;
    this.beginDate = beginDate;
    this.endDate = endDate;
    this.address = address;
    this.description = description;
  }
}
