import { TestBed } from '@angular/core/testing';

import { ServicemanagementService } from './servicemanagement.service';

describe('ServicemanagementService', () => {
  let service: ServicemanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicemanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
