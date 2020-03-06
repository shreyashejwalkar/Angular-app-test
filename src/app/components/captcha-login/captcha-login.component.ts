import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-captcha-login',
  templateUrl: './captcha-login.component.html',
  styleUrls: ['./captcha-login.component.css']
})
export class CaptchaLoginComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);}

}
