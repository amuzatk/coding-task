import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit{
  title = 'shopping-cart-app';
  capacity: any;
  states: any;
  cartData: any[] = [];
  selectedItem: any;
  // groupedCities: SelectItemGroup[];
  selectedCurrency = '$USD';
  selectedCity: any;
  info: any;
  cart: any[] | undefined;
  counter = 0;
  currency = { symbol: '$', exchangeRate: 1 };

  selectOpen = false;

  toggleSelect() {
    this.selectOpen = !this.selectOpen;
  }
  toggleMenu(data: { infomation: any; show: boolean; }) {
    console.log(data.infomation)
    data.show = !data.show;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  constructor(private router:Router , private cartServiceService: CartServiceService) {
  }

  ngOnInit() {
    this.cartServiceService.getCartData().then((data: any) => {
      this.cart = data;   
    });
  }

  onCurrencyChanged(event: { currencySymbol: string, exchangeRate: number }) {
    this.currency = { symbol: event.currencySymbol, exchangeRate: event.exchangeRate };
  }
  goToProductDetail(id: string) {
    this.router.navigate(['/detailed', id]);
  }
  onClick(event: MouseEvent) {
    event.stopPropagation();
  }
  
}
