import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WomenComponent } from './components/women/women.component';
import { MenComponent } from './components/men/men.component';
import { KidsComponent } from './components/kids/kids.component';
import { DetailedComponent } from './components/detailed/detailed.component';
import { ProductCartComponent } from './components/product.cart/product.cart.component';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';

const routes: Routes = [
  { path: '', component: WomenComponent },
  { path: 'men', component: MenComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'detailed/:id', component: DetailedComponent },
  { path: 'product-cart', component: ProductCartComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
