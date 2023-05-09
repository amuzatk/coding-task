import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CartServiceService} from '../../cart-service.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css'],
})
export class WomenComponent implements OnInit {
  // cartData: any;
  cartData: any[] = [];
  selectedItem: any;

  title = 'shopping-cart-app';
  selectedCurrency = '$USD';
  selectedCity: any;
  info: any;
  cart: any;
  counter = 0;
  selectOpen = false;
  // cartServiceService: any;
  // cart: any[];

  constructor(private router: Router, private cartServiceService: CartServiceService) {}

  ngOnInit() {
    this.cartServiceService.getCartData().then((data: any) => {
      this.cart = data;   
    });
  }

 

  toggleSelect() {
    this.selectOpen = !this.selectOpen;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  // goToProductDetail(id: number) {
  //   console.log('Navigating to product detail page with ID:', id);
  //   this.router.navigate(['/detailed', id]);
  // }
  goToProductDetail(id: string) {
    this.router.navigate(['/detailed', id]);
  }
  

  // goToProductDetail(id: number): void {
  //   console.log('Navigating to product detail page with ID:', id);
  //   console.log(id, this.cart, 'DDDIIII');
  //   const url = `/detailed/${id}`;
  //   this.router.navigateByUrl(url);
  // }
  // goToProductDetail(id: number): void {
  //   this.router.navigate(['/product-detail', id], { state: { cart: this.cart } });
  //   console.log(id, 'DDDIIII');
  //   console.log('clicked', 'DDDIIII');
  // }
}
