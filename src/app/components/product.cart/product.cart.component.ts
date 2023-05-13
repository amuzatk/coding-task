import { Component } from '@angular/core';

@Component({
  selector: 'app-product.cart',
  templateUrl: './product.cart.component.html',
  styleUrls: ['./product.cart.component.css']
})
export class ProductCartComponent {
  selectedSize: any = {};
  selectedColor: any = {};
  colorBoxColor: any ={};

  sizeBoxColor: string = ''; // Define a sizeBoxColor property with an empty string as its initial value.

  currency = { symbol: '$', exchangeRate: 1 };

  onSubmit(formData: any) {
    console.log(formData);
  }

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

  onCurrencyChanged(event: { currencySymbol: string, exchangeRate: number }) {
    this.currency = { symbol: event.currencySymbol, exchangeRate: event.exchangeRate };
  }
  

}
