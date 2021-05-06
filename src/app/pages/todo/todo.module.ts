import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoComponent } from './todo.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ComponentsModule } from 'src/app/components/components.module';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatTabsModule,
    MatPaginatorModule,
    ComponentsModule
  ]
})
export class TodoModule { }
