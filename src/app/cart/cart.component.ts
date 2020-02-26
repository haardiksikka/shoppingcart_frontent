import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ConstantPool } from '@angular/compiler';
import { Cart } from '../model/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart : any
  constructor(private cartService: CartService, private router : Router) { }

  ngOnInit() {
    this.productsInCart()
  }
  productsInCart(){
    var id = Number (localStorage.getItem('user'));
    console.log(id);
    this.cartService.productsInCart(id)
    .subscribe((data)=>{
      console.log("entering..")
        this.cart = data;
        console.log(data)
    },
    (error)=>{
      console.log(error);
      alert('Failed to Fetch products');
    })
  }
  addToCart(id){
    var cart = new Cart();
    cart.productId = id;
    cart.userId=Number(localStorage.getItem('user'));
    this.cartService.addToCart(cart)
    .subscribe((data)=>{
   
      alert("success")
      this.productsInCart();
    },
    (error)=>{
      alert("Failed")
      console.log(error)
    })
  }
  removeFromCart(id){
    var cart = new Cart();
    cart.productId = id;
    cart.userId=Number(localStorage.getItem('user'));
    this.cartService.removeFromCart(cart)
    .subscribe((data)=>{
   
      alert("success")
      this.productsInCart();
    },
    (error)=>{
      alert("Failed")
      console.log(error)
    })
  }

  checkout(){
   // var id = Number(localStorage.getItem('user'));
      this.router.navigate(['checkout']);
  }

}
