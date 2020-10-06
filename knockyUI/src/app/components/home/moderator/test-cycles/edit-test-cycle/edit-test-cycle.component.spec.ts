import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestCycleComponent } from './edit-test-cycle.component';

describe('EditTestCycleComponent', () => {
  let component: EditTestCycleComponent;
  let fixture: ComponentFixture<EditTestCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTestCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
