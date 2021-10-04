import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductDetailFormComponent } from './component/product-details/product-detail-form/product-detail-form.component';
import { FakeApiCRUDComponent } from './component/fake-api-crud/fake-api-crud.component';
import * as $ from "jquery";
import { ModalModule } from 'ngb-modal';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductDetailFormComponent,
    FakeApiCRUDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
