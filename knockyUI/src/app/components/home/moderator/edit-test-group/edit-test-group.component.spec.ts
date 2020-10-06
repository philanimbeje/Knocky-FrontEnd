import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestGroupComponent } from './edit-test-group.component';

describe('EditTestGroupComponent', () => {
  let component: EditTestGroupComponent;
  let fixture: ComponentFixture<EditTestGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTestGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
