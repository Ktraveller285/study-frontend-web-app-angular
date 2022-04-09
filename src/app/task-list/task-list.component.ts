import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from '../task-manager.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor(public taskManager: TaskManagerService) {}

  ngOnInit(): void {}
}
