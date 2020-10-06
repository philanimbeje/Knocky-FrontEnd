import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

// Angular Material
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/home/admin/admin.component';
import { ModeratorComponent } from './components/home/moderator/moderator.component';
import { TesterComponent } from './components/home/tester/tester.component';
import { TesterTestCaseComponent } from './components/home/tester/tester-test-case/tester-test-case.component';
import { AddUserComponent } from './components/home/admin/add-user/add-user.component';
import { AddProjectComponent } from './components/home/admin/add-project/add-project.component';
import { ProjectsTableDialogComponent } from './components/home/admin/projects-table-dialog/projects-table-dialog.component';
import { UsersTableDialogComponent } from './components/home/admin/users-table-dialog/users-table-dialog.component';
import { DeleteProjectComponent } from './components/home/admin/projects-table-dialog/delete-project/delete-project.component';
import { EditProjectComponent } from './components/home/admin/projects-table-dialog/edit-project/edit-project.component';
import { DeleteUserComponent } from './components/home/admin/users-table-dialog/delete-user/delete-user.component';
import { EditUserComponent } from './components/home/admin/users-table-dialog/edit-user/edit-user.component';
import { UserProjectDialogComponent } from './components/home/admin/users-table-dialog/user-project-dialog/user-project-dialog.component';
import { AddTestGroupComponent } from './components/home/moderator/add-test-group/add-test-group.component';
import { DeleteTestGroupComponent } from './components/home/moderator/delete-test-group/delete-test-group.component';
import { EditTestGroupComponent } from './components/home/moderator/edit-test-group/edit-test-group.component';
import { TestCaseComponent } from './components/home/moderator/test-case/test-case.component';
import { AddTestCaseComponent } from './components/home/moderator/test-case/add-test-case/add-test-case.component';
import { DeleteTestCaseComponent } from './components/home/moderator/test-case/delete-test-case/delete-test-case.component';
import { EditTestCaseComponent } from './components/home/moderator/test-case/edit-test-case/edit-test-case.component';
import { MarkTestCaseComponent } from './components/home/tester/mark-test-case/mark-test-case.component';
import { TestCyclesComponent } from './components/home/moderator/test-cycles/test-cycles.component';
import { AddTestCycleComponent } from './components/home/moderator/test-cycles/add-test-cycle/add-test-cycle.component';
import { EditTestCycleComponent } from './components/home/moderator/test-cycles/edit-test-cycle/edit-test-cycle.component';
import { EndTestCycleComponent } from './components/home/moderator/test-cycles/end-test-cycle/end-test-cycle.component';
import { TestCycleReportComponent } from './components/home/moderator/test-cycles/test-cycle-report/test-cycle-report.component';
import { TestRecordsComponent } from './components/home/moderator/test-records/test-records.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    ModeratorComponent,
    TesterComponent,
    AddUserComponent,
    AddProjectComponent,
    ProjectsTableDialogComponent,
    UsersTableDialogComponent,
    DeleteProjectComponent,
    EditProjectComponent,
    DeleteUserComponent,
    EditUserComponent,
    UserProjectDialogComponent,
    AddTestGroupComponent,
    DeleteTestGroupComponent,
    EditTestGroupComponent,
    TestCaseComponent,
    AddTestCaseComponent,
    DeleteTestCaseComponent,
    EditTestCaseComponent,
    TesterTestCaseComponent,
    MarkTestCaseComponent,
    TestCyclesComponent,
    AddTestCycleComponent,
    EditTestCycleComponent,
    EndTestCycleComponent,
    TestCycleReportComponent,
    TestRecordsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatSortModule,
    MatButtonModule
  ],
  entryComponents: [
    AddUserComponent,
    AddProjectComponent,
    DeleteProjectComponent,
    EditProjectComponent,
    DeleteUserComponent,
    EditUserComponent,
    AddTestGroupComponent,
    DeleteTestGroupComponent,
    EditTestGroupComponent,
    AddTestCaseComponent,
    DeleteTestCaseComponent,
    EditTestCaseComponent
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}],
  bootstrap: [AppComponent],

})
export class AppModule { }
