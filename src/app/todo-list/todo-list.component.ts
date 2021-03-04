import { Component } from '@angular/core'

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent{
    Task : String[] =['Task1', 'Task2', 'Task3', 'Task4']
    
    Tasks : String ;
    addTask() {
        // console.log(this.Tasks);
        this.Task.push(this.Tasks);
    }
}
