import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectModel } from 'src/app/models/project';
import { TestRecordModel } from 'src/app/models/testRecord';

@Injectable({
  providedIn: 'root'
})
export class TestRecordService {

  private REST_API_SERVER = 'https://localhost:44323/api/testrecords/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
              private toastr: ToastrService) { }

  // tslint:disable-next-line: typedef
  createTestRecord(newTestRecord: TestRecordModel) {
    try {
      return this.http.post<TestRecordModel>(this.REST_API_SERVER, newTestRecord, this.httpOptions).subscribe();
    } catch (e) {
      this.showFailMessage('Test Record service error', e.message);
    }
  }

  // tslint:disable-next-line: typedef
  getTestRecords() {
    return this.http.get(this.REST_API_SERVER);
  }

  // tslint:disable-next-line: typedef
  getTestRecordsForCycle(testCycleId: number) {
    return this.http.get(this.REST_API_SERVER + 'getForCycles/' + testCycleId);
  }

  // tslint:disable-next-line: typedef
  getTestRecord(testRecord: TestRecordModel) {
    return this.http.get(this.REST_API_SERVER + testRecord.id);
  }

  // tslint:disable-next-line: typedef
  updateTestRecord(testRecord: TestRecordModel) {
    this.http.put(this.REST_API_SERVER + testRecord.id, testRecord).subscribe();
    this.showSuccessMessage('Test Record Service', 'Test Record updated');
  }

  // tslint:disable-next-line: typedef
  deleteTestRecord(testRecord: TestRecordModel) {
    this.http.delete(this.REST_API_SERVER + testRecord.id).subscribe();
    this.showSuccessMessage('Test Record Service', 'Test Record deleted');
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
