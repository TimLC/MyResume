import { defaultsDeep } from 'lodash';

export class experience {
  private _id: number;
  private _company: string;
  private _beginDate: string;
  private _endDate: string;
  private _adress: string;
  private _description: string;


  constructor(id: number, company: string, beginDate: string, endDate: string, adress: string, description: string) {
    this._id = id;
    this._company = company;
    this._beginDate = beginDate;
    this._endDate = endDate;
    this._adress = adress;
    this._description = description;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get company(): string {
    return this._company;
  }

  set company(value: string) {
    this._company = value;
  }

  get beginDate(): string {
    return this._beginDate;
  }

  set beginDate(value: string) {
    this._beginDate = value;
  }

  get endDate(): string {
    return this._endDate;
  }

  set endDate(value: string) {
    this._endDate = value;
  }

  get adress(): string {
    return this._adress;
  }

  set adress(value: string) {
    this._adress = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
