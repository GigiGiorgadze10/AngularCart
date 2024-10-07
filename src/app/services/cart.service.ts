import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [
    { name: 'T-shirt', size: 'medium', color: 'blue', price: 78.99, quantity: 1, image: '/assets/images/tshirt.png' },
    { name: 'Backpack', size: 'medium', color: 'blue', price: 39.00, quantity: 1, image: '/assets/images/backpack.png' }
  ];

  getCartItems() {
    return this.cartItems;
  }

  removeCartItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  updateQuantity(index: number, quantity: number) {
    this.cartItems[index].quantity = quantity;
  }

  getTotalPrice() {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}
