import { Component } from '@angular/core';
import {Task} from '../../../Task';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: './tasks.component.html',
})

export class TasksComponent { 


    name:any;
    password:any; 
    
    constructor(){
        // this.taskService.getTasks()
        //     .subscribe(tasks => {
        //         this.tasks = tasks;
        //     });
    }
    

    submit(){
        console.log(this.name);
        alert(this.name);    
 location.href = "http://www.cnn.com";


}
  
}
