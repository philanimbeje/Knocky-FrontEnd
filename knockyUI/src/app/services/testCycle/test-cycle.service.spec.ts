import { TestBed } from '@angular/core/testing';

import { TestCycleService } from './test-cycle.service';

describe('TestCycleService', () => {
  let service: TestCycleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestCycleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
