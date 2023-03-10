import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  apiUrl = 'https://localhost:44323/api/';

  constructor(private httpClient: HttpClient) { }
 
  getProducts():Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"Product/GetAll"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"Product/GetByCategory?CategoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
