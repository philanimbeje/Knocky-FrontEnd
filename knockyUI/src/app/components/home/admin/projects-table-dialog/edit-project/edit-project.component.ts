import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectModel } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project/project.service';
import { ProjectDialogData } from '../projects-table-dialog.component';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  project: ProjectModel;

  constructor(
    public dialogRef: MatDialogRef<EditProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectDialogData,
    private userService: ProjectService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
