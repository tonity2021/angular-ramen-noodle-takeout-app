import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
const routes: Routes = [
  
  {path: 'list-orders', redirectTo: '/', pathMatch: 'full'},
  {path: 'order', component: OrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
