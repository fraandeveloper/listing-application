import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public imageRoute = '';

  constructor() { }

  public routerAside(router: string): void {
    this.imageRoute = router;
  }
}
