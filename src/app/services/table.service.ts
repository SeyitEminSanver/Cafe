import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { Table } from '../models/table';

@Injectable({
  providedIn: 'root'
})
export class TableService {
 
  apiUrl = 'https://localhost:44323/api/';

  constructor(private httpClient: HttpClient) { }

  getTable():Observable<ListResponseModel<Table>>{
    let newPath=this.apiUrl+"Table/GetAll";
    return this.httpClient.get<ListResponseModel<Table>>(newPath);
  }
}
