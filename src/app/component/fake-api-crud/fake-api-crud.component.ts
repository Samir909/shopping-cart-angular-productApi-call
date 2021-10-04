import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { ProductDetailService } from 'src/app/service/product-detail.service';
import { FormGroup, FormControl , FormBuilder} from '@angular/forms';
import { ProductDetail } from 'src/app/model/product-detail.model';
import { FakeApiService } from 'src/app/service/fake-api.service';



@Component({
  selector: 'app-fake-api-crud',
  templateUrl: './fake-api-crud.component.html',
  styleUrls: ['./fake-api-crud.component.css']
})
export class FakeApiCRUDComponent implements OnInit {

   buttonShow:number =0;
  productData !:any;
  selectedFile:any =null;
  exform : FormGroup;

  productDetailObj: ProductDetail = new ProductDetail();

  onFileSelector(event:any){
    this.selectedFile= <File>event.target.files[0];
   }

  constructor(public service : FakeApiService,
              private formbuilder: FormBuilder
             ) { }

  ngOnInit(): void {
    this.exform=this.formbuilder.group({
      productTitle:['',[Validators.required]],
      ProductDescription:['',[Validators.required]],
      productPicture:['',[Validators.required]],
      ProductPrice:['',[Validators.required]]
    })
    this.getAllProductDetails();
  }

  addProduct(){
    this.productDetailObj.ProductTitle=this.exform.value.ProductTitle;
    this.productDetailObj.ProductDescription=this.exform.value.ProductDescription;
    this.productDetailObj.category='electronic';
    this.productDetailObj.productPicture=this.exform.value.productPicture;
    this.productDetailObj.ProductPrice=this.exform.value.ProductPrice;

    this.service.postProductDetail(this.productDetailObj)
    .subscribe(res=>{
      console.log(res);
      alert("Product Details added successfully");
      this.exform.reset();
    },
    err=>{
      alert("Something is wrong")
    })
  }

  getAllProductDetails(){
    this.service.getProductDeails()
    .subscribe(res=>{
      this.productData = res;
    })
  }

  deleteProduct(pd: any){
    this.service.deleteProductDetails(pd.id)
    .subscribe(res=>{
      alert("Product Deleted");
      this.getAllProductDetails();
    })
  }

onEdit(pd:any){
  this.buttonShow=1
  this.productDetailObj.productID=pd.id;
  this.exform.controls['productTitle'].setValue(pd.title);
  this.exform.controls['ProductDescription'].setValue(pd.description);
  this.exform.controls['ProductPrice'].setValue(pd.price);
  this.exform.controls['productPicture'].setValue(pd.image);

}
updateProductDetail(){
  this.productDetailObj.ProductTitle=this.exform.value.ProductTitle;
  this.productDetailObj.ProductDescription=this.exform.value.ProductDescription;
  this.productDetailObj.category='electronic';
  this.productDetailObj.productPicture=this.exform.value.productPicture;
  this.productDetailObj.ProductPrice=this.exform.value.ProductPrice;

  this.service.updateProductDetails(this.productDetailObj,this.productDetailObj.productID)
  .subscribe(res=>{
    alert("Updated successfully")
    let ref=document.getElementById('edit')
    ref?.click();
    this.exform.reset();
    this.getAllProductDetails();
  })
  
}
 
}
