import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrl: './task-form.component.css',
    imports: [FormsModule]
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
