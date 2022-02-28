import { Component, OnInit } from '@angular/core';
import { Order } from './order';
import { OrderFormComponent } from './order-form/order-form.component';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {

  title = 'ramen-takeout-app';

  constructor( private orderService: OrderService) {

  }
 

}