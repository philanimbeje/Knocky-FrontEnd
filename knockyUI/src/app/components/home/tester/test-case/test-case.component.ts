import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TestCaseModel } from 'src/app/models/testCase';
import { TestGroupModel } from 'src/app/models/testGroup';
import { TestCaseService } from 'src/app/services/testCase/test-case.service';
import { TestGroupDialogData } from '../../moderator/moderator.component';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';

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

  ngOnInit(): void {
    this.testGroup = this.data.testGroup;
    this.testCaseService.getTestCasesforGroup(this.testGroup).subscribe(
      (data: TestCaseModel[]) => {this.testCases = data; });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
