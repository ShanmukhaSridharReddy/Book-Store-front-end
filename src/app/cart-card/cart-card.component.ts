import { Component, OnInit,Input } from '@angular/core';
import { BookService } from '../services/book.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {

  
  @Input() cartObj:any={};
  @Input() showQuantitySection:boolean=true;

  cartItems:any=[]
  
  constructor(private bookService:BookService,private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currCartItems.subscribe((res:any) =>{
      this.cartItems = res
    })

  }

  handleBookQuantity(operation: string) {
    //operation == 'inc'?this.cartObj.quantity+=1 : this.cartObj.quantity-=1
   
    this.cartObj.quantity = parseInt(this.cartObj.quantity, 10); // Convert to integer
    if (operation === 'dec') {
      this.cartObj.quantity -= 1;
    } else {
      this.cartObj.quantity += 1;
    }
    this.cartItems.map((item:any)=>{
      if(item.id == this.cartObj.id)
      {
        return this.cartObj;
      }
      return item;
    })
    const cartBookObj={
      bookId:+this.cartObj.id,
      quantity:this.cartObj.quantity
    }
    this.bookService.updateQuantity(cartBookObj).subscribe(res=>{
   
      const result=this.cartItems.map((element:any)=>{
        if(element.id==cartBookObj.bookId)
        {
          element.quantity=cartBookObj.quantity
  
        }
        return element
      })
    })
  }
}
