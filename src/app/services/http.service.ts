import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { endWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl ="https://localhost:44322/api/"

  private authHeader = new HttpHeaders({
    'Accept': "application/json",
    'Authorization': 'Bearer ' + localStorage.getItem('token') ||''
  })

  constructor(public http:HttpClient) { }
 
  signup(endpoint:string,data:object):Observable<any>{
    const res = this.http.post(this.baseUrl + endpoint,data);
    console.log(res)
    return res;
  }
  login(endpoint : string, data:object):Observable<any>{
     const res = this.http.post(this.baseUrl + endpoint , data);
     console.log(res);
     return res;

  }
  getBooks( endpoint: string):Observable<any>{
    return this.http.get(this.baseUrl + endpoint);
  }
  getBook(endpoint:string){
    
    return this.http.get(this.baseUrl + endpoint );
   
  }
  getCartList(){
    return this.http.get(this.baseUrl+'Cart/GetAllCart',{headers:this.authHeader})
  }

  addToCart(endpoint:string,bookid:number,quantity:number){
    const bookParam = new HttpParams().set("bookid",bookid)
    const quantityParam  = new HttpParams().set("quantity",quantity)
    return this.http.post(`${this.baseUrl}${endpoint}?${bookParam.toString()}&${quantityParam.toString()}`,{},{headers:this.authHeader})
    
    //return this.http.post(this.baseUrl+'Cart/AddToCart',data,{headers:this.authHeader})
  }

  updateQuantity(endpoint:string,data:Object){
    //'Cart/UpdateCart'
    return this.http.put(this.baseUrl+endpoint,data,{headers:this.authHeader})
  }
  addAddress(data:object){
    return this.http.post(this.baseUrl+'Address/AddAddress',data,{headers:this.authHeader})
  }
  getAddress(){
    return this.http.get(this.baseUrl+'Address/GetAddress',{headers:this.authHeader})
  }
  updateAddress(data:object){
    return this.http.put(this.baseUrl+'Address/UpdateAddress',data,{headers:this.authHeader})
  }
  addOrder(data:object){
    return this.http.post(this.baseUrl+'Order/AddOrder',data,{headers:this.authHeader})
  }
  addReview(data:any){
    return this.http.post(`https://localhost:44322/api/Reviews/AddReviews`,data,{headers:this.authHeader})
  }
  getAllReviews(bookid:number):Observable<any>
  {
    return this.http.get(`https://localhost:44322/api/Reviews/GetReviews?bookId=${bookid}`);
  }
}
