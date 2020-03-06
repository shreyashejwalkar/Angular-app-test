import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit
 {
  imageURL: string;
  defaultImage: string = "assets/images/profile-icon.png";
  uploadForm: FormGroup;
  constructor(public fb: FormBuilder) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    })
  }

    ngOnInit()
    {
      this.uploadForm = this.fb.group({
        username : ['', [Validators.required, Validators.minLength(3)]],
        email : [''],
        subscribe : [false],
        password: [''],
          confirmPassword: [''],
      
     }


    // Image Preview
   /* showPreview(event) 
    {
      const file = (event.target as HTMLInputElement).files[0];
      this.uploadForm.patchValue({
        avatar: file
      });
      this.uploadForm.get('avatar').updateValueAndValidity()
  
      // File Preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
      }
      reader.readAsDataURL(file)
    }
*/
    onSubmit()
  {
    console.log(this.uploadForm.value);
  }
}
