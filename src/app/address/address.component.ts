import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

   @Input() addressObj!:{addressId:number,fullAddress:string,city:string,state:string,type:number};
   @Output() handleAddressId= new EventEmitter<number>()

   addressId!:number;
   _address:string="";
   _city:string="";
   _state:string="";
   _type!:number;

   editTemplate:boolean=true;

  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    
    
  }
  openEditTemplate(){
    this.editTemplate=false;
    this._address = this.addressObj.fullAddress;
    this._city = this.addressObj.city;
    this._state = this.addressObj.state;
    this._type = this.addressObj.type;
    this.addressId = this.addressObj.addressId;
  }
  handleAddress(){
    this.handleAddressId.emit(this.addressObj.addressId);
  }
  updateAddress(){
    this.httpService.updateAddress({fullAddress:this._address,city:this._city,state:this._state,addressId:this.addressId}).subscribe(res =>{
      console.log(res)
    })
    this.editTemplate=true;
  }

}
