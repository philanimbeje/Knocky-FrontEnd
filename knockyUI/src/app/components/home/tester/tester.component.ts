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
import { TesterTestCaseComponent } from './test-case/test-case.component';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TesterComponent implements OnInit {
  @Input() user: UserModel;
  projects: ProjectModel[];
  selectedProjectId: number;
  testGroups: TestGroupModel[];
  selectedTestGroup: TestGroupModel;
  expandedElement: TestGroupModel | null;
  columnsToDisplay: string[] = ['groupName'];


  constructor(
    private toastr: ToastrService,
    private projectService: ProjectService,
    private userProjectService: UserProjectService,
    private testGroupService: TestGroupService,
    public dialog: MatDialog) { }

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
  setTestGroup(element: TestGroupModel) {
    this.selectedTestGroup = element;
  }

  // tslint:disable-next-line: typedef
  loadTestCases() {
    const dialogRef = this.dialog.open(TesterTestCaseComponent, {
      width: '800px',
      data: {testGroup: this.selectedTestGroup}
     });
  }

}
