import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit{
  title = 'shopping-cart-app';
  capacity: any;
  states: any;
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

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.loadCapacity, this.loadStates; this.test;

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
  loadCapacity() {
    this.capacity = [
      { name: '1-5', code: '1-5' },
      { name: '6-10', code: '6-10' },
      { name: '11-18', code: '11-18' },
      { name: '19-32', code: '19-32' },
      { name: '33 and above', code: '33 and above' },
    ];
  }
  loadStates() {
    this.states = [
      { name: 'Abia', code: 'AB' },
      { name: 'Adamawa', code: 'AD' },
      { name: 'Akwa Ibom', code: 'AK' },
      { name: 'Anambra', code: 'AN' },
      { name: 'Bauchi', code: 'BA' },
      { name: 'Bayelsa', code: 'BS' },
      { name: 'Benue', code: 'BN' },
      { name: 'Borno', code: 'BR' },
      { name: 'Cross River', code: 'CR' },
      { name: 'Delta', code: 'DT' },
      { name: 'Ebonyi', code: 'EB' },
      { name: 'Edo', code: 'ED' },
      { name: 'Ekiti', code: 'EK' },
      { name: 'Enugu', code: 'EN' },
      { name: 'FCT - Abuja', code: 'FCT' },
      { name: 'Gombe', code: 'GB' },
      { name: 'Imo', code: 'IM' },
      { name: 'Jigawa', code: 'JG' },
      { name: 'Kaduna', code: 'KD' },
      { name: 'Kano', code: 'KN' },
      { name: 'Katsina', code: 'KT' },
      { name: 'Kebbi', code: 'KB' },
      { name: 'Kogi', code: 'KG' },
      { name: 'Kwara', code: 'KW' },
      { name: 'Lagos', code: 'LA' },
      { name: 'Nasarawa', code: 'NA' },
      { name: 'Niger', code: 'NG' },
      { name: 'Ogun', code: 'OG' },
      { name: 'Ondo', code: 'OD' },
      { name: 'Osun', code: 'OS' },
      { name: 'Oyo', code: 'OY' },
      { name: 'Plateau', code: 'PL' },
      { name: 'Rivers', code: 'RV' },
      { name: 'Sokoto', code: 'SK' },
      { name: 'Taraba', code: 'TR' },
      { name: 'Yobe', code: 'YB' },
      { name: 'Zamfara', code: 'ZM' },
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
