import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSumaryComponent } from './componants/order-sumary/order-sumary.component';
import { ProductComponent } from './componants/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},
  {path:"products", component:ProductComponent},
  {path:"products/orders", component:OrderSumaryComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
