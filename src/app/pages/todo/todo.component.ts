import { Component } from '@angular/core';
import { TodosService } from '../../shared/todos.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  public loading: boolean = true;
  public searchStr: string = '';
  
 constructor(public todosService: TodosService){}
 ngOnInit(){
  this.todosService.fetchTodos().pipe(delay(2000)).subscribe(() => {
    this.loading = false
  })
 }
 onChange(id: number){
  this.todosService.onToggle(id)
 }
 removeTodo(id: number){
  this.todosService.removeTodo(id)
 }

}
