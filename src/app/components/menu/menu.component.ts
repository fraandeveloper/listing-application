import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() router = new EventEmitter();

  constructor(private _router: Router) { }

  ngOnInit(): void {
    console.log(this._router);

    this.activeRouter(this._router.url.substr(1));
  }

  public activeRouter(router?: string): void {
    this.router.emit(router);
  }
}
