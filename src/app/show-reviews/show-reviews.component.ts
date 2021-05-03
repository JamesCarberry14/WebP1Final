import { Component, Input, OnInit } from '@angular/core';
import {DBserviceService} from '../services/dbservice.service';
import {IBook, Book} from '../interfaces/DB-APIResponse';

@Component({
  selector: 'app-show-reviews',
  templateUrl: './show-reviews.component.html',
  styleUrls: ['./show-reviews.component.css']
})
export class ShowReviewsComponent implements OnInit {

  @Input() bookData:IBook;

  constructor() { }

  ngOnInit(): void {
  }

}
