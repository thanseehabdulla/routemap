import { Component, OnInit } from '@angular/core';
import {Task} from '../../../Task';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: './customer.component.html',
})

export class CustomerComponent { 

    name:any;
    password:any; 
public dd:any;
public mm:any;
public yyyy:any;    

 private myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd/mm/yyyy',
    };
 // Initialized to specific date (09.10.2018).
        public model: Object;
         

constructor(){
       this.date();      

    }

ngOnInit(){
     //called after the constructor and called  after the first ngOnChanges() 
this.date();      

  }



date(){
var today = new Date();
 this.dd = today.getDate();
 this.mm = today.getMonth()+1; //January is 0!
 this.yyyy = today.getFullYear();
this.model= { date: { year: this.yyyy, month: this.mm, day: this.dd } };
}


onEmployee(){
var client= document.getElementById('client');
var employee = document.getElementById('employee');
var servicereq = document.getElementById('servicereq');
var serviceplan = document.getElementById('serviceplan');
var servicelist = document.getElementById('servicelist');
var addserviceplan = document.getElementById('addserviceplan');
addserviceplan.style.display="none";
servicelist.style.display="none";
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
var servicelist = document.getElementById('servicelist');
var addserviceplan = document.getElementById('addserviceplan');
addserviceplan.style.display="none";
servicelist.style.display="none";
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
var servicelist = document.getElementById('servicelist');
var addserviceplan = document.getElementById('addserviceplan');
addserviceplan.style.display="none";
servicelist.style.display="none";
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
var servicelist = document.getElementById('servicelist');
var addserviceplan = document.getElementById('addserviceplan');
addserviceplan.style.display="none";
servicelist.style.display="none";
serviceplan.style.display="block";
servicereq.style.display="none";
client.style.display="none";
employee.style.display="none";

}


servicePlanClick(){
var client= document.getElementById('client');
var employee = document.getElementById('employee');
var servicereq = document.getElementById('servicereq');
var serviceplan = document.getElementById('serviceplan');
var servicelist = document.getElementById('servicelist');
var addserviceplan = document.getElementById('addserviceplan');
addserviceplan.style.display="none";
servicelist.style.display="block";
serviceplan.style.display="none";
servicereq.style.display="none";
client.style.display="none";
employee.style.display="none";




}

addserviceplan(){
var client= document.getElementById('client');
var employee = document.getElementById('employee');
var servicereq = document.getElementById('servicereq');
var serviceplan = document.getElementById('serviceplan');
var servicelist = document.getElementById('servicelist');
var addserviceplan = document.getElementById('addserviceplan');
addserviceplan.style.display="block";
servicelist.style.display="none";
serviceplan.style.display="none";
servicereq.style.display="none";
client.style.display="none";
employee.style.display="none";


}

}
