import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

  currentUser: string;

  constructor() {
    this.currentUser = 'Marco'; // FIXME
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
