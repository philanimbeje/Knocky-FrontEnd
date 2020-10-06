import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCycleReportComponent } from './test-cycle-report.component';

describe('TestCycleReportComponent', () => {
  let component: TestCycleReportComponent;
  let fixture: ComponentFixture<TestCycleReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCycleReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCycleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
