import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';  // <-- Import the HeaderComponent
import { CartComponent } from './cart/cart.component';  // <-- Import the CartComponent

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  // <-- Declare HeaderComponent here
    CartComponent     // <-- Declare CartComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
