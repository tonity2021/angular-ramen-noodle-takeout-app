import { Component, OnInit } from '@angular/core';
import { OrdersComponent } from './orders/orders.component';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ramen-takeout-app';

  constructor(private orderService: OrderService) {}
}
