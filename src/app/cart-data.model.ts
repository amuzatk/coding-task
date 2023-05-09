export interface CartItem {
    id: string;
    image: string;
    text: string;
    amount: string;
  }
  
  export interface CartData {
    cart: CartItem[];
  }
  