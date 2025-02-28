import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrl: './task-form.component.css',
    imports: [FormsModule]
})
export class TaskFormComponent implements OnInit {

  task = {
    title: '',
    description: ''
  };
  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }
ngOnInit(): void {
  const id= this.route.snapshot.paramMap.get('id');
  if (id) {
    this.task = this.taskService.getTask(id);
  }
}

submit() {
  const id = this.route.snapshot.paramMap.get('id');

  if (id) {
    const existingTask = this.taskService.getTask(id);
    this.taskService.updateTask({
      ...existingTask,
      ...this.task
    });
  } else {
    this.taskService.addTask(this.task);
  }
  this.router.navigate(['/']);
}
}
