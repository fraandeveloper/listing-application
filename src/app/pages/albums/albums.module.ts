import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AlbumsRoutingModule } from './albums.rouing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    ComponentsModule,
    MatTabsModule,
    MatPaginatorModule
  ],
  exports: [RouterModule, AlbumsComponent],
})
export class AlbumsModule { }
