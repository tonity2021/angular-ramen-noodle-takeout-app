import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
const routes: Routes = [
  
  // {path: 'list-orders', redirectTo: '/', pathMatch: 'full'},
  {path: 'order', component: OrdersComponent},
];


//check order path above
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
