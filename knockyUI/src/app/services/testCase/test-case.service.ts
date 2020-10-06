import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TestCaseModel } from 'src/app/models/testCase';
import { TestGroupModel } from 'src/app/models/testGroup';

@Injectable({
  providedIn: 'root'
})
export class TestCaseService {

  private REST_API_SERVER = 'https://localhost:44323/api/testcases/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
              private toastr: ToastrService) { }

  // tslint:disable-next-line: typedef
  createTestCase(newTestcase: TestCaseModel, testGroupId: number) {
    try {
      return this.http.post<TestCaseModel>(this.REST_API_SERVER + testGroupId, newTestcase, this.httpOptions).subscribe();
    } catch (e) {
      this.showFailMessage('Test Case service error', e.message);
    }
  }

  // tslint:disable-next-line: typedef
  getTestCasesforGroup(testGroup: TestGroupModel) {
    return this.http.get(this.REST_API_SERVER + testGroup.id);
  }

  // tslint:disable-next-line: typedef
  updateTestCase(testcase: TestCaseModel) {
    this.http.put(this.REST_API_SERVER + testcase.id, testcase).subscribe();
    this.showSuccessMessage('Test Case Service', 'Test Case updated');
  }

  // tslint:disable-next-line: typedef
  deleteTestCase(testcase: TestCaseModel) {
    this.http.delete(this.REST_API_SERVER + testcase.id).subscribe();
    this.showSuccessMessage('Test Case Service', 'Test Case deleted');
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
