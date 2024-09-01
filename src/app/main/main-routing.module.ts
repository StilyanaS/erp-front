import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from '../components/student-form/student-form.component';
import { StudentDetailComponent } from '../components/student-detail/student-detail.component';
import { StudentsComponent } from '../components/students/students.component';
import { StudentUpdateComponent } from '../components/student-update/student-update.component';

const routes: Routes = [
  { path: 'insertStudent', component: StudentFormComponent },
  { path: 'updateStudent/:id', component: StudentUpdateComponent },
  { path: 'student-info/:id', component: StudentDetailComponent },
  { path: '**', component:StudentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
