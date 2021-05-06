import { Component, OnInit } from '@angular/core';

import { Albums } from 'src/app/interfaces/albums';
import { JsonPlaceholderService } from 'src/app/service/json-placeholder.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  private _albums: Albums[] = [];
  public currentItemsToShow = [];

  constructor(private _jsonPlaceholderService: JsonPlaceholderService) { }

  ngOnInit(): void {
    this._listAlbums();
    this.currentItemsToShow = this._albums;
  }

  private _listAlbums(): void {
    this._jsonPlaceholderService
      .getAllListingOfItems('albums')
      .then((album: Albums[]) => {
        if (!album.length) { return this._albums = []; }
        album.forEach(album => {
          this._albums.push(album);
        });
      })
      .catch(err => console.log('Erro', err));
  }

  public handlePageEvent(evt): void {
    this.currentItemsToShow = this._albums
      .slice(evt.pageIndex * evt.pageSize, evt.pageIndex * evt.pageSize + evt.pageSize)
  }
}
