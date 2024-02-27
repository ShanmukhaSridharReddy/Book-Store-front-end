import { Injectable } from '@angular/core';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService: HttpService) { }

  getAllBooks()
  {
    return this.httpService.getBooks('Book/BooksList');
  }
  getBook(endpoint:string)
  {
    return this.httpService.getBook(endpoint);
  }
  getCartList()
  {
    return this.httpService.getCartList();
  }
  addToCart(bookid:number,quantity:number)
  {
    return this.httpService.addToCart('Cart/AddToCart',bookid,quantity);
  }
  updateQuantity(data:object)
  {
    return this.httpService.updateQuantity('Cart/UpdateCart',data);
  }
}
