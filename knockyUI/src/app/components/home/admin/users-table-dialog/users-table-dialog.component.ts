import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ProjectModel } from 'src/app/models/project';
import { UserModel } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/project/project.service';
import { UserService } from 'src/app/services/user/user.service';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserProjectDialogComponent } from './user-project-dialog/user-project-dialog.component';

export interface DialogData {
  user: UserModel;
}

export interface UserProjectDialogData {
  user: UserModel;
  projects: ProjectModel[];
}
export interface DeleteUserDialogData {
  deleteUser: boolean;
}

@Component({
  selector: 'app-users-table-dialog',
  templateUrl: './users-table-dialog.component.html',
  styleUrls: ['./users-table-dialog.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class UsersTableDialogComponent implements OnInit {
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  users: UserModel[];
  expandedElement: UserModel | null;
  deleteUserValidated = false;
  columnsToDisplay: string[] = ['name', 'surname', 'username'];
  projects: ProjectModel[];

    constructor(
      public dialogRef: MatDialogRef<UsersTableDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: UserModel,
      private userService: UserService,
      private projectService: ProjectService,
      public dialog: MatDialog,
      private toastr: ToastrService) { }


    // tslint:disable-next-line: typedef
    ngOnInit() {
      this.getUsers();
      this.getProjects();
    }

    // tslint:disable-next-line: typedef
    getUsers() {
      this.userService.getAllUsers().subscribe(
        (data: UserModel[]) => this.users = data);
    }

    // tslint:disable-next-line: typedef
    getProjects() {
      this.projectService.getAllProjects().subscribe(
        (data: ProjectModel[]) => this.projects = data);
    }

    // tslint:disable-next-line: typedef
    editUser() {
      const dialogRef = this.dialog.open(EditUserComponent, {
        width: '250px',
        data: {user: this.expandedElement}
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // tslint:disable-next-line: prefer-const
          let resp = (result as DialogData).user;
          resp.roleId = +resp.roleId;
          this.userService.updateUser(resp);
          this.getUsers();
        }
      });
      this.table.renderRows();
    }

    // tslint:disable-next-line: typedef
    deleteUser() {
      const dialogRef = this.dialog.open(DeleteUserComponent, {
        width: '250px',
        data: {user: this.deleteUserValidated}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
            this.userService.deleteUser(this.expandedElement);
            this.getUsers();
            this.table.renderRows();
        }
      });
    }

    // tslint:disable-next-line: typedef
    addProject() {
      const dialogRef = this.dialog.open(UserProjectDialogComponent, {
        width: '250px',
        data: {user: this.expandedElement, projects: this.projects}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.showSuccessMessage('User Project', 'Project added to user');
        }
      });
    }

    onNoClick(): void {
      this.dialogRef.close();
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
