import { Component, OnInit } from '@angular/core';

import { Posts } from 'src/app/interfaces/posts';
import { JsonPlaceholderService } from 'src/app/service/json-placeholder.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  private _posts: Posts[] = [];
  public currentItemsToShow = [];

  constructor(private _jsonPlaceholderService: JsonPlaceholderService) { }

  ngOnInit(): void {
    this._listPosts();
    this.currentItemsToShow = this._posts;
  }

  private _listPosts(): void {
    this._jsonPlaceholderService
      .getAllListingOfItems('posts')
      .then((post: Posts[]) => {
        if (!post.length) { return this._posts = []; }
        post.forEach(post => {
          this._posts.push(post);
        });
      })
      .catch(err => console.log('Internal error when listing posts', err));
  }

  public handlePageEvent(evt): void {
    this.currentItemsToShow = this._posts
      .slice(evt.pageIndex * evt.pageSize, evt.pageIndex * evt.pageSize + evt.pageSize)
  }
}
