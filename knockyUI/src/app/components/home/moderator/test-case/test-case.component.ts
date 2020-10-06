import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TestCaseModel } from 'src/app/models/testCase';
import { TestGroupModel } from 'src/app/models/testGroup';
import { TestCaseService } from 'src/app/services/testCase/test-case.service';
import { TestGroupDialogData } from '../moderator.component';
import { AddTestCaseComponent } from './add-test-case/add-test-case.component';
import { DeleteTestCaseComponent } from './delete-test-case/delete-test-case.component';
import { EditTestCaseComponent } from './edit-test-case/edit-test-case.component';

export interface TestCaseDialogData {
  testCase: TestCaseModel;
}

export interface DeleteTestCaseDialogData {
  deleteTestGroup: boolean;
}

@Component({
  selector: 'app-test-case',
  templateUrl: './test-case.component.html',
  styleUrls: ['./test-case.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TestCaseComponent implements OnInit {

  testGroup: TestGroupModel;
  testCases: TestCaseModel[];
  columnsToDisplay = ['testCaseDescription', 'expectedResults'];
  expandedElement: TestCaseModel | null;
  newTestCase: TestCaseModel;
  deleteTestCaseValidated = false;

  constructor(
    public dialogRef: MatDialogRef<TestCaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TestGroupDialogData,
    private toastr: ToastrService,
    private testCaseService: TestCaseService,
    public dialog: MatDialog) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.testGroup = this.data.testGroup;
    this.testCaseService.getTestCasesforGroup(this.testGroup).subscribe(
      (data: TestCaseModel[]) => {this.testCases = data; });
  }

  // tslint:disable-next-line: typedef
  editTestCase() {
    const dialogRef = this.dialog.open(EditTestCaseComponent, {
      width: '250px',
      data: {testCase: this.expandedElement}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // tslint:disable-next-line: prefer-const
        let resp = (result as TestCaseDialogData).testCase;
        this.testCaseService.updateTestCase(resp);
      }
    });
  }

  // tslint:disable-next-line: typedef
  deleteTestCase() {
    const dialogRef = this.dialog.open(DeleteTestCaseComponent, {
      width: '250px',
      data: {user: this.deleteTestCaseValidated}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
          this.testCaseService.deleteTestCase(this.expandedElement);
      }
    });
  }

  // tslint:disable-next-line: typedef
  addTestCase() {
    const dialogRef = this.dialog.open(AddTestCaseComponent, {
      width: '250px',
      data: {testCase: this.newTestCase}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.testCaseService.createTestCase(result, this.testGroup.id);
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
