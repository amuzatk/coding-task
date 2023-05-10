import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
  export class MenComponent implements OnInit {
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
  //   this.cart = [
  //     {
  //       image: 'Image1.png',
  //         text: "Client",
  //         // text: 'Apollo Running Short',
  //         amount: '$50.000'
  //     },
  //     {
  //       image: 'Image2.png',
  //       text: "Client",
  //       amount: '$50.000'
  //     },
  //     {
  //       image: 'Image3.png',
  //       text: "Client",
  //       amount: '$50.000'
  //     },
  //     {
  //       image: 'Image4.png',
  //       text: "Client",
  //       amount: '$50.000'
  //     },
  //     {
  //       image: 'Image1.png',
  //       text: "Client",
  //       amount: '$50.000'
  //     },
  //     {
  //       image: 'Image3.png',
  //       text: "Client",
  //       amount: '$50.000'
  //     },
  // ];
  }

  goToProductDetail(id: string) {
    this.router.navigate(['/detailed', id]);
  }

}
