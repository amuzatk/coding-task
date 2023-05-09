import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {
  // selectedProduct: any;
  // cart: any;

  // constructor(private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.selectedProduct = this.cart[id];
  // }

  // selectedProduct: any;
  // cart: any[];
  
  // constructor(private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   const state = window.history.state;
  //   this.cart = state.cart;
  //   this.selectedProduct = this.cart[id];
  // }
  itemId: number | undefined ;
  selectedProduct: any;
  cart: any[] ; // Initialize the cart property with an empty array

  constructor(private route: ActivatedRoute, private cartServiceService: CartServiceService) { 
    this.cart = [];
  }
  // itemId: number;
  item: any;
  ngOnInit(): void {
    this.getItemById(this.route.snapshot.paramMap.get('id') || '')
  
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      const data = history.state.data;
      console.log(id, data);
    });

    this.cart = [
      {
        id: '1',
        image: 'Image1B.png',
      },
      {
        id: '2',
        image: 'Image1.png',
      },
      {
        id: '3',
        image: 'Image1.png',
      },
    ];
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
