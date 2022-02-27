// import { Component } from '@angular/core';
//   title = 'ramen-takeout-app';
// }

import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Order } from './order';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public orders: Order[];
  title = 'ramen-takeout-app';
  // orders: Order[];

  constructor( private orderService: OrderService) {
    this.orders = [];
  }

  ngOnInit(): void {
    this.getOrders();
      
  }
public getOrders(): void {
  this.orderService.getAllOrders().subscribe(
    (response: Order[]) => {
    this.orders = response;
},
    (error: HttpErrorResponse) => {
    alert(error.message);
    }
  );
}


  // getOrders() {
  //   this.orderService.getOrders().subscribe((data) => {
  //     this.orders = data;
  //   });
  // }

  // addOrder(): void {
  //   this.router.navigate(['add-order']).then((e) => {
  //     if (e) {
  //       console.log('Navigation is successful!');
  //     } else {
  //       console.log('Navigation has failed!');
  //     }
  //   });
  // }

  // ngOnInit(): void {
  //   this.router.events.subscribe((value) => {
  //     this.getOrders();
  //   });
  // }
}
