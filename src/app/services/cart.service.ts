import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiUrl: string ="http://localhost:8080";
  constructor(private http : HttpClient) { }

  addToCart(cart){
    return this.http.post(this.apiUrl+"/addtocart",cart);
  }
}
