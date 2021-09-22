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

  selectedFile:any =null;

  exform : FormGroup;
  productDetailObj: ProductDetail = new ProductDetail();

  constructor(public service : ProductDetailService,
              private formbuilder: FormBuilder) { }

  onFileSelector(event:any){
    this.selectedFile= <File>event.target.files[0];
   }

  ngOnInit(): void {
  
    this.exform=this.formbuilder.group({
      productTitle:['',[Validators.required]],
      ProductDescription:['',[Validators.required]],
      productPicture:['',[Validators.required]],
      ProductPrice:['',[Validators.required]]
    })
    // this.exform= new FormGroup({
    //   'productTitle' : new FormControl(null,Validators.required),
    //   'ProductDescription' : new FormControl(null,Validators.required),
    //   'productPicture' : new FormControl(null,Validators.required),
    //   'ProductPrice' : new FormControl(null,Validators.required),

    // });
  }
  


  addProduct(){
    // this.productDetailObj = this.exform.value;
    // this.productDetailObj = Object.assign(this.productDetailObj,this.exform.value);
    const fd=new FormData();
    fd.append('productPicture',this.selectedFile,this.selectedFile.name);
    fd.append('productTitle',this.exform.value.productTitle);
    fd.append('ProductDescription',this.exform.value.ProductDescription);
    fd.append('ProductPrice',this.exform.value.ProductPrice);

    

    this.service.postProductDetail(fd)
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
