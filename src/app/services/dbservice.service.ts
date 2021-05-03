import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, tap } from 'rxjs/operators';
import {AngularFirestoreCollection, AngularFirestore} from "@angular/fire/firestore";
import {IBook} from "../interfaces/DB-APIResponse";

@Injectable({
  providedIn: 'root'
})

export class DBserviceService {

booksDataCollection:AngularFirestoreCollection<IBook>;

booksData:Observable<IBook[]>;

allBooksData:IBook[];

errorMessage: string;

  constructor(private _http:HttpClient, private _afs:AngularFirestore) { 

    this.booksDataCollection=_afs.collection<IBook>("books_data");
  }

getdbBookData():Observable<IBook[]> {
  this.booksData = this.booksDataCollection.valueChanges();
  this.booksData.subscribe(
    data => console.log("getBooksData:"+JSON.stringify(data))
  )
  return this.booksData;
}

addBookData(book:IBook): void {
  this.booksDataCollection.add(JSON.parse(JSON.stringify(book)))
}

private handleError (err:HttpErrorResponse) {
  console.log("BookDBService: " +err.message);
  return Observable.throw(err.message);
}





}
