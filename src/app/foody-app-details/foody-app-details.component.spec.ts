import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodyAppDetailsComponent } from './foody-app-details.component';

describe('FoodyAppDetailsComponent', () => {
  let component: FoodyAppDetailsComponent;
  let fixture: ComponentFixture<FoodyAppDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodyAppDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodyAppDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
