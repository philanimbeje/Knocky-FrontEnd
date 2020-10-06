import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestCaseDialogData } from '../test-case.component';

@Component({
  selector: 'app-edit-test-case',
  templateUrl: './edit-test-case.component.html',
  styleUrls: ['./edit-test-case.component.css']
})
export class EditTestCaseComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTestCaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TestCaseDialogData) {
     }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
