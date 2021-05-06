import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts.rounting.module';

import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ComponentsModule,
    MatTabsModule,
    MatPaginatorModule,
  ],
  exports: [RouterModule, PostsComponent],
})
export class PostsModule { }
