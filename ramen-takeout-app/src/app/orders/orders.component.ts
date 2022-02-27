import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private orderService: OrderService) {
  }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      orderSize: ['', Validators.required],
      specialRequest: ['', Validators.required]
    });

  }

  onSubmit() {
    this.orderService.addOrder(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-books']);
      });
  }

}
//   constructor() { }

//   ngOnInit(): void {
//   }

// }
