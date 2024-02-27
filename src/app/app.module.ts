import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import{MatMenuModule} from '@angular/material/menu'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BooksContainerComponent } from './books-container/books-container.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartComponent } from './cart/cart.component';
import { CartCardComponent } from './cart-card/cart-card.component';
import { AddressComponent } from './address/address.component';
import { OrderComponent } from './order/order.component';



 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    BookCardComponent,
    BooksContainerComponent,
    BookDetailsComponent,
    CartComponent,
    CartCardComponent,
    AddressComponent,
    OrderComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
