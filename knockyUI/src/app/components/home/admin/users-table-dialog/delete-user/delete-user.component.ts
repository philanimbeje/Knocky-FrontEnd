import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteUserDialogData } from '../users-table-dialog.component';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteUserDialogData) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
