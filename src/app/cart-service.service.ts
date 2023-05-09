import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CartData, CartItem } from './cart-data.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  //  cartDataUrl = '/assets/items.json'

  constructor(private http: HttpClient) { }

  getCartData() {
    return this.http.get<any>('/assets/items.json')
    .toPromise()
    .then(res => res.cart as any)
    .then(data => data);
  }

  // getCartItemById(itemId: string): Observable<CartItem> {
  //   return this.getCartData().pipe(
  //     map((cartItems: CartItem[]) => cartItems.find(item => item.id === itemId))
  //   );
  // }

  getCartItemById(itemId: string): Observable<CartItem> {
   return this.http.get<any>('/assets/items.json').pipe(
      map(data => data.cart.find((item: any) => item.id === itemId))
    );
  }
}
