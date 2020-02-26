import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  { path: 'register', component: RegisterComponent },
  {path:'login' ,component:LoginComponent},
  {path:'vendor', component:VendorDashboardComponent},
  {path:'user', component:UserDashboardComponent},
  {path:'addproduct', component:AddProductComponent},
  {path:'getproduct/:id', component:ProductComponent},
  {path:'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
