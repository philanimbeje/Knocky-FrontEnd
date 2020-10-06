import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private REST_API_SERVER = 'https://localhost:44323/api/login/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  login(loginDetails: LoginModel) {

    return this.http.post(this.REST_API_SERVER, loginDetails);
  }
}
