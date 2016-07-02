import {Component} from '@angular/core';
import {TodoListComponent} from './todo/todo-list.component'
import {Todo} from './todo/item/todo'

@Component({
  selector: 'todo-app',
  templateUrl: './app/app.components.html',
  styleUrls: ['./app/app.components.css'],
  directives: [TodoListComponent]
})

export class AppComponent {
    title: string;
    todos: Todo[];

    constructor(){
        this.title = 'Angular 2 ToDo';
        this.todos = []
    }
    addTodo(event: any){
        if (event.value !== '') {
            this.todos.push(new Todo(event.value))
            event.value = ''
        }
    }
}
