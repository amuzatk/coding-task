import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { GridModule } from 'ngx-bootstrap/grid';
// import { GridModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WomenComponent } from './components/women/women.component';
import { MenComponent } from './components/men/men.component';
import { KidsComponent } from './components/kids/kids.component';
import { DetailedComponent } from './components/detailed/detailed.component';
import { ProductCartComponent } from './components/product.cart/product.cart.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    WomenComponent,
    MenComponent,
    KidsComponent,
    DetailedComponent,
    ProductCartComponent,
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // GridModule.forRoot()
    // GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
