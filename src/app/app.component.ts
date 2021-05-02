import { Component } from '@angular/core';
import {BookApiService} from './services/book-api.service';
import {BookAPIResponse} from "./interfaces/bookapiresponse"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookApiService]
})

export class AppComponent {
  
  bookData:BookAPIResponse;
  errorMessage:any;

  constructor(private _bookApiService:BookApiService) {

  }

  getBookDetails(bookName:string) : boolean {
    this._bookApiService.getBookData(bookName).subscribe(
      bookData => {
        this.bookData=bookData;
        console.log('Author name: ' + this.bookData.Author);
      },
      error => this.errorMessage = <any>error
    );
    return false;
  }


}
