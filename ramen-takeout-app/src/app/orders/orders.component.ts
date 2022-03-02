import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  projectForm: any;
  orderId: number = 0;
  order: any;
  name: any;
  submitted = false;

  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value;
  }

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.projectForm = this.formBuilder.group({
      id: [''],
      name: [''],
      specialRequest: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.warn('Your order has been submitted', this.projectForm.value);
    this.http.post(`/api/order/`, this.projectForm.value).subscribe((data) => {
      return data;
    });
    this.projectForm.reset();
    this.submitted = true;
  }
}
