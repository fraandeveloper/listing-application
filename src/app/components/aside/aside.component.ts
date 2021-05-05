import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  @ViewChild('imageAvatars', { static: true }) imageAvatars: ElementRef;
  @ViewChild('asideContainer', { static: true }) asideContainer: ElementRef;

  @Input() background: string;

  constructor(private _renderer2: Renderer2) { }

  ngOnInit(): void {
  }

  public whatImage(image: string): string {
    switch (image) {
      case 'post':
        this._setAnimationImage('tilt-in-bottom-1 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)', 'rgba(255, 127, 80, 0.5)');
        return 'assets/images/avatar-1.svg';
      case 'albums':
        this._setAnimationImage('tilt-in-bottom-2 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)', 'rgb(255 71 87 / 50%)');
        return 'assets/images/avatar-4.svg';
      default:
        return 'assets/images/avatar-1.svg';
    }
  }

  private _setAnimationImage(animation: string, background: string): void {
    this._renderer2
      .setStyle(
        this.imageAvatars.nativeElement,
        'animation',
        `${animation}`
      );
    this._renderer2
      .setStyle(
        this.asideContainer.nativeElement,
        'background-color',
        `${background}`
      );
  }
}