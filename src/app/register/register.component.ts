import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
 // fileUpload: File = null
 userTypes: any
  myRecaptcha: boolean= false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
    
) {  }

  ngOnInit() {
    this.userService.getUserType()
    .subscribe(
        data => {
            console.log(data);
            this.userTypes = data;
            console.log(this.userTypes)

        }
    )
    this.registerForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        msisdn:['',[Validators.required,Validators.pattern('^[0-9]{10,10}$')]],
        email: ['', [Validators.required, Validators.email]],
        userType:['',[Validators.required]],
        password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$')]],
        recaptchaReactive:['',Validators.required]
    });
}
// get f() { return this.registerForm.controls; }
// fileupload(file:FileList){

//   this.fileUpload=file.item(0);

// }
onScriptLoad() {
  console.log('Google reCAPTCHA loaded and is ready for use!')
}

onScriptError() {
  console.log('Something went long when loading the Google reCAPTCHA')
}
 
onSubmit() {

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      alert('Enter valid details')
        return;
    }
    
    // this.registerForm.value.ImageName=this.fileUpload
  //   console.log(this.registerForm.value)
   // this.loading = true;
    this.userService.register(this.registerForm.value)
        .subscribe(
            data => {     
             console.log(data)           
            this.router.navigate(['/login']);
            console.log('success');
            },
            error => {
                alert('Some error occured,Try again!');
            });
}

}
