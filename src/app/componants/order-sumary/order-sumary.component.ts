import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-order-sumary',
  templateUrl: './order-sumary.component.html',
  styleUrls: ['./order-sumary.component.css']
})
export class OrderSumaryComponent {
  
  orders:Order[]=[];
  
  
  constructor(){}



  ngOnInit():void{

  }
}
