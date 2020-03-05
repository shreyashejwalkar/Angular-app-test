import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaLoginComponent } from './captcha-login.component';

describe('CaptchaLoginComponent', () => {
  let component: CaptchaLoginComponent;
  let fixture: ComponentFixture<CaptchaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptchaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptchaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
