import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TestGroupModel } from 'src/app/models/testGroup';

@Injectable({
  providedIn: 'root'
})
export class TestGroupService {

  private REST_API_SERVER = 'https://localhost:44323/api/testgroups/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
              private toastr: ToastrService) { }

  // tslint:disable-next-line: typedef
  createTestGroup(testGroup: TestGroupModel, projectId: number) {
    console.log(testGroup);
    try {
      return this.http.post<TestGroupModel>(this.REST_API_SERVER + projectId, testGroup, this.httpOptions).subscribe();
    } catch (e) {
      this.showFailMessage('Test Group service error', e.message);
    }
  }

  // tslint:disable-next-line: typedef
  getAllTestGroupsForProject(projectId: number) {
    return this.http.get(this.REST_API_SERVER + projectId);
  }


  // tslint:disable-next-line: typedef
  updateTestGroup(testGroup: TestGroupModel) {
    this.http.put(this.REST_API_SERVER + testGroup.id, testGroup).subscribe();
    this.showSuccessMessage('Test Group', 'Test Group Updated');
  }

  // tslint:disable-next-line: typedef
  deleteTestGroup(testGroup: TestGroupModel) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: testGroup,
    };

    this.http.delete(this.REST_API_SERVER + testGroup.id).subscribe();
  }

  // tslint:disable-next-line: typedef
  showFailMessage(title: string, message: string) {
    this.toastr.error(message, title);
  }

  // tslint:disable-next-line: typedef
  showSuccessMessage(title: string, message: string) {
    this.toastr.success(message, title);
  }

  // tslint:disable-next-line: typedef
  showMessage(title: string, message: string) {
    this.toastr.info(message, title);
  }
}
