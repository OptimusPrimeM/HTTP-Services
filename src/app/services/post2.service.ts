import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Post2Service {

  private _url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) { }


  getPost() {
    return this.http.get(this._url);
  }

  createPost(post) {
    return this.http.post(this._url, JSON.stringify(post));
  }

  updatePost(id) {
    return this.http.patch(this._url + "/" + id, JSON.stringify({ isRed: true }));
  }

  deletePost(id){
    return this.http.delete(this._url + "/" + id);
  }
}
