import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cartList = new BehaviorSubject([])
  currCartItems = this.cartList.asObservable();

  private bookList = new BehaviorSubject([])
  currbookItems = this.bookList.asObservable();

  private drawState = new BehaviorSubject(false)
  currMessage = this.drawState.asObservable();

  constructor() { }

  changeCartList(state:[]){
    this.cartList.next(state);
  }
  changeBookList(state:[]){
    this.bookList.next(state);
  }
  changeDrawerState(state:boolean){
    this.drawState.next(state);
  }

  addBookToCartList(state:any){
    this.cartList.next(state);
  }
}
