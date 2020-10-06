import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoleModel } from 'src/app/models/role';
import { UserModel } from 'src/app/models/user';
import { RoleService } from 'src/app/services/role/role.service';
import { UserService } from 'src/app/services/user/user.service';
import { DialogData } from '../users-table-dialog.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  roles: RoleModel[];
  user: UserModel;

  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private userService: UserService,
    private roleService: RoleService) {
     }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.roleService.getAllRoles().subscribe(
      (data: RoleModel[]) => this.roles = data);
    this.user = this.data.user;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
