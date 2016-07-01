import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './app/app.components.html',
  styleUrls: ['./app/app.components.css']
})

export class AppComponent {
    title: string;
    todos: string[];

    constructor(){
        this.title = 'Angular 2 ToDo';
        this.todos = []
    }
    addTodo(title: any){
        if (title.value !== '') {
            this.todos.push(title.value)
            title.value = ''
        }
    }
}
