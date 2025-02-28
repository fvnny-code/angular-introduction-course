

import { provideClientHydration, withEventReplay, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { TaskListComponent } from './app/task-list/task-list.component';
import { TaskFormComponent } from './app/task-form/task-form.component';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'add-task', component: TaskFormComponent },
  { path: 'update/:id', component: TaskFormComponent }
];



bootstrapApplication(AppComponent, {
    providers: [
        provideClientHydration(withEventReplay()), provideRouter(routes),
    ]
})
  .catch(err => console.error(err));
