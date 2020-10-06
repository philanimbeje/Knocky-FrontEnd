import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTableDialogComponent } from './users-table-dialog.component';

describe('UsersTableDialogComponent', () => {
  let component: UsersTableDialogComponent;
  let fixture: ComponentFixture<UsersTableDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersTableDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
