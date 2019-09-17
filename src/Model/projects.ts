import { defaultsDeep } from 'lodash';

export class projects {
  private _id: number;
  private _projectName: string;
  private _beginDate: string;
  private _endDate: string;
  private _description: string;
  private _gitLink: string;


  constructor(id: number, projectName: string, beginDate: string, endDate: string, description: string, gitLink: string) {
    this._id = id;
    this._projectName = projectName;
    this._beginDate = beginDate;
    this._endDate = endDate;
    this._description = description;
    this._gitLink = gitLink;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get projectName(): string {
    return this._projectName;
  }

  set projectName(value: string) {
    this._projectName = value;
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

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get gitLink(): string {
    return this._gitLink;
  }

  set gitLink(value: string) {
    this._gitLink = value;
  }
}
