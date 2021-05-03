import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import { BookAPIResponse} from '../interfaces/bookapiresponse';

@Injectable({
  providedIn: 'root'
})


export class BookApiService {

  private _siteURL='https://www.googleapis.com/books/v1/volumes?q=+intitle:';
  private _key="&key=AIzaSyAEpXxeKN6_5ZGAXDFjyymdeh7vQd2Y-d0";


  constructor(private _http:HttpClient) { }


  getBookData(bookName): Observable<BookAPIResponse> {
    return this._http.get<BookAPIResponse>(this._siteURL + bookName  + this._key )
    .pipe(
      tap(data => console.log('BookData/error' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse) {
    console.log('bookApiService: '+ err.message);
    return Observable.throw(err.message);
  }



}
