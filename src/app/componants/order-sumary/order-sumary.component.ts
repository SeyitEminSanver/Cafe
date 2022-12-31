import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-order-sumary',
  templateUrl: './order-sumary.component.html',
  styleUrls: ['./order-sumary.component.css']
})
export class OrderSumaryComponent {
  
  orders:Order[]=[];
  
  constructor(private orderService:OrderServiceService){}

 

  ngOnInit():void{
     this.getOrderDetail();
  }
  
  getOrderDetail() {
    this.orderService.getOrderDetails().subscribe((response) => {
      this.orders=response.data
    });
  }
}
