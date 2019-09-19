import { defaultsDeep } from 'lodash';

export class user {
  private _id: number;
  private _userame: string;
  private _fullName: string;
  private _jobTittle: string;
  private _idGithub: string;
  private _password: string;
  private _phoneNumber: number;
  private _emailAddress: string;
  isAuth= false;


  constructor(id: number, userame: string, fullName: string, jobTittle: string, idGithub: string, password: string, phoneNumber: number, emailAddress: string) {
    this._id = id;
    this._userame = userame;
    this._fullName = fullName;
    this._jobTittle = jobTittle;
    this._idGithub = idGithub;
    this._password = password;
    this._phoneNumber = phoneNumber;
    this._emailAddress = emailAddress;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get userame(): string {
    return this._userame;
  }

  set userame(value: string) {
    this._userame = value;
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  get jobTittle(): string {
    return this._jobTittle;
  }

  set jobTittle(value: string) {
    this._jobTittle = value;
  }

  get idGithub(): string {
    return this._idGithub;
  }

  set idGithub(value: string) {
    this._idGithub = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get phoneNumber(): number {
    return this._phoneNumber;
  }

  set phoneNumber(value: number) {
    this._phoneNumber = value;
  }

  get emailAddress(): string {
    return this._emailAddress;
  }

  set emailAddress(value: string) {
    this._emailAddress = value;
  }
}
