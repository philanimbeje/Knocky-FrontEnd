import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TestGroupModel } from 'src/app/models/testGroup';
import { ProjectService } from 'src/app/services/project/project.service';
import { TestGroupService } from 'src/app/services/testGroup/test-group.service';

@Component({
  selector: 'app-add-test-group',
  templateUrl: './add-test-group.component.html',
  styleUrls: ['./add-test-group.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class AddTestGroupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddTestGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TestGroupModel,
    private toastr: ToastrService,
    private testGroupService: TestGroupService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
