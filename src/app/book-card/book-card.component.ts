import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() bookObj:any={}
 

  constructor( private httpService:HttpService, private route:Router) { 
   
  }



  ngOnInit(): void {
    console.log(this.bookObj);
  }

  handleNavigation(){
    this.route.navigate(['home/book-details/'+this.bookObj.id])
  }
 

}
