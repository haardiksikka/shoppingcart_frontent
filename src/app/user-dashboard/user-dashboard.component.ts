import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  allProducts : any
  constructor(private productService : ProductService, private router: Router) { }

  ngOnInit() {
      this.productService.getAllProduct()
      .subscribe((data)=>{
        this.allProducts = data;
      },
      (error)=>{
        alert("failed to fetch products");
      })
  }

  getProduct(id){
    this.router.navigate(["/getproduct",id])
    console.log(id);
  }

}
