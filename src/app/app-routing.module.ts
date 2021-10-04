import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { FakeApiCRUDComponent } from './component/fake-api-crud/fake-api-crud.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products', component : ProductsComponent},
  {path:'cart', component : CartComponent},
  {path:'productDetails', component : ProductDetailsComponent},
  {path:'fakeAPI', component : FakeApiCRUDComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
