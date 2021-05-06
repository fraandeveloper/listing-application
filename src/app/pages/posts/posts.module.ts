import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts.rounting.module';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatPaginatorModule,
  ],
  exports: [RouterModule, PostsComponent],
})
export class PostsModule { }
