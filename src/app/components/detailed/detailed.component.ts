import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/cart-service.service';
// import { products } from '../products';
import { Currency } from '../../currency';
import { CurrencyService } from '../../currency-service.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {
  product: any;
  currency2: Currency | undefined;
  currency = { symbol: '$', exchangeRate: 1 };

  itemId: number | undefined ;
  selectedProduct: any;
  cart: any[] ; // Initialize the cart property with an empty array

  constructor(private route: ActivatedRoute, private cartServiceService: CartServiceService, private currencyService: CurrencyService) { 
    this.cart = [];
  }
  // itemId: number;
  item: any;
  image: any;
  ngOnInit(): void {
    this.getItemById(this.route.snapshot.paramMap.get('id') || '')
  
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      const data = history.state.data;
      console.log(id, data);
    });

    this.route.paramMap.subscribe(params => {
      // this.product = products[+params.get('productId')];
      this.currency = this.currencyService.selectedCurrency;
    });
    // this.cart = [
    //   {
    //     id: '1',
    //     image: 'Image1B.png',
    //   },
    //   {
    //     id: '2',
    //     image: 'Image1.png',
    //   },
    //   {
    //     id: '3',
    //     image: 'Image1.png',
    //   },
    // ];
  }
  onCurrencyChanged(event: { currencySymbol: string, exchangeRate: number }) {
    this.currency = { symbol: event.currencySymbol, exchangeRate: event.exchangeRate };
  }

  getItemById(id: string): void {
    this.cartServiceService.getCartItemById(id).subscribe((item: any) => {
      this.selectedProduct = item;
      console.log(item);
    });
  }
  // onCheckboxChange(event: any) {
  //   console.log(event.target.value);
  // }
  // selectedSize = { XS: false, S: false, M: false, L: false };
  // selectedColor = { color1: '', color2: '', color3: '' };

  // onSubmit(formValue: any) {
  //   console.log(formValue);
  // }  
  selectedSize: any = {};
  selectedColor: any = {};
  colorBoxColor: any ={};

  sizeBoxColor: string = ''; // Define a sizeBoxColor property with an empty string as its initial value.

  onSubmit(formData: any) {
    console.log(formData);
  }

  // updateSizeBoxColor() {
  //   switch (this.selectedColor) {
  //     case 'grey':
  //       this.sizeBoxColor = 'grey';
  //       break;
  //     case 'black':
  //       this.sizeBoxColor = 'black';
  //       break;
  //     case 'green':
  //       this.sizeBoxColor = 'green';
  //       break;
  //     default:
  //       this.sizeBoxColor = '';
  //   }
  // }
  updateSizeBoxColor() {
    switch (this.selectedColor) {
      case 'grey':
        this.sizeBoxColor = 'grey';
        break;
      case 'black':
        this.sizeBoxColor = 'black';
        break;
      case 'green':
        this.sizeBoxColor = 'green';
        break;
      default:
        this.sizeBoxColor = '';
    }
  }
  
}
