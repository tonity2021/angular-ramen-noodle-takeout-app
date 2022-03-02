// import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { CommonModule } from '@angular/common';
// import { AppComponent } from './app.component';
// import { OrderService } from './order.service';
// import { RouterModule } from '@angular/router';
// import { OrdersComponent } from './orders/orders.component';

// @NgModule({
//   declarations: [],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     FormsModule,
//     ReactiveFormsModule,
//     AppRoutingModule,
//     CommonModule,
//     RouterModule,

//   ],
//   providers: [OrderService],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';

import { AppComponent } from './app.component';
import { CancelComponent } from './cancel/cancel.component';

@NgModule({
  declarations: [OrdersComponent, AppComponent, CancelComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
