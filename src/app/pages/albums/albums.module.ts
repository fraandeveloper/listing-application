import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums.component';
import { AlbumsRoutingModule } from './albums.rouing.module';

@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
  ],
  exports: [RouterModule, AlbumsComponent],
})
export class AlbumsModule { }
