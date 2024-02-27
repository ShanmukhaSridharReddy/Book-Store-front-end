import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {

  }

  navigateToHome(){
    this.router.navigate(['home/book-container'])
  }
}
