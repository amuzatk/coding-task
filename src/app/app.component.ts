import { Component} from '@angular/core';
// import { Currency } from '../app/components/navbar/navbar.component';
import { Currency } from './currency';
import { CurrencyService } from '../app/currency-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  constructor(private currencyService: CurrencyService, public modalService: NgbModal) {}

  onCurrencyChanged(currency: Currency) {
    this.currencyService.selectedCurrency = currency;
  }

  open() {
    const modalRef = this.modalService.open(CartModalComponent);
    modalRef.componentInstance.name = 'World';
  }
  
}
