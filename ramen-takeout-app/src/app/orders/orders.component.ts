import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../order.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orderId: number = 1;
  orderSize: any;
  specialRequest?: any;
  foodDescription: any;
  addToFavorites?: any;
  name: any;
  constructor(private service: OrderService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params) => {
      this.orderId = params['orderId'];
    });

    this.getAllOrders();
  }

  deleteOrder(orderId: number) {
    this.service.deleteOrder(this.orderId).subscribe((response: any) => {});
  }

  getAllOrders() {
    this.service.getAllOrders().subscribe((response) => {
      this.foodDescription = response;
    });
  }
  createOrder() {
    this.service
      .createOrder(
        this.orderSize,
        this.specialRequest,
        this.foodDescription,
        this.addToFavorites,
        this.name
      )
      .subscribe({
        next: (response: any) => {
          this.name();
        },
      });
  }


}

