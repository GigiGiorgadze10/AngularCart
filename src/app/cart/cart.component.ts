import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CouponService } from '../services/coupon.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  cart = [
    { 
      name: 'T-shirt', 
      size: 'medium', 
      color: 'blue', 
      price: 78.99, 
      image: 'tshirt.png',  
      quantity: 1 
    },
    { 
      name: 'Backpack', 
      size: 'medium', 
      color: 'blue', 
      price: 39, 
      image: 'backpack.png', 
      quantity: 1 
    }
  ];
  subtotal = 0;
  discount = 0;
  tax = 0;
  total = 0;
  couponCode = '';

  constructor() {
    this.calculateSubtotal();
  }

  
  calculateSubtotal() {
    this.subtotal = this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    this.calculateTotal();
  }


  updateQuantity(index: number, event: any) {
    const newQuantity = event.target.value;
    this.cart[index].quantity = newQuantity;
    this.calculateSubtotal();
  }


  removeItem(index: number) {
    this.cart.splice(index, 1);
    this.calculateSubtotal();
  }


  saveForLater(index: number) {
    console.log('Saved for later:', this.cart[index]);
  }


  applyCoupon() {
    if (this.couponCode === 'DISCOUNT10') {
      this.discount = this.subtotal * 0.1;
    } else {
      this.discount = 0;
    }
    this.calculateTotal();
  }


  calculateTotal() {
    this.tax = this.subtotal * 0.05; 
    this.total = this.subtotal - this.discount + this.tax;
  }


  checkout() {
    console.log('Proceed to checkout');
  }
}
