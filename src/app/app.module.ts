import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecaptchaModule } from 'angular-google-recaptcha';
import { LoginComponent } from './login/login.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorNavbarComponent } from './vendor-navbar/vendor-navbar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    VendorDashboardComponent,
    VendorNavbarComponent,
    AddProductComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    ProductComponent,
    CartComponent,
    WishlistComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   // ChartsModule,
    RecaptchaModule.forRoot(
      {
        siteKey:'6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
