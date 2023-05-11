import { TestBed } from '@angular/core/testing';

import { FavCousineService } from './fav-cousine.service';

describe('FavCousineService', () => {
  let service: FavCousineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavCousineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
