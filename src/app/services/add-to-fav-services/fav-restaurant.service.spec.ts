import { TestBed } from '@angular/core/testing';

import { FavRestaurantService } from './fav-restaurant.service';

describe('FavRestaurantService', () => {
  let service: FavRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
