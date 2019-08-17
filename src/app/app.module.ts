import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component'; 
import { WorksComponent } from './works/works.component';


@NgModule({
  declarations: [
    AppComponent, 
    WorksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
