import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  public todos: Todo[] = [];
  constructor(public http: HttpClient) {}
  fetchTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=6')
      .pipe(tap((todos) => (this.todos = todos)));
  }
  onToggle(id: number) {
    const idx = this.todos.findIndex((t) => t.id == id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id != id);
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
