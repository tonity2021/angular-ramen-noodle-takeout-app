import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderFormComponent } from './order-form/order-form.component';

const routes: Routes = [
  
  // {path: 'list-orders', redirectTo: '/', pathMatch: 'full'},
  {path: 'order', component: OrderFormComponent},
  // {path: '', component: OrdersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
