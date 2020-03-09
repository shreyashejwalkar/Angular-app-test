import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.css']
})
export class SimpleLoginComponent implements OnInit 
{
  loginForm: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit()
  {
    this.loginForm = this.fb.group({
      userName : ['', Validators.required],
      password: ['', Validators.required],
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

  onSubmit()
  {
    console.log(this.loginForm.value);
  
  }
}
