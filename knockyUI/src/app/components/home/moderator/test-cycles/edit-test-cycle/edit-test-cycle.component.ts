import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestCycleDialogData } from '../test-cycles.component';



@Component({
  selector: 'app-edit-test-cycle',
  templateUrl: './edit-test-cycle.component.html',
  styleUrls: ['./edit-test-cycle.component.css']
})
export class EditTestCycleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTestCycleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TestCycleDialogData,
   ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

}
