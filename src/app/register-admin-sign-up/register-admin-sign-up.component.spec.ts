import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdminSignUpComponent } from './register-admin-sign-up.component';

describe('RegisterAdminSignUpComponent', () => {
  let component: RegisterAdminSignUpComponent;
  let fixture: ComponentFixture<RegisterAdminSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAdminSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAdminSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
