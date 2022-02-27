import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}
//check all requests
  //below: tells the client where to make the request and the type of req to make get request
  public createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiServerUrl}/order/add`, order);
  }
  // public getOrders(orderId: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiServerUrl}/order/delete/${orderId}`);
  // }
  public getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiServerUrl}/order/all`);
  }
  //check this below
  public updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiServerUrl}/order/update/`, order);
  }
  public deleteOrder(orderId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/order/delete/${orderId}`);
  }
}
