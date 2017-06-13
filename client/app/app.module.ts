import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {CustomerComponent} from './components/customer/customer.component';
import {AdminComponent} from './components/admin/admin.component'
import { MyDatePickerModule } from 'mydatepicker';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule,MyDatePickerModule, AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    }) ],
  declarations: [AppComponent, TasksComponent,CustomerComponent,AdminComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
