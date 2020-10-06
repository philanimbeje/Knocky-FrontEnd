import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private REST_API_SERVER = 'https://localhost:44323/api/roles/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getAllRoles() {
    return this.http.get(this.REST_API_SERVER);
  }

  // tslint:disable-next-line: typedef
  getRole(id: number) {
    return this.http.get(this.REST_API_SERVER + id);
  }
}
