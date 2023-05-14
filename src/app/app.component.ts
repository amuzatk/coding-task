import { Component} from '@angular/core';
// import { Currency } from '../app/components/navbar/navbar.component';
import { Currency } from './currency';
import { CurrencyService } from '../app/currency-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  constructor(private currencyService: CurrencyService) {}

  onCurrencyChanged(currency: Currency) {
    this.currencyService.selectedCurrency = currency;
  }
  
}
