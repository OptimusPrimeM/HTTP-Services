import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Post2Service extends DataService {

  constructor(http: Http) {
    super(http, "https://jsonplaceholder.typicode.com/posts");
  }



} 