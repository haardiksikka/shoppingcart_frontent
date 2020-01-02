import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl: string = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get(this.apiUrl+'/getcategories');
  }

  
}
