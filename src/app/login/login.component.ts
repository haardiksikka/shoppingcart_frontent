import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  
  returnUrl: string;
  result :any
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authentication: AuthenticationService,
    ) 
    {}

ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z0-9])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z0-9\\d@$!%*#?&]{8,}$')]],
    });
   // this.authenticationService.logout();
  //  if(localStorage.getItem('currentUser')){
  //     this.loggedIn();
  //  }
}

loggedIn(){
    //const token=JSON.parse(localStorage.getItem('currentUser'));
   // if(token.Role==="Approver"){
      //localStorage.setItem('currentUser', this.result);

      //console.log(localStorage.getItem('currentUser'))

 //   this.router.navigate(['approver']);
    }
//     else if(token.Role==="Volunteer" && token.Status==="Accepted"){
//      // localStorage.setItem('currentUser',JSON.stringify(this.result));
      
//       //  console.log(localStorage.getItem('currentUser'))
//       //  console.log(JSON.parse(localStorage.getItem('currentUser')))
//       this.router.navigate(['dashboard'])
//     }
//     else if(token.Role==="Volunteer" && token.Status==="Pending"){
//       //localStorage.setItem('currentUser', this.result);
//       this.router.navigate(['requestpending']);
//     }
//     else{
//       //localStorage.setItem('currentUser', this.result);
//       this.router.navigate(['requestdeclined']);
//     }

// }
get f() { return this.loginForm.controls; }
// getevent(data){
//   console.log(data);
// }
onSubmit() {
 
  console.log(this.loginForm.value)
  if (this.loginForm.invalid) {
    console.log(this.loginForm)
    alert('Enter valid email and password')
      return;
  }

  
   this.authentication.login(this.loginForm.value)    
      .subscribe(
          (data) => {
            console.log(data)
            if(data){
              this.result=data;
              //this.router.navigate([this.returnUrl]);
              console.log(this.result)
              
              // if(this.result.Role==="Approver"){
              //   localStorage.setItem('currentUser', JSON.stringify(this.result));

              //   console.log(localStorage.getItem('currentUser'))

              // this.router.navigate(['approver']);
              // }
              // else if(this.result.Role==="Volunteer" && this.result.Status==="Accepted"){
              //   localStorage.setItem('currentUser',JSON.stringify(this.result));
                
              //     console.log(localStorage.getItem('currentUser'))
              //     console.log(JSON.parse(localStorage.getItem('currentUser')))
              //   this.router.navigate(['dashboard'])
              // }
              // else if(this.result.Role==="Volunteer" && this.result.Status==="Pending"){
              //   localStorage.setItem('currentUser',JSON.stringify(this.result));
              //   this.router.navigate(['requestpending']);
              // }
              // else{
              //   localStorage.setItem('currentUser', JSON.stringify(this.result));
              //   this.router.navigate(['requestdeclined']);
              // }
              if(this.result==null){
                alert("invalid login credentials")
              }
              else{
                localStorage.setItem('user',this.result.id);
                if(this.result.userType==1){
                  //redirect to admin dashboard
                }
                else if(this.result.userType==2){
                  this.router.navigate(['vendor']);
                }
                else{
                  //navigate to user dashboard
                }
              }
            }
             else{
              alert("invalid login credentials")
             } 
          },
          error => {
              
              alert("UserName or Password is Wrong,Please Try Again!")
             
          });
}

}
