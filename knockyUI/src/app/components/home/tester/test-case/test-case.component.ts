import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TestCaseModel } from 'src/app/models/testCase';
import { TestGroupModel } from 'src/app/models/testGroup';
import { TestCaseService } from 'src/app/services/testCase/test-case.service';
import { TestGroupDialogData } from '../../moderator/moderator.component';
import { MatTableDataSource, MatTableModule  } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { MarkTestCaseComponent } from '../mark-test-case/mark-test-case.component';

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
export class TesterTestCaseComponent implements OnInit {

  testGroup: TestGroupModel;
  testCases: TestCaseModel[];
  columnsToDisplay = ['testCaseDescription', 'expectedResults'];
  expandedElement: TestCaseModel | null;


  constructor(
    public dialogRef: MatDialogRef<TesterTestCaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TestGroupDialogData,
    private toastr: ToastrService,
    private testCaseService: TestCaseService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.testGroup = this.data.testGroup;
    this.testCaseService.getTestCasesforGroup(this.testGroup).subscribe(
      (data: TestCaseModel[]) => {this.testCases = data; });
  }

  markTestCase(): void
  {
    const dialogRef = this.dialog.open(MarkTestCaseComponent, {
      width: '250px',
      data: {testCase: this.expandedElement}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //this.testCaseService.updateTestCase(result, this.testGroup.id);
      }
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
