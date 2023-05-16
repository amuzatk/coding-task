import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { map } from 'rxjs';
import { DialogService, DynamicDialogRef  } from 'primeng/dynamicdialog';
import { CartModalComponent } from '../cart-modal/cart-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('yourButton') yourButton: any;
  ref: DynamicDialogRef | undefined;
  // @Output() currencyChange = new EventEmitter<{ symbol: string, rate: number }>();
  @Output() currencyChanged = new EventEmitter<{ currencySymbol: string, exchangeRate: number }>();

  currencySymbol = '$';
  exchangeRate = 1;
  

  activeLink = 'home';
  counter = 0;
  selectedCurrency = { symbol: '$', code: '$USD' };
  selectOpen = false;
  currencies = ['$USD', '€EUR', '¥JPY'];
  modalOpen = true;

  constructor(private dialogService:DialogService,private http: HttpClient,private router:Router, private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  // openModal() {
  //   const ref = this.dialogService.open(CartModalComponent, {
  //     contentStyle: {
  //       closable: false,
  //       'min-height': '500px',
  //       'width': '400px',
  //       'border': '1px solid red',
  //       'position': 'relative',
  //       'top': '0rem',
  //       'left': '28rem',
  //     }
  //   });
  // }

  openModal() {
    const modalRef = this.modalService.open(CartModalComponent);
    modalRef.componentInstance.name = 'Custom Modal';
  }

  toggleModal() {
    this.modalOpen = this.modalOpen;
  }
  
  toggleSelect() {
    this.selectOpen = !this.selectOpen;
  }

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

  getCurrencyExchangeRate(currencyCode: string) {
    console.log(currencyCode, 'yyyy');

    const apiKey = environment.apiKey;
    const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=USD&symbols=${currencyCode.substr(1)}`;

    return this.http.get(url).pipe(map((response: any) => response.rates[currencyCode.substr(1)]));
  }
  

  setActiveLink(link: string) {
    this.activeLink = link;
  }

}

