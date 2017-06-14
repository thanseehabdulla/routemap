import { Component } from '@angular/core';
import {Task} from '../../../Task';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'admin',
  templateUrl: './admin.component.html',
})

export class AdminComponent { 


    name:any;
    password:any; 
    
    constructor(private router: Router){

    }
    

   logout()
{
sessionStorage.removeItem('adminUser');
this.router.navigate(['/login']);

  
}
