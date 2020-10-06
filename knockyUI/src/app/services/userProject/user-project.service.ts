import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectModel } from 'src/app/models/project';
import { UserModel } from 'src/app/models/user';
import { UserProjectModel } from 'src/app/models/userProject';

@Injectable({
  providedIn: 'root'
})
export class UserProjectService {

  private REST_API_SERVER = 'https://localhost:44323/api/userprojects/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
              private toastr: ToastrService) { }

  // tslint:disable-next-line: typedef
  createUserProject(userProject: UserProjectModel) {
    try {
      return this.http.post<UserProjectModel>(this.REST_API_SERVER, userProject, this.httpOptions).subscribe();
    } catch (e) {
      this.showFailMessage('User Project service error', e.message);
    }
  }

  // tslint:disable-next-line: typedef
  getAllUserProjects(user: UserModel) {
    return this.http.get(this.REST_API_SERVER + user.id);
  }


  // tslint:disable-next-line: typedef
  updateUserProject(user: UserModel, project: ProjectModel) {
    // this.http.put(this.REST_API_SERVER + userProject.id, userProject).subscribe();
    // this.showSuccessMessage('User Service', 'user updated');
  }

  // tslint:disable-next-line: typedef
  deleteUserProject(userProject: UserProjectModel) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: userProject,
    };

    this.http.delete(this.REST_API_SERVER, options).subscribe();
  }

  showFailMessage(title: string, message: string): void {
    this.toastr.error(message, title);
  }
  showSuccessMessage(title: string, message: string): void {
    this.toastr.success(message, title);
  }
  showMessage(title: string, message: string): void {
    this.toastr.info(message, title);
  }
}
