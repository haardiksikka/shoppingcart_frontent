import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiUrl:string ="http://localhost:8080";
  constructor(private http:HttpClient) { }
  login(user){
    return this.http.post(this.apiUrl+'/login',user)
  }
}
