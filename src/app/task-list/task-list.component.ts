import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  imports: [NgFor, DatePipe, RouterLink, CommonModule],
})
export class TaskListComponent {


  tasks: Task[];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.tasks;
  }
  getRoute(task: Task) {
    return `/update/${task.id}`;
  }
  deleteTask(id: string): void {
    this.taskService.deleteTask(id);
  }
}
