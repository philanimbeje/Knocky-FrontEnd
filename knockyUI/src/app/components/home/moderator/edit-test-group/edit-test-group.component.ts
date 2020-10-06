import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestGroupDialogData } from '../moderator.component';

@Component({
  selector: 'app-edit-test-group',
  templateUrl: './edit-test-group.component.html',
  styleUrls: ['./edit-test-group.component.css']
})
export class EditTestGroupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTestGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TestGroupDialogData) {
     }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
