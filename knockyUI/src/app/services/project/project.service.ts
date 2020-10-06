import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectModel } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private REST_API_SERVER = 'https://localhost:44323/api/projects/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
              private toastr: ToastrService) { }

  // tslint:disable-next-line: typedef
  createProject(newProject: ProjectModel) {
    try {
      this.showSuccessMessage('User Service', 'Project Added');
      return this.http.post<ProjectModel>(this.REST_API_SERVER, newProject, this.httpOptions).subscribe();
    } catch (e) {
      this.showFailMessage('Project service error', e.message);
    }
  }

  // tslint:disable-next-line: typedef
  getAllProjects() {
    return this.http.get(this.REST_API_SERVER);
  }

  // tslint:disable-next-line: typedef
  getProject(projectId: number) {
    return this.http.get(this.REST_API_SERVER + projectId);
  }

  // tslint:disable-next-line: typedef
  updateProject(project: ProjectModel) {
    this.http.put(this.REST_API_SERVER + project.id, project).subscribe();
    this.showSuccessMessage('Project Service', 'project updated');
  }

  // tslint:disable-next-line: typedef
  deleteProject(project: ProjectModel) {
    this.http.delete(this.REST_API_SERVER + project.id).subscribe();
    this.showSuccessMessage('Project Service', 'project deleted');
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
