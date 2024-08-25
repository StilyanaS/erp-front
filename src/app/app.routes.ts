import { Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentFormComponent } from './components/student-form/student-form.component';

export const routes: Routes = [
  { path: '', component:StudentsComponent },
  { path: 'insertStudent', component:StudentFormComponent }
];
