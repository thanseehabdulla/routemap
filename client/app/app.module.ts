import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import { PageNotFoundComponent }  from './page-not-found.component';
import { HomeComponent }  from './components/home/home.component';
import { ViewDetailComponent }  from './components/home/view-detail.component';
import { AddBookComponent }  from './components/add-book/add-book.component';
import { UpdateBookComponent }  from './components/manage-book/update-book.component';
import { ManageBookComponent }  from './components/manage-book/manage-book.component';
import { AppRoutingModule }  from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ,AppRoutingModule],
  declarations: [AppComponent, TasksComponent,PageNotFoundComponent,
	  HomeComponent,
	  ViewDetailComponent,
	  AddBookComponent,
	  ManageBookComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
