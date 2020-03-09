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
  
  get userName()
  {
    return this.loginForm.get('userName');
  }
  
  get password()
  {
    return this.loginForm.get('password');
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
