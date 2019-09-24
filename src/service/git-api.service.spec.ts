import { TestBed } from '@angular/core/testing';

import { GitAPIService } from './git-api.service';

describe('GitAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitAPIService = TestBed.get(GitAPIService);
    expect(service).toBeTruthy();
  });
});
