import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/interfaces/todo';
import { JsonPlaceholderService } from 'src/app/service/json-placeholder.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  private _todos: Todo[] = [];
  public currentItemsToShow = [];

  constructor(private _jsonPlaceholderService: JsonPlaceholderService) { }

  ngOnInit(): void {
    this._listTodos();
    this.currentItemsToShow = this._todos;
  }

  private _listTodos(): void {
    this._jsonPlaceholderService
      .getAllListingOfItems('todos')
      .then((todo: Todo[]) => {
        if (!todo.length) { return this._todos = []; }
        todo.forEach(todo => {
          this._todos.push(todo);
        });
      })
      .catch(err => console.log('Erro', err));
  }

  public handlePageEvent(evt): void {
    this.currentItemsToShow = this._todos
      .slice(evt.pageIndex * evt.pageSize, evt.pageIndex * evt.pageSize + evt.pageSize)
  }
}
