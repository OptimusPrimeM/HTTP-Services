import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';

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
    return this.http.post(this._url, JSON.stringify(post))
      .catchError((error: Response) => {
        if (error.status === 400)
          return Observable.throw(new NotFoundError());

      })
  }

  updatePost(id) {
    return this.http.patch(this._url + "/" + id, JSON.stringify({ isRed: true }));
  }

  deletePost(id) {
    return this.http.delete(this._url + "/" + id)
      .catchError((error: Response) => {

        if (error.status === 404)
          return Observable.throw(new NotFoundError());

        return Observable.throw(new AppError(error));
      })
  }
}