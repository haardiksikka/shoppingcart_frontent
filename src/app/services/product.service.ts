import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string ="http://localhost:8080";
  constructor(
    private http: HttpClient
  ) { }
  
  addProduct(product){
    return this.http.post(this.apiUrl+"/addproduct",product)
  }
}
