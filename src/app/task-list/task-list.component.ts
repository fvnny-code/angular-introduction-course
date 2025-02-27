import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  imports: [NgFor, DatePipe],
})
export class TaskListComponent {
  tasks: Task[];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.tasks;
  }
}
