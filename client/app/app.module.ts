import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {CustomerComponent} from './components/customer/customer.component';
import {AdminComponent} from './components/admin/admin.component'
import { MyDatePickerModule } from 'mydatepicker';
import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule,MyDatePickerModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJSftDw2ZAC-PU9AXx0u7UVhbKGqO90j0'
    })],
  declarations: [AppComponent, TasksComponent,CustomerComponent,AdminComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
