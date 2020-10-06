import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProjectDialogComponent } from './user-project-dialog.component';

describe('UserProjectDialogComponent', () => {
  let component: UserProjectDialogComponent;
  let fixture: ComponentFixture<UserProjectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProjectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
