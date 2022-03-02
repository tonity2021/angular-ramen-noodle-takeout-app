import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'cancel-orders',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css'],
})
export class CancelComponent implements OnInit {
  orders: any;
  response: any;
  id: any;

  constructor(private http: HttpClient, router: Router) {}
  //delete by order Id
  ngOnInit(): void {
    this.http.get(`/api/order/${this.id}`).subscribe((response) => {
      console.log(response);
      this.orders = response;
    });
  }
}
