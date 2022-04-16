import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TaskManagerService } from '../task-manager.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent implements OnInit, AfterViewInit {
  @ViewChild('addTaskNameInput') taskNameInputElem!: ElementRef;

  constructor(
    public taskManager: TaskManagerService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    // フォーカスをあてる
    this.taskNameInputElem.nativeElement.focus();
    // Angularに強制的に変更検出させる
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {}
}
