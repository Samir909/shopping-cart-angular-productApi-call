import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { ProductDetailService } from 'src/app/service/product-detail.service';
import { FormGroup, FormControl , FormBuilder} from '@angular/forms';
import { ProductDetail } from 'src/app/model/product-detail.model';


@Component({
  selector: 'app-product-detail-form',
  templateUrl: './product-detail-form.component.html',
  styleUrls: ['./product-detail-form.component.css']
})
export class ProductDetailFormComponent implements OnInit {

  exform : FormGroup;
  productDetailObj: ProductDetail = new ProductDetail();

  constructor(public service : ProductDetailService,
              private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  
    this.exform=this.formbuilder.group({
      productTitle:[''],
      ProductDescription:[''],
      productPicture:[''],
      ProductPrice:[''],
      avatar:[null]
    })
    this.exform= new FormGroup({
      'productTitle' : new FormControl(null,Validators.required),
      'ProductDescription' : new FormControl(null,Validators.required),
      'productPicture' : new FormControl(null,Validators.required),
      'ProductPrice' : new FormControl(null,Validators.required),

    });
  }
  

  addProduct(){
    this.productDetailObj.ProductTitle=this.exform.value.productTitle;
    this.productDetailObj.ProductDescription=this.exform.value.ProductDescription;
    this.productDetailObj.productID=0;
    this.productDetailObj.ProductPrice=this.exform.value.ProductPrice;
    this.productDetailObj.productPicture=this.exform.value.productPicture;

    console.log(this.productDetailObj.ProductTitle=this.exform.value.productTitle);

    this.service.postProductDetail(this.productDetailObj)
    .subscribe(res=>{
      console.log(res);
      alert("Product Details added successfully");
    },
    err=>{
      alert("Something is wrong")
    })
  }

  // clicksub(){
  //   console.log(this.exform.value)
  //   this.exform.reset();
  // }

  // onSubmit(form:NgForm){
  //   this.service.postProductDetail().subscribe(
  //     res=>{
        
  //     },
  //     err=>{console.log(err); }
  //  );
  //   //console.log(form);
  // }

}
