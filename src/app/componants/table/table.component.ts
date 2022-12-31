import { Component } from '@angular/core';
import { Table } from 'src/app/models/table';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  tables:Table[]=[];
  constructor(
    private tableService:TableService
  ){}
  ngOnInit(): void {
    this.getTable();
  }

  getTable(){
    this.tableService.getTable().subscribe(Response=>{
      this.tables=Response.data;
    });
  }
}
// getProducts() {
//   this.productService.getProducts().subscribe((response) => {
//     this.products = response.data;
//     this.dataLoaded = true;
//   });
