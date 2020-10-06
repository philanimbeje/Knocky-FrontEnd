import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndTestCycleComponent } from './end-test-cycle.component';

describe('EndTestCycleComponent', () => {
  let component: EndTestCycleComponent;
  let fixture: ComponentFixture<EndTestCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndTestCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndTestCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
