import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {DragDropModule}from '@angular/cdk/drag-drop';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SzkicComponent } from './szkic/szkic.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,DragDropModule ],
  declarations: [ AppComponent, HelloComponent, SzkicComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
