import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts.rounting.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ],
  exports: [RouterModule, PostsComponent],
})
export class PostsModule { }
