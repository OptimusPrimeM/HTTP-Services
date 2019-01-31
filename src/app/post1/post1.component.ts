import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',:
  styleUrls: ['./post1.component.css']
})
export class Post1Component {

  private _posts: any[];
  private _url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) {
    this.http.get(this._url)
      .subscribe(response => {
        this._posts = response.json();
      });

  }

  updatePost(post) {
    this.http.patch(this._url + "/" + post.id, JSON.stringify({ isRed: true }))
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post){
    this.http.delete(this._url + "/" + post.id)
    .subscribe(response =>{
      let deletingIndex = this.posts.indexOf(post);
      this.posts.splice(deletingIndex,1);

    });
  }

  get posts() {
    return this._posts;
  }

  get url() {
    return this._url;
  }


}
