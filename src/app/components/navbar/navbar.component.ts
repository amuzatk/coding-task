import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @Output() currencyChange = new EventEmitter<{ symbol: string, rate: number }>();
  @Output() currencyChanged = new EventEmitter<{ currencySymbol: string, exchangeRate: number }>();

  currencySymbol = '$';
  exchangeRate = 1;
  

  activeLink = 'home';
  counter = 0;
  selectedCurrency = { symbol: '$', code: '$USD' };
  selectOpen = false;
  currencies = ['$USD', '€EUR', '¥JPY'];

  constructor(private http: HttpClient,private router:Router) {
  }

  ngOnInit() {
  }

  toggleSelect() {
    this.selectOpen = !this.selectOpen;
  }

  // selectCurrency(currency: string) {
  //   this.selectedCurrency = { symbol: this.getCurrencySymbol(currency), code: currency };
  //   this.selectOpen = false;
  //   console.log(currency,'CCOOR');
  // }

  // selectCurrency(currency: string) {
  //   this.getExchangeRate(currency).subscribe((rate: number) => {
  //     this.selectedCurrency = { symbol: this.getCurrencySymbol(currency), code: currency };
  //     this.currencyChange.emit({ symbol: this.selectedCurrency.symbol, rate: rate });
  //     this.selectOpen = false;
  //   });
  // }

  selectCurrency(currency: string) {
    this.getCurrencyExchangeRate(currency).subscribe((exchangeRate) => {
      this.currencySymbol = this.getCurrencySymbol(currency);
      this.exchangeRate = exchangeRate;
      this.selectOpen = false;
      this.currencyChanged.emit({ currencySymbol: this.currencySymbol, exchangeRate: this.exchangeRate });
    });
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

  // private getExchangeRate(currencyCode: string) {
  //   return this.http.get(`https://api.exchangerate-api.com/v4/latest/${currencyCode.substr(1)}`).pipe(
  //     map((response: any) => response.rates['USD'])
  //   );
  // }

  getCurrencyExchangeRate(currencyCode: string) {
    console.log(currencyCode, 'yyyy');
    
    // https://openexchangerates.org/api/latest.json?app_id=176418c128004179a94e1e858c605ae9
    const apiKey = 'https://openexchangerates.org/api/latest.json?app_id=176418c128004179a94e1e858c605ae9';
    // const apiKey = '176418c128004179a94e1e858c605ae9';
    // const url = `https://openexchangerates.org/api/latest.json?base=USD&symbols=${currencyCode.substr(1)}&access_key=${apiKey}`;
    // const url = `https://api.exchangeratesapi.io/latest?base=USD&symbols=${currencyCode.substr(1)}&access_key=${apiKey}`;
    // const url = `https://openexchangerates.org/api/latest.json?app_id=176418c128004179a94e1e858c605ae9`;
    const url = `https://openexchangerates.org/api/latest.json?app_id=176418c128004179a94e1e858c605ae9&base=USD&symbols=${currencyCode.substr(1)}&access_key=${apiKey}`;
  
    return this.http.get(url).pipe(map((response: any) => response.rates[currencyCode.substr(1)]));
  }
  

  setActiveLink(link: string) {
    this.activeLink = link;
  }

}

