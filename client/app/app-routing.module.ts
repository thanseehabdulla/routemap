import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }  from './page-not-found.component';
import { HomeComponent }  from './components/home/home.component';
import { ViewDetailComponent }  from './components/home/view-detail.component';
import { AddBookComponent }  from './components/add-book/add-book.component';
import { UpdateBookComponent }  from './components/manage-book/update-book.component';
import { ManageBookComponent }  from './components/manage-book/manage-book.component';

const routes: Routes = [
        { path: 'home', component: HomeComponent },
	{ path: 'view-detail/:id', component: ViewDetailComponent },		  
	{ path: 'add-book', component: AddBookComponent },
	{ path: 'manage-book', component: ManageBookComponent },
	// { path: 'update-book/:id', component: UpdateBookComponent }, 
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ } 