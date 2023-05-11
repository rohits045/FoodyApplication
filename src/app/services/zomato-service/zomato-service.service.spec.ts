import { TestBed } from '@angular/core/testing';

import { ZomatoServiceService } from './zomato-service.service';

describe('ZomatoServiceService', () => {
  let service: ZomatoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZomatoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
