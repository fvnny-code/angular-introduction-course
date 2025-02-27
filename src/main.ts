
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { provideClientHydration, withEventReplay, BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, RouterOutlet } from '@angular/router';
import { TaskListComponent } from './app/task-list/task-list.component';
import { TaskFormComponent } from './app/task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'add-task', component: TaskFormComponent },
];



bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, // Doit être importé ici uniquement
        RouterOutlet, FormsModule),
        provideClientHydration(withEventReplay()), provideRouter(routes),
    ]
})
  .catch(err => console.error(err));
