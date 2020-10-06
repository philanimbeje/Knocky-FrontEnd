import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ProjectModel } from 'src/app/models/project';
import { TestGroupModel } from 'src/app/models/testGroup';
import { UserModel } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/project/project.service';
import { TestGroupService } from 'src/app/services/testGroup/test-group.service';
import { UserProjectService } from 'src/app/services/userProject/user-project.service';
import { AddTestGroupComponent } from './add-test-group/add-test-group.component';
import { DeleteTestGroupComponent } from './delete-test-group/delete-test-group.component';
import { EditTestGroupComponent } from './edit-test-group/edit-test-group.component';
import { TestCaseComponent } from './test-case/test-case.component';

export interface TestGroupDialogData {
  testGroup: TestGroupModel;
}

export interface AddTestGroupDialogData {
  projectId: number;
  testGroup: TestGroupModel;
}

export interface DeleteTestGroupDialogData {
  deleteTestGroup: boolean;
}

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ModeratorComponent implements OnInit {

  @Input() user: UserModel;
  projects: ProjectModel[];
  selectedProjectId: number;
  columnsToDisplay: string[] = ['groupName'];
  expandedElement: TestGroupModel | null;
  testGroups: TestGroupModel[];
  selectedTestGroup: TestGroupModel;
  newTestgroup: TestGroupModel;
  deleteTestGroupValidated = false;

  constructor(
    private toastr: ToastrService,
    private projectService: ProjectService,
    private userProjectService: UserProjectService,
    private testGroupService: TestGroupService,
    public dialog: MatDialog
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.userProjectService.getAllUserProjects(this.user).subscribe(
      (data: ProjectModel[]) => {this.projects = data; });
  }

  // tslint:disable-next-line: typedef
  selectProject() {
    this.testGroupService.getAllTestGroupsForProject(+this.selectedProjectId).subscribe(
      (data: TestGroupModel[]) => {this.testGroups = data; });
  }

  // tslint:disable-next-line: typedef
  editTestGroup() {
    const dialogRef = this.dialog.open(EditTestGroupComponent, {
      width: '250px',
      data: {testGroup: this.expandedElement}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // tslint:disable-next-line: prefer-const
        let resp = (result as TestGroupDialogData).testGroup;
        this.testGroupService.updateTestGroup(resp);
      }
    });
  }

  // tslint:disable-next-line: typedef
  deleteTestGroup() {
    const dialogRef = this.dialog.open(DeleteTestGroupComponent, {
      width: '250px',
      data: {user: this.deleteTestGroupValidated}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
          this.testGroupService.deleteTestGroup(this.selectedTestGroup);
      }
    });
  }

  // tslint:disable-next-line: typedef
  addTestGroup() {
    const dialogRef = this.dialog.open(AddTestGroupComponent, {
      width: '250px',
      data: {testGroup: this.newTestgroup}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.testGroupService.createTestGroup(result, this.selectedProjectId);
        this.userProjectService.getAllUserProjects(this.user).subscribe(
          (data: ProjectModel[]) => {this.projects = data; });
      }
    });
  }

  // tslint:disable-next-line: typedef
  loadTestCases() {
    const dialogRef = this.dialog.open(TestCaseComponent, {
      width: '800px',
      data: {testGroup: this.selectedTestGroup}
     });
  }

  // tslint:disable-next-line: typedef
  setTestGroup(element: TestGroupModel) {
    this.selectedTestGroup = element;
  }

}
