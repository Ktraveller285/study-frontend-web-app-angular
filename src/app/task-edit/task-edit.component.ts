import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { TaskManagerService } from '../task-manager.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent implements OnInit, AfterViewInit {
  editTaskName!: string | null;

  @ViewChild('addTaskNameInput') taskNameInputElem!: ElementRef;

  constructor(
    public taskManager: TaskManagerService,
    private changeDetectorRef: ChangeDetectorRef,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public snackbar: MatSnackBar
  ) {}

  ngAfterViewInit(): void {
    // フォーカスをあてる
    this.taskNameInputElem.nativeElement.focus();
    // Angularに強制的に変更検出させる
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit() {
    this.editTaskName = this.activatedRoute.snapshot.paramMap.get('taskName');
  }

  saveTask(taskName: string, dueDate?: string) {
    if (this.editTaskName) {
      this.taskManager.updateTask(this.editTaskName, taskName, dueDate);
    } else {
      this.taskManager.addTask(taskName, dueDate);
    }
    this.router.navigate(['']);
    this.snackbar.open('タスクを保存しました！', 'OK', { duration: 1000 });
  }
}
