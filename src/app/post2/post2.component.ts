import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { Post2Service } from '../services/post2.service';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.css']
})
export class Post2Component implements OnInit {


  private _posts: any[];

  constructor(private service: Post2Service) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(
        response => {
          this._posts = response.json();
        });
  }


  createPost(input: HTMLInputElement) {

    let post = {
      title: input.value
    };
    input.value = "";

    this.service.create(JSON.stringify(post))
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this._posts.unshift(post);

        },
        (error: AppError)  => {

          if (error instanceof BadInput) {
            alert("Bad request");
            // this.form.setError(error.originalError)
          }
          else throw error;
        });
  }

  updatePost(post) {
    this.service.update(post.id)
      .subscribe(
        response => {
          console.log(response);
        });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        response => {
          let deletingIndex = this.posts.indexOf(post);
          this.posts.splice(deletingIndex, 1);

        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert("This post is already been deleted!");
          else throw error;
        });
  }

  get posts() {
    return this._posts;
  }



}
