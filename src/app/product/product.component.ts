import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { Cart } from '../model/cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product : any;
 // cart: Cart
  constructor(private route: ActivatedRoute,private cartService : CartService,private productService: ProductService) { }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.getProduct(id)
  }
  getProduct(id){
    this.productService.getProductById(id)
    .subscribe((data)=>{
      this.product = data
     
    },
    (error)=>{
      console.log(error)
      alert("Failed to fetch product")
    })
  }

  addToCart(id){
    var cart = new Cart();
    cart.productId = this.product.id;
    cart.userId=Number(localStorage.getItem('user'));
    this.cartService.addToCart(cart)
    .subscribe((data)=>{
      alert("success")
    },
    (error)=>{
      alert("Failed")
      console.log(error)
    })
  }

}
