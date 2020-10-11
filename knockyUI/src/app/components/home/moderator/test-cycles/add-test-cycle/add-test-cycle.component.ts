import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestCycleModel } from 'src/app/models/testCycle';
import { AddUserComponent } from '../../../admin/add-user/add-user.component';

@Component({
  selector: 'app-add-test-cycle',
  templateUrl: './add-test-cycle.component.html',
  styleUrls: ['./add-test-cycle.component.css']
})
export class AddTestCycleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TestCycleModel,
   ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

}
