import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoleModel } from 'src/app/models/role';
import { UserModel } from 'src/app/models/user';
import { RoleService } from 'src/app/services/role/role.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  roles: RoleModel[];

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel,
    private roleService: RoleService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.roleService.getAllRoles().subscribe(
      (data: RoleModel[]) => this.roles = data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
