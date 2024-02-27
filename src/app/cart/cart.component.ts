import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { LOCATION_ICON } from 'src/assets/svg-icons';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from '../services/http.service';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems:any[]=[]
  addressList:[]=[]
  placeOrder:boolean=true

  fullName: string = '';
  mobileNumber: string = '';
  fulladdress: string = '';
  city: string = '';
  state: string = '';
  addressType!: number;
  checkValue:string = "address1"

  showDefault:boolean=false;
  continue:boolean=true;
  ordersummary:boolean=true;
  
  constructor(private dataService:DataService,private httpService:HttpService,public iconRegistry:MatIconRegistry,private sanitizer:DomSanitizer,private router:Router) { 
    iconRegistry.addSvgIconLiteral("location-icon",sanitizer.bypassSecurityTrustHtml(LOCATION_ICON))
  }

  ngOnInit(): void {
    this.dataService.currCartItems.subscribe(result =>{
      this.cartItems = result
    })
    this.httpService.getAddress().subscribe((res:any) =>{
      this.addressList = res.data;
    })
    
  }
  togglePlaceOrder(){
    this.placeOrder = !this.placeOrder
  }
  showDefaultForm(){
    this.showDefault=true;
  }
  handleContinue()
  {
    if(this.addressId){
    this.httpService.addAddress({fullName:this.fullName,fullAddress:this.fulladdress,city:this.city,state:this.state,phoneNo:this.mobileNumber,Type:this.addressType}).subscribe(res=>{
      console.log(res)
    })
  }
  this.continue = !this.continue; 
  }
  addressId!:number;
  handleAddressId($event:number)
  {
    this.addressId =$event;
  }
  orderAllItems()
  {
    alert('Order Successfull!');
    this.router.navigate(['/home/order']);
  }
  changeValue(value:number)
  {
    this.checkValue = "address" + value
  }
}
