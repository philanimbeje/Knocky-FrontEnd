import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteTestGroupDialogData } from '../moderator.component';

@Component({
  selector: 'app-delete-test-group',
  templateUrl: './delete-test-group.component.html',
  styleUrls: ['./delete-test-group.component.css']
})
export class DeleteTestGroupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteTestGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteTestGroupDialogData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
