import { defaultsDeep } from 'lodash';

export class hobbies {
  private _id: number;
  private _hobbyName: string;


  constructor(id: number, hobbyName: string) {
    this._id = id;
    this._hobbyName = hobbyName;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get hobbyName(): string {
    return this._hobbyName;
  }

  set hobbyName(value: string) {
    this._hobbyName = value;
  }
}
