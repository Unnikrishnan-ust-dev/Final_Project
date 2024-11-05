import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hasQueryToUpdateGuard } from './has-query-to-update.guard';

describe('hasQueryToUpdateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hasQueryToUpdateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
