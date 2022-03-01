import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './order.service';
import { OrdersListComponent } from './orders-list/orders-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrdersListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,

  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
