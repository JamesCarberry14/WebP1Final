import {stringify} from 'querystring';

export interface IBook {
    name:string;
    reviewText:string;
}

export class Book{
    name:string;
    reviewText:string;

    constructor(name:string, reviewtext:string) {
        this.name = name;
        this.reviewText = reviewtext;
    }

}