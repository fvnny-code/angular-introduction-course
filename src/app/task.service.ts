import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { v4 as uuid } from 'uuid';
import { TaskForm } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    {
      id: uuid(),
      title: 'Tâche 1',
      description: 'Description de la tâche 1',
      createdAt: new Date(),
    },
    {
      id: uuid(),
      title: 'Tâche 2',
      description: 'Description de la tâche 2',
      createdAt: new Date(),
    },
  ];
  addTask(task: TaskForm): void {
    this.tasks.push({
        ...task,
        id: uuid(),
        createdAt: new Date()
    });
}
}
