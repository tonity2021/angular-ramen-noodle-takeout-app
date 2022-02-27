import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './Order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiServerUrl}/order/add`, order);
  }
  //tell the client where to make the request and the type of req to make
  //get request
  public getOrders(): Observable<Order[]> {
    return this.http.get<any>(`${this.apiServerUrl}/order/all`);
  }
}
