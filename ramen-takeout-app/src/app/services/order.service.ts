import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
    private apiServerUrl = '';

  constructor(private http: HttpClient) { }

  public getOrders(): Observable<any> {
      return this.http.get<any>(`${this.apiServerUrl}/order/all`)
  }
}
