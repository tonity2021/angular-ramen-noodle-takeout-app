import { Component, OnInit } from '@angular/core';
import { OrdersComponent } from './orders/orders.component';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ramen-noodle-takeout-app';

  constructor() {}
}
