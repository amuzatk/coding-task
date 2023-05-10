import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeLink = 'home';
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

  constructor(private router:Router) {
  }

  ngOnInit() {
  }

  setActiveLink(link: string) {
    this.activeLink = link;
  }

}

