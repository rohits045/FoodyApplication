import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerResgisterRestaurantComponent } from './owner-resgister-restaurant.component';

describe('OwnerResgisterRestaurantComponent', () => {
  let component: OwnerResgisterRestaurantComponent;
  let fixture: ComponentFixture<OwnerResgisterRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerResgisterRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerResgisterRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
