import { Component } from '@angular/core';
import {Task} from '../../../Task';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: './customer.component.html',
})

export class CustomerComponent { 


    name:any;
    password:any; 
    
    constructor(){
        // this.taskService.getTasks()
        //     .subscribe(tasks => {
        //         this.tasks = tasks;
        //     });
    }
    


onEmployee(){
var client= document.getElementById('client');
var employee = document.getElementById('employee');
var servicereq = document.getElementById('servicereq');
var serviceplan = document.getElementById('serviceplan');
serviceplan.style.display="none";
servicereq.style.display="none";
client.style.display="none";
employee.style.display="block";

}

onClient(){
var client= document.getElementById('client');
var employee = document.getElementById('employee');
var servicereq = document.getElementById('servicereq');
var serviceplan = document.getElementById('serviceplan');
serviceplan.style.display="none";
servicereq.style.display="none";
employee.style.display="none";
client.style.display="block";
}

onServicereq(){
var client= document.getElementById('client');
var employee = document.getElementById('employee');
var servicereq = document.getElementById('servicereq');
var serviceplan = document.getElementById('serviceplan');
serviceplan.style.display="none";
servicereq.style.display="block";
client.style.display="none";
employee.style.display="none";
}

onServiceplan(){
var client= document.getElementById('client');
var employee = document.getElementById('employee');
var servicereq = document.getElementById('servicereq');
var serviceplan = document.getElementById('serviceplan');
serviceplan.style.display="block";
servicereq.style.display="none";
client.style.display="none";
employee.style.display="none";

}
  
}
