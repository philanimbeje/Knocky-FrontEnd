import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteProjectDialogData } from '../projects-table-dialog.component';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteProjectDialogData) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
