import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './componants/category/category.component';
import { MenuComponent } from './componants/menu/menu.component';
import { OrderSumaryComponent } from './componants/order-sumary/order-sumary.component';
import { ProductComponent } from './componants/product/product.component';
import { TableComponent } from './componants/table/table.component';

const routes: Routes = [
  {path:"",component:TableComponent},
  {path:"products", component:ProductComponent},
  {path:"products/orders", component:OrderSumaryComponent},
  {path:"tables", component:TableComponent},
  {path:"tables/menu", component:MenuComponent},
  {path:"menu", component:MenuComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
