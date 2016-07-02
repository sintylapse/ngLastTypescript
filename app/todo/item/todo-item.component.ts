import {Component, Input} from '@angular/core'

@Component({
    selector: 'todo-item',
    templateUrl: './app/todo/item/todo-item.component.html',
    styleUrls: ['./app/todo/item/todo-item.component.css']
})

export class TodoItemComponent{
    @Input() todo: any
}
