import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestCycleComponent } from './add-test-cycle.component';

describe('AddTestCycleComponent', () => {
  let component: AddTestCycleComponent;
  let fixture: ComponentFixture<AddTestCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTestCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
