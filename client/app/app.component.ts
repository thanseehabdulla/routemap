// import { Component } from '@angular/core';
// import {TaskService} from './services/task.service';

// @Component({
//   moduleId: module.id,
//   selector: 'my-app',
//   templateUrl: 'app.component.html',
//   providers:[TaskService]
// })

// export class AppComponent { }




import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = "Book Library"
} 