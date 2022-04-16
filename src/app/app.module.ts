import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent, TaskListComponent, TaskEditComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'ja-JP' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
