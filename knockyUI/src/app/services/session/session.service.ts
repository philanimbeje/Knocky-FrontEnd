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

  clearSessionUser(): void {
    this.sessionInfo.clearUser();
  }

  setSessionUser(user: UserModel): void {
    this.sessionInfo.setUser(user);
  }
}
