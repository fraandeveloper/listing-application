import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public routerOfImage = '';

  constructor() { }

  public routerAside(evt): void {
    console.log(evt);
    this.routerOfImage = evt;
  }
}
