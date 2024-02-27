import { Component, OnInit, SimpleChanges } from '@angular/core';
import { BookService } from '../services/book.service';
import { DataService } from '../services/data.service';
import { MatIconRegistry } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { STAR_ICON,BLACK_STAR_ICON,YELLOW_STAR_ICON } from 'src/assets/svg-icons';
import { DomSanitizer } from '@angular/platform-browser';
import { __classPrivateFieldSet } from 'tslib';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  toggle:boolean = true;
  amountToggle:number=0;

  showAddtoCart:boolean=true;
  bookQuantity:number=0;
  bookId!:number

  book!:{
    title:string,
    author:string,
    image:string,
    price:number,
    description:string,
    id:any
    quantity:number
  };
 
  cart!:any
  cartList:any[]=[]
  rating:Number=0
  review!:string
  reviewList:any[]=[]

  constructor(private bookService : BookService, private dataService:DataService,public iconRegistry:MatIconRegistry,private sanitizer:DomSanitizer,private activatedRoute:ActivatedRoute,private httpService:HttpService) 
  {
    iconRegistry.addSvgIconLiteral("star-icon",sanitizer.bypassSecurityTrustHtml(STAR_ICON)),
    iconRegistry.addSvgIconLiteral("black-star-icon",sanitizer.bypassSecurityTrustHtml(BLACK_STAR_ICON)),
    iconRegistry.addSvgIconLiteral("yellow-icon",sanitizer.bypassSecurityTrustHtml(YELLOW_STAR_ICON))
   }

   ngOnChanges(changes: SimpleChanges): void {
    if(changes['cartList']){
      if(this.cartList.length) this.checkBookIsPresentInCart()
    }
  }

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.params['bookid']
    this.bookService.getBook(`Book/GetBookById?id=${this.bookId}`).subscribe((res:any)=>this.book=res.data)

    this.dataService.currCartItems.subscribe(res=>{
      
      this.cartList=res;
    
      })
      this.checkBookIsPresentInCart()

      this.httpService.getAllReviews(this.bookId).subscribe((res:any)=>{
        console.log(res)
        this.reviewList=res.data
      })
    
  }
  checkBookIsPresentInCart(){
    for(const cartBook of this.cartList)
    {
      if(cartBook.id == this.bookId)
      {
        this.showAddtoCart=false;
        this.bookQuantity = cartBook.quantity;
      }
    }
  }

  handleBookQuantity(operation:string)
  {
    //operation === 'add'?this.bookQuantity+=1 : this.bookQuantity-=1
    if(operation == 'sub' && this.bookQuantity == 1)
    {
      this.showAddtoCart = true;
      this.bookQuantity=0
    }
    else if( operation == 'add')
    {
      this.bookQuantity +=1;
    }
    else{
      this.bookQuantity-=1;
    }
  
    const cartBookObj={
      bookId:+this.bookId,
      quantity:this.bookQuantity
    }
    this.bookService.updateQuantity(cartBookObj).subscribe(res=>{
   
      const result=this.cartList.map((element:any)=>{
        if(element.id==cartBookObj.bookId)
        {
          element.quantity=cartBookObj.quantity
  
        }
        return element
      }).filter((item:any)=> item.quantity > 0)
      this.dataService.addBookToCartList(result)
    })

   
  }
  addToCart(){
    this.bookService.addToCart(this.book.id,1).subscribe(res=>{
      console.log(res)
      this.dataService.addBookToCartList(res)
      this.showAddtoCart=false;
      this.bookQuantity=1;
    })
    this.amountToggle = 1;
    this.toggle = false

  }
  toggleAction(){
    this.toggle=!this.toggle;
  }

  searchCart(id:number){
    this.cart = this.cartList.filter(res =>{
      return id == res.bookId;
    })
    if(this.cart)
    {
      this.amountToggle = this.cart.quantity
    }
  }
  addReview()
  {
    
    this.httpService.addReview({review:this.review,star:this.rating,bookId:Number(this.bookId)}).subscribe((res:any) =>{
      console.log(res.data)
    })
  }
  addRating(star:any){
    this.rating = star;
  }


}
