import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  { path: 'register', component: RegisterComponent },
  {path:'login' ,component:LoginComponent},
  {path:'vendor', component:VendorDashboardComponent},
  {path:'addproduct', component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
