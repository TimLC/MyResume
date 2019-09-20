import { TestBed } from '@angular/core/testing';

import { UseLogService } from './use-log.service';

describe('UseLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseLogService = TestBed.get(UseLogService);
    expect(service).toBeTruthy();
  });
});
