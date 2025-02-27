export interface Task {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
  }
  export type TaskForm = Pick<Task, 'title' | 'description'>;