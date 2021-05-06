import { Component, OnInit } from '@angular/core';

import { Posts } from 'src/app/interfaces/posts';

import { JsonPlaceholderService } from 'src/app/service/json-placeholder.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: Posts[] = [];
  public currentItemsToShow = [];

  constructor(private _jsonPlaceholderService: JsonPlaceholderService) { }

  ngOnInit(): void {
    this._listPosts();
    this.currentItemsToShow = this.posts;
  }

  private _listPosts(): void {
    this._jsonPlaceholderService
      .getAllListingOfItems('posts')
      .then((data: Posts[]) => {
        if (data.length > 0) {
          data.map((post: any) => {
            this.posts.push({
              title: post.title,
              body: post.body,
              id: post.id,
              userId: post.userId
            })
          })
        }
      })
      .catch(err => console.log('Internal error when listing posts', err));
  }

  public handlePageEvent(evt): void {
    this.currentItemsToShow = this.posts.slice(evt.pageIndex * evt.pageSize, evt.pageIndex * evt.pageSize + evt.pageSize)
  }

}
