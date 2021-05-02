import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookReviewComponent } from './book-review/book-review.component';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BookReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
