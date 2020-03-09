import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-captcha-login',
  templateUrl: './captcha-login.component.html',
  styleUrls: ['./captcha-login.component.css']
})
export class CaptchaLoginComponent implements OnInit
{
  
  loginForm: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit() 
  {
    this.loginForm = this.fb.group({
      userName : ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  property(propertyName : string)
  {
    return this.loginForm.get(propertyName);
  }

  get userName()
  {
    return this.property('userName');
  }
  
  get password()
  {
    return this.property('password');
  }

  resolved(captchaResponse: string)
  {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  onSubmit()
  {
    console.log(this.loginForm.value);
  }
}
