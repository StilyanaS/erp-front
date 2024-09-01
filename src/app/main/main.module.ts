import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StudentsComponent } from '../components/students/students.component';
import { StudentCardComponent } from '../components/student-card/student-card.component';
import { StudentDetailComponent } from '../components/student-detail/student-detail.component';
import { StudentUpdateComponent } from '../components/student-update/student-update.component';
import { TeachersComponent } from '../components/teachers/teachers.component';
import { TeacherDetailComponent } from '../components/teacher-detail/teacher-detail.component';
import { TeacherCardComponent } from '../components/teacher-card/teacher-card.component';


@NgModule({
  declarations: [StudentsComponent, StudentDetailComponent, StudentCardComponent, TeachersComponent, TeacherDetailComponent, TeacherCardComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    StudentUpdateComponent,
  ]
})
export class MainModule { }
