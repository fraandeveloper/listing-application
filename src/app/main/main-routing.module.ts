import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [{
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full',
  }, {
    path: 'posts',
    loadChildren: () =>
      import('@pages/posts/posts.module').then(m => m.PostsModule),
  }, {
    path: 'albums',
    loadChildren: () =>
      import('@pages/albums/albums.module').then(m => m.AlbumsModule),
  }]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
