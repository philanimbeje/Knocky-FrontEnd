import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ProjectModel } from 'src/app/models/project';
import { TestCycleModel } from 'src/app/models/testCycle';
import { TestRecordModel } from 'src/app/models/testRecord';
import { TestCycleService } from 'src/app/services/testCycle/test-cycle.service';
import { AddTestCyleDialogData } from '../moderator.component';
import { AddTestCycleComponent } from './add-test-cycle/add-test-cycle.component';
import { EditTestCycleComponent } from './edit-test-cycle/edit-test-cycle.component';

export interface TestCycleDialogData {
  testCycle: TestCycleModel;
}

@Component({
  selector: 'app-test-cycles',
  templateUrl: './test-cycles.component.html',
  styleUrls: ['./test-cycles.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TestCyclesComponent implements OnInit {

  testCycles: TestCycleModel[];
  expandedElement: TestCycleModel | null;
  columnsToDisplay: string[] = ['description', 'dateCreated', 'isComplete', 'dateCompleted'];
  newTestCycle: TestCycleModel;
  newTestRecored: TestRecordModel;

  constructor(
    public dialogRef: MatDialogRef<TestCyclesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddTestCyleDialogData,
    public dialog: MatDialog,
    private testCycleService: TestCycleService,
    private toastr: ToastrService) { }

    // tslint:disable-next-line: typedef
    ngOnInit() {
      this.getTestCycles();
    }

    // tslint:disable-next-line: typedef
    getTestCycles() {
      this.testCycleService.getTestCycles().subscribe(
        (data: TestCycleModel[]) => this.testCycles = data);
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    // tslint:disable-next-line: typedef
    addTestCycle() {
      const dialogRef = this.dialog.open(AddTestCycleComponent, {
        width: '250px',
        data: {model: this.newTestCycle}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          result.projectId = +this.data.projectId;
          this.testCycleService.createTestCycle(result);
        }
        else{
          this.showFailMessage('', 'Test cycle filed to create, please try again');
        }
      });
    }

    // tslint:disable-next-line: typedef
    editTestCylce() {
      const dialogRef = this.dialog.open(EditTestCycleComponent, {
        width: '250px',
        data: {testCycle: this.expandedElement}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const resp = (result as TestCycleDialogData).testCycle;
          this.testCycleService.updateTestCycle(resp);
        }
        else {
        }
      });
    }

    // tslint:disable-next-line: typedef
    markCycleAsComplete() {
      this.expandedElement.IsComplete = true;
      this.expandedElement.dateCompleted = new Date();
      this.testCycleService.updateTestCycle(this.expandedElement);
    }

    // tslint:disable-next-line: typedef
    showSuccessMessage(title: string, message: string) {
      this.toastr.success(message, title);
    }

    // tslint:disable-next-line: typedef
    showFailMessage(title: string, message: string) {
      this.toastr.error(message, title);
    }


}
