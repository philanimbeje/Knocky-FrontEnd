import { Injectable } from '@angular/core';
import { SessionInfo } from 'src/app/models/sessionInfo';
import { UserModel } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  sessionInfo: SessionInfo = new SessionInfo();

  constructor() { }

  getSessionUser(): UserModel {
    return this.sessionInfo.getUser();
  }

  // tslint:disable-next-line: typedef
  setSessionUser(user: UserModel) {
    this.sessionInfo.setUser(user);
  }
}
