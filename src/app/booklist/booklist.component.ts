import { Component, OnInit } from '@angular/core';
import {BookApiService} from '../services/book-api.service';
import {BookAPIResponse} from '../interfaces/BookAPIResponse';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  providers: [BookApiService]
})
export class BooklistComponent implements OnInit {
  
  
  bookData:BookAPIResponse;
  errorMessage:any;



  constructor(private _bookApiService:BookApiService) { 

  }

  getBookDetails(bookName:string) : boolean {
    this._bookApiService.getBookData(bookName).subscribe(
      bookData => {
        this.bookData=bookData;
        console.log('Author name: ' + this.bookData.items[0].volumeInfo.authors);
      },
      error => this.errorMessage = <any>error
    );

    return false;
  }

  ngOnInit(): void {
  }

}
