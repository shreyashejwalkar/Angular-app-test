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
      firstName : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('^[a-zA-Z]*$')]],
      lastName : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10),Validators.pattern('^[a-zA-Z]*$')]],
      email : ['', [Validators.required, Validators.pattern('^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$')]],
      userName : ['', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\.]{5,10}$')]],
      password: ['', [Validators.required,Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]],
      confirmPassword: ['',[Validators.required]],
      phoneNumber:['', [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      stateName:['', [Validators.required]],
      cityName: ['', [Validators.required]],
      avatar: [null],
      name: [''],
    },{validator : PasswordValidator});
    
  }
     public handleError = ( errorName: string) => {
      return this.uploadForm.get('state').hasError(errorName);
    }

    changeCountry(count) {
      this.cities = this.stateList.find(con => con.name == count).cities;
    }
    get userName()
    {
      return this.uploadForm.get('userName');
    }

     get firstName()
     {
       return this.uploadForm.get('firstName');
     }

     get lastName()
     {
       return this.uploadForm.get('lastName');
     }

     get email()
     {
       return this.uploadForm.get('email');
     }

     get password()
     {
       return this.uploadForm.get('password');
     }

     get confirmPassword()
     {
       return this.uploadForm.get('confirmPassword');
     }
     get phoneNumber()
     {
       return this.uploadForm.get('phoneNumber');
     }

    get cityName() 
    {
      return this.uploadForm.get('cityName');
    }
    get stateName() 
    {
      return this.uploadForm.get('stateName');
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
        alert(JSON.stringify(this.uploadForm.value))
      }
    }
}
