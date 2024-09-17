import { TestBed } from '@angular/core/testing';

import { CheckIsLoggedInGaurdService } from './check-is-logged-in-gaurd.service';

describe('CheckIsLoggedInGaurdService', () => {
  let service: CheckIsLoggedInGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckIsLoggedInGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
