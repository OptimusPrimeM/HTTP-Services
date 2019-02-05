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
    this.service.getPost()
      .subscribe(
        response => {
          this._posts = response.json();
        },
        error => {
          alert("An unexperted error occured!");
          console.log(error);
        });
  }


  createPost(input: HTMLInputElement) {

    let post = {
      title: input.value
    };
    input.value = "";

    this.service.createPost(JSON.stringify(post))
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this._posts.unshift(post);

        },
        error => {
          alert("An unexperted error occured!");
          console.log(error);
        });
  }

  updatePost(post) {
    this.service.updatePost(post.id)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          alert("An unexperted error occured!");
          console.log(error);
        });
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          let deletingIndex = this.posts.indexOf(post);
          this.posts.splice(deletingIndex, 1);

        },
        error => {
          alert("An unexperted error occured!");
          console.log(error);
        });
  }

  get posts() {
    return this._posts;
  }



}
