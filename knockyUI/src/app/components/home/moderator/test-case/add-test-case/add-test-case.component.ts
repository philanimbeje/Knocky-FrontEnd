import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TestCaseModel } from 'src/app/models/testCase';
import { TestCaseService } from 'src/app/services/testCase/test-case.service';

@Component({
  selector: 'app-add-test-case',
  templateUrl: './add-test-case.component.html',
  styleUrls: ['./add-test-case.component.css']
})
export class AddTestCaseComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddTestCaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TestCaseModel,
    private toastr: ToastrService,
    private testCaseService: TestCaseService,
  ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
