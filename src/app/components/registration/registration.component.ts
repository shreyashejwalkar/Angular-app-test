import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/password.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit
 {
  isSubmitted = false;
  uploadForm: FormGroup;
  defaultImage: string = "assets/images/profile-icon.png";
  imageURL: string = this.defaultImage;
 
  stateList: Array<any> = [
    { name: 'Gujarat', cities: ['Ahmedabad', 'Amreli district', 'Anand'] },
    { name: 'Maharashtra', cities: ['Ahmednagar', 'Mumbai', 'Nashik', 'Nagpur'] },
    { name: 'Kerala', cities: ['Alappuzha','Ernakulam'] },
    { name: 'Punjab', cities: ['Amritsar','Barnala','Firozpur'] },
    { name: 'Rajasthan', cities: ['Ajmer','Alwar','Bikaner'] },
  ];
  cities: Array<any>;
  
  constructor(public fb: FormBuilder) { }

  ngOnInit()
  {
    this.uploadForm = this.fb.group({
      firstName : ['', [Validators.required,Validators.pattern('^([a-zA-Z]{3,10})$')]],
      lastName : ['', [Validators.required,Validators.pattern('^([a-zA-Z]{3,10})$')]],
      email : ['', [Validators.required, Validators.pattern('^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$')]],
      userName : ['', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\.]{5,10}$')]],
      password: ['', [Validators.required,Validators.pattern('(?=.*\[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,10}')]],
      confirmPassword: ['',[Validators.required]],
      phoneNumber:['', [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      stateName:['', [Validators.required]],
      cityName: ['', [Validators.required]],
      avatar: [null],
      name: [''],
    },{validator : PasswordValidator});
    
  }

    changeCountry(count) 
    {
      this.cities = this.stateList.find(con => con.name == count).cities;
    }
    
    property(propertyName : string)
    {
      return this.uploadForm.get(propertyName);
    }

    get userName()
    {
      return this.property('userName');
    }

     get firstName()
     {
       return this.property('firstName');
     }

     get lastName()
     {
       return this.property('lastName');
     }

     get email()
     {
       return this.property('email');
     }

     get password()
     {
       return this.property('password');
     }

     get confirmPassword()
     {
       return this.property('confirmPassword');
     }
     get phoneNumber()
     {
       return this.property('phoneNumber');
     }

    get cityName() 
    {
      return this.property('cityName');
    }
    get stateName() 
    {
      return this.property('stateName');
    }

    // Image Preview
    showPreview(event) 
    {
      const file = (event.target as HTMLInputElement).files[0];
      this.uploadForm.patchValue({ avatar: file });
      this.uploadForm.get('avatar').updateValueAndValidity();

      // File Preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
      }
      reader.readAsDataURL(file)
    }
   
    onSubmit()
    {
      this.isSubmitted = true;
      if (!this.uploadForm.valid)
      {
          return false;
      } 
      else
      {
        alert('Form submitted - fields passed validation')
      }
      this.uploadForm.reset();
    }
}
