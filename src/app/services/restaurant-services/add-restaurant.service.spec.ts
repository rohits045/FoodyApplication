import { TestBed } from '@angular/core/testing';

import { AddRestaurantService } from './add-restaurant.service';

describe('AddRestaurantService', () => {
  let service: AddRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
