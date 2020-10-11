import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ProjectModel } from 'src/app/models/project';
import { TestGroupModel } from 'src/app/models/testGroup';
import { UserModel } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/project/project.service';
import { TestGroupService } from 'src/app/services/testGroup/test-group.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserProjectService } from 'src/app/services/userProject/user-project.service';
import { EditUserComponent } from '../admin/users-table-dialog/edit-user/edit-user.component';
import { DialogData } from '../admin/users-table-dialog/users-table-dialog.component';
import { AddTestGroupComponent } from './add-test-group/add-test-group.component';
import { DeleteTestGroupComponent } from './delete-test-group/delete-test-group.component';
import { EditTestGroupComponent } from './edit-test-group/edit-test-group.component';
import { TestCaseComponent } from './test-case/test-case.component';
import { TestCyclesComponent } from './test-cycles/test-cycles.component';
import { TestRecordsComponent } from './test-records/test-records.component';

export interface TestGroupDialogData {
  testGroup: TestGroupModel;
}

export interface AddTestGroupDialogData {
  projectId: number;
  testGroup: TestGroupModel;
}

export interface AddTestCyleDialogData {
  projectId: number;
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
  selectedProject: ProjectModel;
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
    public dialog: MatDialog,
    private userService: UserService,
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
  editUser() {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '250px',
      data: {user: this.user}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // tslint:disable-next-line: prefer-const
        let resp = (result as DialogData).user;
        resp.roleId = +resp.roleId;
        this.userService.updateUser(resp);
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

  // tslint:disable-next-line: typedef
  testCycles() {
    const dialogRef = this.dialog.open(TestCyclesComponent, {
      width: '900px',
      data: {projectId: this.selectedProjectId}
    });

    dialogRef.afterClosed().subscribe();
  }

  // tslint:disable-next-line: typedef
  testRecords() {
    const dialogRef = this.dialog.open(TestRecordsComponent, {
      width: '650px',
      data: {projectId: this.selectedProjectId}
    });

    dialogRef.afterClosed().subscribe();
  }

}
