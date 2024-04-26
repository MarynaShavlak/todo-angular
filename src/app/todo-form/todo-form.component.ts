import { Component } from '@angular/core';
import {Todo, TodosService} from "../shared/todos.service";


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  title: string = ''

  constructor(public todosService: TodosService){}

  addTodo(){
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,

    }
    this.todosService.addTodo(todo)
    this.title = ''
  }
}
