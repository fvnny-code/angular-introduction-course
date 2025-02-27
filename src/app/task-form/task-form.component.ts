import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  task = {
    title: '',
    description: ''
  };
  constructor(private taskService: TaskService, private router: Router) { }
  submit() {
    this.taskService.addTask(this.task);
    this.router.navigate(['/']);
}
}
