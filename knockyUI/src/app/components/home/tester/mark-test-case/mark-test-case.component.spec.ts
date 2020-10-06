import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkTestCaseComponent } from './mark-test-case.component';

describe('MarkTestCaseComponent', () => {
  let component: MarkTestCaseComponent;
  let fixture: ComponentFixture<MarkTestCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkTestCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkTestCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
