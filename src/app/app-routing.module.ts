import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
  },
  {
    path: 'add',
    component: TaskEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
