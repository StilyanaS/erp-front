import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from '../components/student-form/student-form.component';
import { StudentDetailComponent } from '../components/student-detail/student-detail.component';
import { StudentsComponent } from '../components/students/students.component';
import { StudentUpdateComponent } from '../components/student-update/student-update.component';
import { TeachersComponent } from '../components/teachers/teachers.component';
import { TeacherFormComponent } from '../components/teacher-form/teacher-form.component';

const routes: Routes = [
  { path: 'insertStudent', component: StudentFormComponent },
  { path: 'insertTeacher', component: TeacherFormComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'updateStudent/:id', component: StudentUpdateComponent },
  { path: 'student-info/:id', component: StudentDetailComponent },
  { path: '**', component:StudentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
