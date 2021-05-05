import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JsonPlaceholderService {
  private _urlBase = 'https://jsonplaceholder.typicode.com/posts';

  public async getAllListingOfPosts() {
    const response = await fetch(`${this._urlBase}`);
    const data = await response.json();

    return data;
  }
}