import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  apiUrl='https://localhost:44323/api/Order/GetOrderDetail'
  
  constructor(private httpClient:HttpClient) { }
 
  getOrderDetails():Observable<ListResponseModel<Order>>{
   
    return this.httpClient.get<ListResponseModel<Order>>(this.apiUrl);

  }
}
// apiUrl = 'https://localhost:44323/api/Category/GetAll';
  
// constructor(private httpClient: HttpClient) { }

// getCategories():Observable<ListResponseModel<Category>> {
//   return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
// }

