import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string ="http://localhost:8080";
  private db: any;
  
   options = {
   // headers: { 'Content-Type': 'multipart/form-data' }
  };
  constructor(private http:HttpClient ) { 
    
  }
 
 
  
   register(user) {   
      const formData: FormData= new FormData();
        formData.set('FirstName',user.FirstName);
        formData.set('LastName',user.LastName);
        formData.set('Email',user.Email);
        formData.set('Password',user.Password);
        formData.set('userType',user.UserType)
        formData.set('msisdn',user.msisdn);
        console.log(user);
        console.log(formData)
        return this.http.post(this.apiUrl+'/adduser', user);  
}
  getUserType(){
    return this.http.get(this.apiUrl+'/getusertype')
  }
}
