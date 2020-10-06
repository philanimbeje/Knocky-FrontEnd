
import { UserModel } from './user';

export class SessionInfo {

  private user: UserModel;

  constructor() {
  }

  getUser(): UserModel {
    return this.user;
  }

  setUser(user: UserModel): void {
    this.user = user;
  }
}
