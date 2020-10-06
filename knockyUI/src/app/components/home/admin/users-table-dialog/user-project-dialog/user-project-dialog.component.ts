import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectModel } from 'src/app/models/project';
import { UserModel } from 'src/app/models/user';
import { UserProjectModel } from 'src/app/models/userProject';
import { UserProjectService } from 'src/app/services/userProject/user-project.service';
import { UserProjectDialogData } from '../users-table-dialog.component';

@Component({
  selector: 'app-user-project-dialog',
  templateUrl: './user-project-dialog.component.html',
  styleUrls: ['./user-project-dialog.component.css']
})
export class UserProjectDialogComponent implements OnInit {

  projects: ProjectModel[];
  user: UserModel;
  userProjects: ProjectModel[];

  projectList: Array<UserProjectList> = [];



  constructor(
    public dialogRef: MatDialogRef<UserProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserProjectDialogData,
    private userProjectService: UserProjectService) {
     }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.user = this.data.user;
    this.projects = this.data.projects;
    this.userProjectService.getAllUserProjects(this.user).subscribe(
      (data: ProjectModel[]) => {this.userProjects = data;
                                 this.setupProjectList(); });
  }

  // tslint:disable-next-line: typedef
  setupProjectList() {
    this.projects.forEach(element => {
      const userProject = new UserProjectList().setProperties(element, this.userProjects);
      this.projectList.push(userProject);
    });
  }

  // tslint:disable-next-line: typedef
  toggleCheck(userProject: UserProjectList) {
    const newUserProject: UserProjectModel = {
          id: 0,
          projectId: userProject.project.id,
          userId: this.user.id,
      };

    if (userProject.isSelected) {
      this.userProjectService.createUserProject(newUserProject);
    }

    if (!userProject.isSelected) {
      this.userProjectService.deleteUserProject(newUserProject);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

class UserProjectList {

  project: ProjectModel;
  isSelected: boolean;

  constructor() {
  }

  setProperties(project: ProjectModel, userProjects: ProjectModel[]): UserProjectList {
    this.project = project;
    const userProject = userProjects.find(x => x.id === project.id);

    if (userProject != null) {
      this.isSelected = true;
    } else {
      this.isSelected = false;
    }

    return this;
  }

}
