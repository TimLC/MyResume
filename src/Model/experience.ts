import { defaultsDeep } from 'lodash';

export class experience {
 /* private _id: number;
  private _company: string;
  private _beginDate: string;
  private _endDate: string;
  private _adress: string;
  private _description: string; */


  constructor(public id: number,public company: string, public beginDate: string, public endDate: string, public adress: string, public description: string) {
    this.id = id;
    this.company = company;
    this.beginDate = beginDate;
    this.endDate = endDate;
    this.adress = adress;
    this.description = description;
  }

  }


