import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRestaurantsDetailsComponent } from './owner-restaurants-details.component';

describe('OwnerRestaurantsDetailsComponent', () => {
  let component: OwnerRestaurantsDetailsComponent;
  let fixture: ComponentFixture<OwnerRestaurantsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerRestaurantsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerRestaurantsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
