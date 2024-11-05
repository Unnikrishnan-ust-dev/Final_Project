import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { providerGaurdGuard } from './provider-gaurd.guard';

describe('providerGaurdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => providerGaurdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
