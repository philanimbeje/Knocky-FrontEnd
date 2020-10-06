import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestGroupComponent } from './add-test-group.component';

describe('AddTestGroupComponent', () => {
  let component: AddTestGroupComponent;
  let fixture: ComponentFixture<AddTestGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTestGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
