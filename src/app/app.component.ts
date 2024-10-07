import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping-cart';
}
