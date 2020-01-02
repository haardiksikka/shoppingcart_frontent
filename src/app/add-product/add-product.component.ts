import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  categories: any;
  addProductForm : FormGroup
  
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
    ) { }
  
  ngOnInit() {
    this.getCategories()
    this.addProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required,Validators.pattern('^[0-9]{0,10}$')]],
      quantity:['',[Validators.required,Validators.pattern('^[0-9]{0,10}$')]],
      category: ['', [Validators.required]],
  });
  }

  
  getCategories(){
      this.categoryService.getCategories()
      .subscribe(
        data => {
          this.categories = data;
        }
      )
  }
  onSubmit(){
    alert("clicked")
    if(this.addProductForm.invalid){
      alert("Invalid form values")
    }
    else{

      this.productService.addProduct(this.addProductForm.value)
      .subscribe(data => {
        alert("success")
        console.log(data)
      },
      (error)=>{
        alert("Server side failure")
        console.log(error)
      }
      )
     

    }
  }

}
