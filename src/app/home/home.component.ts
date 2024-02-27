import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private bookService:BookService,private dataService:DataService,private route:Router) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(res => {
      this.dataService.changeBookList(res.data) 

    })
    this.bookService.getCartList().subscribe((res:any) => {
      this.dataService.changeCartList(res.data)
    })
  }

}
