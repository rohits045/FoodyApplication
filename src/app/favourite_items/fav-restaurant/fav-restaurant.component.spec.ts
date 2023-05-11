import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavRestaurantComponent } from './fav-restaurant.component';

describe('FavRestaurantComponent', () => {
  let component: FavRestaurantComponent;
  let fixture: ComponentFixture<FavRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
