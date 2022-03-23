import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://localhost:8080/products";

  constructor(private http:HttpClient) { }

  getProductsList():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}`);
  }

  createProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`${this.url}`,product);
}
getProductById(productId:number):Observable<Product>{
  return this.http.get<Product>(`${this.url}/${productId}`);
}

deleteProductById(id:number):Observable<Product>{
  return this.http.delete<Product>(`${this.url}/${id}`);
}
}