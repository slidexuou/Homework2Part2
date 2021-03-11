
import { Component, QueryList, ViewChildren } from '@angular/core'
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
    @ViewChildren(TaskComponent) taskComps:QueryList<TaskComponent>;
    tasks : Task [] = [];
     
    // task : Task ; // id, name, description
    taskName:string;
    taskDescription:string;

    taskSelect:Task;


    // {
    //     id:'xxxx',
    //     name:'xxxxxxx',
    //     description:'xxxxx'
    // }

    addTask() {
        let tempTask:Task ={
            id:this.createUUID(),
            name:this.taskName,
            description:this.taskDescription
        }
        this.tasks.push(tempTask);
        // console.log(this.task);
        // this.tasks.push(this.task);
    }
    deleteTask(taskComponent:TaskComponent) {
        // console.log(task)
        // this.tasks = this.tasks.filter(t => t !== now)
        console.log(this.tasks);
        console.log(taskComponent);
        this.tasks = this.tasks.filter(t => t.id !== taskComponent.taskObj.id);
    }
    
    createUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
           var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
           return v.toString(16);
        });
     }
        selectedTask(taskComponent:TaskComponent){
            // console.log(taskComponent.taskObj.name)
           this.clearSelected();
           taskComponent.isSelected=true;   
           this.taskSelect=taskComponent.taskObj;
        }
        clearSelected(){
            this.taskComps.forEach(task => {
                    task.isSelected=false;
                });
        }
}
