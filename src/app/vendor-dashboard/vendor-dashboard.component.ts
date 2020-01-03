import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();   
  }
  getProducts(){
    this.productService.getProductByVendorId(localStorage.getItem('user'))
    .subscribe((data)=>{
      this.products=data;
      console.log(this.products);
    },
    (error)=>{
      console.log(error);
      alert("request failed at server side");
    }
    )    
  }

}
