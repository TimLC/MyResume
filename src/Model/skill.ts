import { defaultsDeep } from 'lodash';

export class skill {
  id: number;
  skillName: string;


  constructor(skill?: Partial<skill>) {
    defaultsDeep(this, skill);
  }
}
