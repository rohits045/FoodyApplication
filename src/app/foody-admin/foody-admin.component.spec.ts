import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodyAdminComponent } from './foody-admin.component';

describe('FoodyAdminComponent', () => {
  let component: FoodyAdminComponent;
  let fixture: ComponentFixture<FoodyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodyAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
