import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from 'src/app/service/product-detail.service';
import { ProductDetailFormComponent } from './product-detail-form/product-detail-form.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productData !:any;

  constructor(public service : ProductDetailService) { }

  ngOnInit(): void {
    this.getAllProductDetails();
   
  }

  getAllProductDetails(){
    this.service.getProductDeails()
    .subscribe(res=>{
      this.productData = res;
    })
  }

  deleteProduct(pd: any){
    this.service.deleteProductDetails(pd.productId)
    .subscribe(res=>{
      alert("Product Deleted");
      this.getAllProductDetails();
    })
  }
  
  populateForm(pd:any){
   

  }
  onEdit(row:any){
    
  }

}
