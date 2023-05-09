import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  capacity: any;
  states: any;
  // groupedCities: SelectItemGroup[];
  // selectedCurrency = '$USD';
  selectedCity: any;
  info: any;
  cart: any[] | undefined;
  counter = 0;

  selectedCurrency = { symbol: '$', code: '$USD' };
  selectOpen = false;
  currencies = ['$USD', '€EUR', '¥JPY'];

  toggleSelect() {
    this.selectOpen = !this.selectOpen;
  }

  selectCurrency(currency: string) {
    this.selectedCurrency = { symbol: this.getCurrencySymbol(currency), code: currency };
    this.selectOpen = false;
    console.log(currency,'CCOOR');
    
  }

  private getCurrencySymbol(currencyCode: string): string {
    switch (currencyCode) {
      case '€EUR':
        return '€';
      case '¥JPY':
        return '¥';
      default:
        return '$';
    }
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

  constructor(private router:Router) {
  }

  ngOnInit() {

    this.cart = [
      {
        image: 'Image1.png',
          text: "Client",
          // text: 'Apollo Running Short',
          amount: '$50.000'
      },
      {
        image: 'Image2.png',
        text: "Client",
        amount: '$50.000'
      },
      {
        image: 'Image3.png',
        text: "Client",
        amount: '$50.000'
      },
      {
        image: 'Image4.png',
        text: "Client",
        amount: '$50.000'
      },
      {
        image: 'Image1.png',
        text: "Client",
        amount: '$50.000'
      },
      {
        image: 'Image3.png',
        text: "Client",
        amount: '$50.000'
      },
  ];
  }

  test(){
  this.info = [
    {
        name: "Client",
        image: 'user.png',
        show: false,
        infomation: [
       
            {
              id: 1,
              name: "Add/Manage Client",
              routeLink: "/admin/arc"
            }
        ],
    },
    {
        name: "Payment Management",
        image: 'user.png',
        show: false,
        infomation: [
            {
                id: 1,
                name: "Payment Transaction",
                routeLink: "/admin/payment/:id",
            },
        ],
    },
];
}


}
function loadCapacity() {
  throw new Error('Function not implemented.');
}

function loadStates() {
  throw new Error('Function not implemented.');
}

