import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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



const routes: Routes = [
  {path:"", redirectTo:"/home/book-container",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:'book-card',component:BookCardComponent},
  {path:'cart-card',component:CartCardComponent},
  {path:'address',component:AddressComponent},
  
  {path:'home',component:HomeComponent,children:[
    {path:'header',component:HeaderComponent},
    {path:'book-container',component:BooksContainerComponent},
    {path:'book-details/:bookid',component:BookDetailsComponent},
    {path:'cart',component:CartComponent},
    {path:'order',component:OrderComponent}

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
