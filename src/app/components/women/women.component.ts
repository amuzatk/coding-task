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
    const firstBox = document.querySelector('.wrapper');
    if (firstBox) {
      firstBox.classList.add('blur');
    }

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

  goToProductDetail(id: string) {
    this.router.navigate(['/detailed', id]);
  }

  onClick(event: MouseEvent) {
    event.stopPropagation();
  }
  

}
