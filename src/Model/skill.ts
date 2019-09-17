import { defaultsDeep } from 'lodash';

export class skill {
  private _id: number;
  private _skillName: string;


  constructor(id: number, skillName: string) {
    this._id = id;
    this._skillName = skillName;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get skillName(): string {
    return this._skillName;
  }

  set skillName(value: string) {
    this._skillName = value;
  }
}
