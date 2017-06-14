import { Component, OnInit } from '@angular/core';
import {Task} from '../../../Task';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './tasks.component.html',
})

export class TasksComponent implements OnInit{ 


    name:any;
    password:any; 
    
    constructor(private router: Router){
       
    }
    
    ngOnInit(){
if(sessionStorage.getItem('adminUser')=='admin'){
     
     this.router.navigate(['/admin']);

        }
     else if(sessionStorage.getItem('currentUser')=='customer'){
        this.router.navigate(['/customer']);
     }

    }

    submit(){
        if(this.name=='admin'){
     sessionStorage.setItem('adminUser','admin')
     this.router.navigate(['/admin']);

        }
     else{
         sessionStorage.setItem('currentUser','customer')
     this.router.navigate(['/customer']);
     
    }
}
  
}
