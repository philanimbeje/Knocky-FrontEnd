import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ProjectModel } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project/project.service';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

export interface ProjectDialogData {
  project: ProjectModel;
}
export interface DeleteProjectDialogData {
  deleteProject: boolean;
}

@Component({
  selector: 'app-projects-table-dialog',
  templateUrl: './projects-table-dialog.component.html',
  styleUrls: ['./projects-table-dialog.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ProjectsTableDialogComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  projects: ProjectModel[];
  expandedElement: ProjectModel | null;
  deleteProjectValidated = false;
  columnsToDisplay: string[] = ['projectName'];

  constructor(public dialogRef: MatDialogRef<ProjectsTableDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ProjectModel,
              private projectService: ProjectService,
              public dialog: MatDialog,
              private toastr: ToastrService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getAllProjects().subscribe(
      (data: ProjectModel[]) => this.projects = data);
  }

  editProject(): void {
    const dialogRef = this.dialog.open(EditProjectComponent, {
      width: '250px',
      data: {project: this.expandedElement}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // tslint:disable-next-line: prefer-const
        let resp = (result as ProjectDialogData).project;
        this.projectService.updateProject(resp);
        this.getProjects();
      }
    });
    this.table.renderRows();
  }

  deleteProject(): void {
    const dialogRef = this.dialog.open(DeleteProjectComponent, {
      width: '250px',
      data: {project: this.deleteProjectValidated}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
          this.projectService.deleteProject(this.expandedElement);
          this.getProjects();
          this.table.renderRows();
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  showSuccessMessage(title: string, message: string): void {
    this.toastr.success(message, title);
  }

  showFailMessage(title: string, message: string): void {
    this.toastr.error(message, title);
  }

}
