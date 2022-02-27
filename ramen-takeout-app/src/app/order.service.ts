import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
    private apiServerUrl = '';

  constructor(private http: HttpClient) { }

  
  public getOrders(): Observable<Order[]> {
      return this.http.get<Order[]>(`${this.apiServerUrl}/order/all`)
  }
}
