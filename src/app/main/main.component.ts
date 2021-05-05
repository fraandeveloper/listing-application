import { Component, OnInit } from '@angular/core';

import { Posts } from '../interfaces/posts';

import { JsonPlaceholderService } from '../service/json-placeholder.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public posts: Posts[] = [];
  public currentItemsToShow = [];
  public routerOfImage = '';

  constructor(private _jsonPlaceholderService: JsonPlaceholderService) { }

  ngOnInit(): void {
    this._listPosts();
    this.currentItemsToShow = this.posts;
  }

  private _listPosts(): void {
    const posts = [];
    this._jsonPlaceholderService
      .getAllListingOfPosts()
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
    console.log(evt);
    this.currentItemsToShow = this.posts.slice(evt.pageIndex * evt.pageSize, evt.pageIndex * evt.pageSize + evt.pageSize)
  }

  public routerAside(evt): void {
    console.log(evt);
    this.routerOfImage = evt;
  }
}
