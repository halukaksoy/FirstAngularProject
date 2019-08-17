import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlertifyService } from './services/alertify.service';


import { AppComponent } from './app.component';
import { WorksComponent } from './works/works.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFilterPipe } from './pipes/todo-filter.pipe';

const router: Routes = [
  { path: "", redirectTo: "todos", pathMatch: "full" },
  { path: "works", component: WorksComponent },
  { path: "todos", component: TodoComponent },
  { path: "todos/user/:userId", component: TodoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WorksComponent, HomeNavComponent, TodoComponent, TodoFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(router),
    FormsModule
  ],
  providers: [
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
