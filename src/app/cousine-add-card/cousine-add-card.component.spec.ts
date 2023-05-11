import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CousineAddCardComponent } from './cousine-add-card.component';

describe('CousineAddCardComponent', () => {
  let component: CousineAddCardComponent;
  let fixture: ComponentFixture<CousineAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CousineAddCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CousineAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
