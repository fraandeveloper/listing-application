import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('fadeAnimation', [
      state('in', style({ opacity: 0 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(800)
      ]),
      transition(':leave',
        animate(1000, style({ opacity: 0 })))
    ])
  ]
})
export class CardComponent {
  public router: string;

  @Input() props: any;

  constructor(private _router: Router) {
    this.router = this._router.url.substr(1);
  }
}
