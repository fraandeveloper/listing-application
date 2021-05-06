import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [{
    path: '',
    redirectTo: '/post',
    pathMatch: 'full',
  }, {
    path: 'post',
    loadChildren: () =>
      import('@pages/posts/posts.module').then(m => m.PostsModule),
  }, {
    path: 'album',
    loadChildren: () =>
      import('@pages/albums/albums.module').then(m => m.AlbumsModule),
  }, {
    path: 'todo',
    loadChildren: () =>
      import('@pages/todo/todo.module').then(m => m.TodoModule),
  }]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
