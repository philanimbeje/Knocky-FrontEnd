import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ProjectModel } from 'src/app/models/project';
import { RoleModel } from 'src/app/models/role';
import { UserModel } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/project/project.service';
import { RoleService } from 'src/app/services/role/role.service';
import { UserService } from 'src/app/services/user/user.service';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ProjectsTableDialogComponent } from './projects-table-dialog/projects-table-dialog.component';
import { UsersTableDialogComponent } from './users-table-dialog/users-table-dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Input() user: UserModel;

  users: UserModel[];
  userColumnsToDisplay = ['name', 'surname', 'username', 'role'];
  projects: ProjectModel[];
  projectColumnsToDisplay = ['name'];

  showUsersTable = false;
  showProjectsTable = false;

  constructor(
    private toastr: ToastrService,
    public dialog: MatDialog,
    private userService: UserService,
    private projectService: ProjectService,
    private roleService: RoleService) { }

  newUser: UserModel;
  newUserRole: RoleModel;
  newProject: ProjectModel;

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '250px',
      data: {model: this.newUser}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.roleId = +result.roleId;
        // tslint:disable-next-line: prefer-const
        let resp = (result as UserModel);
        this.userService.createUser(resp);
      }
    });
  }

  openAddProjectDialog(): void {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: '250px',
      data: {name: this.newProject}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // tslint:disable-next-line: prefer-const
        let resp = (result as ProjectModel);
        resp.dateCreated = new Date();
        this.projectService.createProject(resp);
      }
    });
  }

  // tslint:disable-next-line: typedef
  displayUsersTable() {
    const dialogRef = this.dialog.open(UsersTableDialogComponent, {
      width: '600px',
      data: {name: this.newProject}
    });
  }

  // tslint:disable-next-line: typedef
  displayProjectsTable() {
    const dialogRef = this.dialog.open(ProjectsTableDialogComponent, {
      width: '600px',
      data: {name: this.newProject}
    });
  }

  // tslint:disable-next-line: typedef
  showSuccessMessage(title: string, message: string) {
    this.toastr.success(message, title);
  }

  // tslint:disable-next-line: typedef
  showFailMessage(title: string, message: string) {
    this.toastr.error(message, title);
  }

}
