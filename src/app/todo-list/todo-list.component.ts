
import { Component } from '@angular/core'


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent{
    tasks : string [] = [];
     
    task : string ;

    addTask() {
        // console.log(this.task);
        this.tasks.push(this.task);
    }
    deleteTask(now) {
        console.log(now)
        this.tasks = this.tasks.filter(t => t !== now)
    }
}
