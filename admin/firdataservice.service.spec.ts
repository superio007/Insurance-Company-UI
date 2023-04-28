import { TestBed } from '@angular/core/testing';

import { FirdataserviceService } from './firdataservice.service';

describe('FirdataserviceService', () => {
  let service: FirdataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirdataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
