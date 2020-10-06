import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TestCycleModel } from 'src/app/models/testCycle';

@Injectable({
  providedIn: 'root'
})
export class TestCycleService {

  private REST_API_SERVER = 'https://localhost:44323/api/testcycles/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
              private toastr: ToastrService) { }

  // tslint:disable-next-line: typedef
  createTestCycle(newTestCycle: TestCycleModel, testCaseId: number) {
    try {
      return this.http.post<TestCycleModel>(this.REST_API_SERVER + testCaseId, newTestCycle, this.httpOptions).subscribe();
    } catch (e) {
      this.showFailMessage('Test Case service error', e.message);
    }
  }

  // tslint:disable-next-line: typedef
  getTestCycle(testCycle: TestCycleModel) {
    return this.http.get(this.REST_API_SERVER);
  }

  // tslint:disable-next-line: typedef
  getTestCycles(testCycle: TestCycleModel) {
    return this.http.get(this.REST_API_SERVER + testCycle.id);
  }

  // tslint:disable-next-line: typedef
  updateTestCycle(testCycle: TestCycleModel) {
    this.http.put(this.REST_API_SERVER + testCycle.id, testCycle).subscribe();
    this.showSuccessMessage('Test Cycle Service', 'Test Cycle updated');
  }

  // tslint:disable-next-line: typedef
  deleteTestCycle(testCycle: TestCycleModel) {
    this.http.delete(this.REST_API_SERVER + testCycle.id).subscribe();
    this.showSuccessMessage('Test Cycle Service', 'Test Cycle deleted');
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
