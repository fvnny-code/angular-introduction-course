import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'add-task', component: TaskFormComponent },
];

@NgModule({
  declarations: [AppComponent, TaskListComponent, TaskFormComponent],
  imports: [
    BrowserModule, // Doit être importé ici uniquement
    RouterOutlet,
    FormsModule,
  ],
  providers: [provideClientHydration(withEventReplay()), provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
