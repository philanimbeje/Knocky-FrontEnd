import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_SERVER = 'https://localhost:44323/api/users/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
              private toastr: ToastrService) { }

  // tslint:disable-next-line: typedef
  createUser(newUser: UserModel) {
    try {
      return this.http.post<UserModel>(this.REST_API_SERVER, newUser, this.httpOptions).subscribe();
    } catch (e) {
      this.showFailMessage('User service error', e.message);
    }
  }

  // tslint:disable-next-line: typedef
  getAllUsers() {
    return this.http.get(this.REST_API_SERVER);
  }

  // tslint:disable-next-line: typedef
  updateUser(user: UserModel) {
    this.http.put(this.REST_API_SERVER + user.id, user).subscribe();
    this.showSuccessMessage('User Service', 'user updated');
  }

  // tslint:disable-next-line: typedef
  deleteUser(user: UserModel) {
    this.http.delete(this.REST_API_SERVER + user.id).subscribe();
    this.showSuccessMessage('User Service', 'user deleted');
  }

  // tslint:disable-next-line: typedef
  showFailMessage(title: string, message: string) {
    this.toastr.error(message, title);
  }

  // tslint:disable-next-line: typedef
  showSuccessMessage(title: string, message: string) {
    this.toastr.success(message, title);
  }

  // tslint:disable-next-line: typedef
  showMessage(title: string, message: string) {
    this.toastr.info(message, title);
  }
}
