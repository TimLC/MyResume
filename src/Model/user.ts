import { defaultsDeep } from 'lodash';

export class user {
  id: number;
  firstName: string;
  lastName: string;
  jobTittle: string;


  constructor(user?: Partial<user>) {
    defaultsDeep(this, user);
  }
}
