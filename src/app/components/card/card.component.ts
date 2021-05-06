import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public router: string;

  @Input() props: any;

  constructor(private _router: Router) {
    this.router = this._router.url.substr(1);
  }
}
