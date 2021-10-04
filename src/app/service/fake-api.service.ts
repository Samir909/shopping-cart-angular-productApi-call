import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductDetail } from '../model/product-detail.model';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor(private http:HttpClient) { }



  postProductDetail(data :any){

    console.log("from service"+ Object.values(data));
  
     return this.http.post<any>("https://fakestoreapi.com/products",data)
     .pipe(map((res:any)=>{
       return res;
     }))
   }

   getProductDeails(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteProductDetails(id:any){
    var baseURL='https://fakestoreapi.com/products'
    return this.http.delete<any>(`${baseURL}/${id}`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateProductDetails(data:any,id:number){
    var baseURL= 'https://fakestoreapi.com/products/'
    return this.http.put<any>(`${baseURL}/${id}`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}

