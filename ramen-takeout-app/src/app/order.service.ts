import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  //create a new customer order
  createOrder(
    name: string,
    orderSize: string,
    specialRequest: string,
    foodDescription: string,
    addToFavorites: boolean
  ) {
    return this.http.post('/api/order/', {
      name: name,
      orderSize: orderSize,
      specialRequest: specialRequest,
      foodDescription: foodDescription,
      addToFavorites: addToFavorites,
    });
  }
  //gets all customer orders in the system
  getAllOrders() {
    return this.http.get('/api/orders/');
  }
  //get an order by Id
  getOrder(orderId: number) {
    return this.http.get('/api/order/ + orderId');
  }
  //update a customer order
//   updateOrder(orderId: number) {
//     return this.http.put('/api/order/ + orderId');
//   }
  //delete a customer order
  deleteOrder(orderId: number) {
    return this.http.delete('/api/order/ + orderId');
    // /order/{orderId}"
  }
}
