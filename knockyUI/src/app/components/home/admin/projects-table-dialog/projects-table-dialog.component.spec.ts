import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTableDialogComponent } from './projects-table-dialog.component';

describe('ProjectsTableDialogComponent', () => {
  let component: ProjectsTableDialogComponent;
  let fixture: ComponentFixture<ProjectsTableDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsTableDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsTableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
