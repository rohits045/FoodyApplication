import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCartListComponent } from './order-cart-list.component';

describe('OrderCartListComponent', () => {
  let component: OrderCartListComponent;
  let fixture: ComponentFixture<OrderCartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCartListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
