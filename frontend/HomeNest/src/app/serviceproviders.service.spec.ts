import { TestBed } from '@angular/core/testing';

import { ServiceprovidersService } from './serviceproviders.service';

describe('ServiceprovidersService', () => {
  let service: ServiceprovidersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceprovidersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
