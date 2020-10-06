import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTestGroupComponent } from './delete-test-group.component';

describe('DeleteTestGroupComponent', () => {
  let component: DeleteTestGroupComponent;
  let fixture: ComponentFixture<DeleteTestGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTestGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTestGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
