import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks = [
    {
      name: 'ライブの申し込み',
      isCompleted: false,
    },
    {
      name: 'セトリの予想',
      isCompleted: true,
    },
  ];

  addTask(taskName: string) {
    this.tasks.push({
      name: taskName,
      isCompleted: false,
    });
  }

  getNumOfCompletedTasks() {
    // 【課題 (タスクの完了数を返すようにしてください)】
    let numOfCompletedTasks = 0;
    for (let task of this.tasks) {
      if (task.isCompleted == true) {
        numOfCompletedTasks++;
      }
    }

    return numOfCompletedTasks;
  }
}
