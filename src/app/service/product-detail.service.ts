import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductDetail } from '../model/product-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private http:HttpClient) { }

  readonly baseURL='https://localhost:44315/api/ProductDetail'
  list: ProductDetail[];
  // formData: ProductDetail =new ProductDetail();

  // postProductDetail(){
  //  return this.http.post(this.baseURL,this.formData);
  // }
  postProductDetail(data :any){

   console.log("from service"+ Object.values(data));

    return this.http.post<any>("https://localhost:44315/api/ProductDetail",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


getProductDeails(){
  return this.http.get<any>(this.baseURL)
  .pipe(map((res:any)=>{
    return res;
  }))
}

updateProductDetails(data:any,id:number){

  return this.http.put<any>("https://localhost:44315/api/ProductDetail"+id,data)
  .pipe(map((res:any)=>{
    return res;
  }))
}

deleteProductDetails(id:number){
  return this.http.delete<any>(`${this.baseURL}/${id}`)
  .pipe(map((res:any)=>{
    return res;
  }))
}

}
