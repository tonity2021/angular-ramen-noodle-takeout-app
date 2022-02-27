// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'ramen-takeout-app';
// }

import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Order } from './Order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'ramen-takeout-app';
  orders: Order[];

  constructor(private router: Router, private orderService: OrderService) {}
  getOrders() {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  addOrder(): void {
    this.router.navigate(['add-order']).then((e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((value) => {
      this.getOrders();
    });
  }
}
