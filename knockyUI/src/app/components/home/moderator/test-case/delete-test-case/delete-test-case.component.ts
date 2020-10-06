import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteTestCaseDialogData } from '../test-case.component';

@Component({
  selector: 'app-delete-test-case',
  templateUrl: './delete-test-case.component.html',
  styleUrls: ['./delete-test-case.component.css']
})
export class DeleteTestCaseComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteTestCaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteTestCaseDialogData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
