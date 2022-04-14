import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from '../task-manager.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent implements OnInit {
  constructor(public taskManager: TaskManagerService) {}

  ngOnInit(): void {}
}
