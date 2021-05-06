import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JsonPlaceholderService {

  public async getAllListingOfItems(endpoint: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
    const data = await response.json();

    return data;
  }
}