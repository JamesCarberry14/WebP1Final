import { Component, Input, OnInit } from '@angular/core';
import {DBserviceService} from '../services/dbservice.service';
import {IBook, Book} from '../interfaces/DB-APIResponse';


@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css'],
  providers: [DBserviceService]
})
export class BookReviewComponent implements OnInit {
  booksData: IBook[];

  constructor(private _bookApiService:DBserviceService) { }

  ngOnInit(): void {
    this._bookApiService.getdbBookData().subscribe(booksData =>
      {this.booksData = booksData});
      console.log("Data successfully passed to book-review component");
  }

  addTheBook(name:string, reviewText:string):boolean {
    let tempBook:IBook;
    tempBook=new Book(name,reviewText);
    this._bookApiService.addBookData(tempBook);
    console.log("did something")
    return false;
  }


}
