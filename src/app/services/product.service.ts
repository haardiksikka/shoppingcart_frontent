import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string ="http://localhost:8080";
  constructor(
    private http: HttpClient,
   
  ) { }
  
  addProduct(product){
    var myProduct = new Product(); 
    myProduct.name=product.name;
    myProduct.price=product.price;
    myProduct.quantity=product.quantity;
    myProduct.vendorId=localStorage.getItem('user');
    return this.http.post(this.apiUrl+"/addproduct",myProduct)
  }
  getProductByVendorId(id){
      return this.http.get(this.apiUrl+`/getproduct/${id}`);
  }

  getAllProduct(){
    return this.http.get(this.apiUrl+'/getallproducts');
  }

  getProductById(id){
    return this.http.get(this.apiUrl+`/product/${id}`);
  }
}
