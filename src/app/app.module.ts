import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookReviewComponent } from './book-review/book-review.component';

import {AngularFirestoreModule} from '@angular/fire/firestore'
import {AngularFireModule} from "@angular/fire" 
import { environment } from "../environments/environment";
import { ShowReviewsComponent } from './show-reviews/show-reviews.component'

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BookReviewComponent,
    ShowReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
