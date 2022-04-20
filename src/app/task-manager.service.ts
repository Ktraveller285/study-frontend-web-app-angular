import { Injectable } from '@angular/core';
import { TodoTask } from './todo-task';

@Injectable({
  providedIn: 'root',
})
export class TaskManagerService {
  private tasks: TodoTask[];

  constructor() {
    this.tasks = [];
    this.loadTasks();
  }

  addTask(taskName: string, dueDate?: string) {
    this.tasks.push({
      name: taskName,
      isCompleted: false,
      dueDate: dueDate ? new Date(dueDate) : undefined,
    });
    this.saveTasks();
  }

  updateTask(oldTaskName: string, taskName: string, dueDate?: string) {
    // 新しい配列を用意
    let newTasks = [];
    for (let task of this.tasks) {
      if (oldTaskName == task.name) {
        // 一致していたら…
        task.name = taskName;
        task.dueDate = dueDate ? new Date(dueDate) : undefined;
        newTasks.push(task);
      } else {
        // 元のタスク名と入力されたタスク名が一致していなければ…
        // 入力されたタスク名を配列に入れる
        newTasks.push(task);
      }
    }
    this.tasks = newTasks;
    this.saveTasks();
  }

  getTasks(): TodoTask[] {
    return this.tasks;
  }

  getNumOfCompletedTasks() {
    let numOfCompletedTasks = 0;
    for (let task of this.tasks) {
      if (task.isCompleted == true) {
        numOfCompletedTasks++;
      }
    }

    return numOfCompletedTasks;
  }

  loadTasks() {
    let jsonString = window.localStorage.getItem('tasks');
    if (jsonString) {
      this.tasks = JSON.parse(jsonString);
    }
  }

  saveTasks() {
    let jsonString = JSON.stringify(this.tasks);
    window.localStorage.setItem('tasks', jsonString);
  }
}
