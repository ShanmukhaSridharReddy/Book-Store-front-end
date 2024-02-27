import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss'],
  
})
export class BooksContainerComponent implements OnInit {

  books:any[]=[]
  constructor(private httpService:HttpService,private dataService:DataService) { }

  ngOnInit(): void {

    // this.httpService.getBooks('Book/BooksList').subscribe(
    //   res =>{
    //     console.log(res)
    //     this.books = res.data
    //   }
    // )
    this.dataService.currbookItems.subscribe(
      res=>{
        this.books =res
      }
    )
    
  }

  

}
