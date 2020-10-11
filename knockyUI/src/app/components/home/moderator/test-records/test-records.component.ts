import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestCycleModel } from 'src/app/models/testCycle';
import { TestRecordModel } from 'src/app/models/testRecord';
import { TestCycleService } from 'src/app/services/testCycle/test-cycle.service';
import { TestRecordService } from 'src/app/services/testRecord/test-record.service';
import { AddTestCyleDialogData } from '../moderator.component';

export interface TestRecordsDataMode {
  testCycleDescription: string;
  testCaseDescription: string;
  expectedResults: string;
  userName: string;
  status: string;
  comment: string;
  dateCompleted: Date;
}

@Component({
  selector: 'app-test-records',
  templateUrl: './test-records.component.html',
  styleUrls: ['./test-records.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TestRecordsComponent implements OnInit {

  testRecords: TestRecordModel[];
  testCycles: TestCycleModel[];
  expandedElement: TestRecordModel | null;
  columnsToDisplay: string[] = ['description', 'dateCompleted'];
  dialogRef: any;

  print(testCycle: any): void {
    this.getRecords(testCycle);
    // get html layout
    // get data
    // map data to html layout
    // transform html to pdf doc
  }

  constructor(private testRecordService: TestRecordService,
              private testCycleService: TestCycleService,
              @Inject(MAT_DIALOG_DATA) public data: AddTestCyleDialogData,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.testCycleService.getTestCyclesForProject(this.data.projectId).subscribe(
      (data: TestCycleModel[]) => this.testCycles = data);
  }

  getRecords(testCycle: any): void {
    console.log('test cycle - ' + testCycle);
    this.testRecordService.getTestRecordsForCycle(testCycle.Id).subscribe(
      (data: TestRecordModel[]) => this.testRecords = data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
