import { Injectable } from '@angular/core';
// import { Currency } from '../app/components/navbar/navbar.component';
import { Currency } from './currency';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  selectedCurrency!: Currency;

  constructor() { }
}
