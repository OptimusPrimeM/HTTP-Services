import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',:
  styleUrls: ['./post1.component.css']
})
export class Post1Component  {

  private _posts: any[];

  constructor(http: Http) {
    http.get("https://jsonplaceholder.typicode.com/posts")
    .subscribe( response =>{
        this._posts = response.json();
    });

   }

   get posts(){
     return this._posts;
   }

 
}
