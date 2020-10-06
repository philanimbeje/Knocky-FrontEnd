import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTestCaseComponent } from './delete-test-case.component';

describe('DeleteTestCaseComponent', () => {
  let component: DeleteTestCaseComponent;
  let fixture: ComponentFixture<DeleteTestCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTestCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTestCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
