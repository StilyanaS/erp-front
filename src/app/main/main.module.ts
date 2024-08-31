import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StudentsComponent } from '../components/students/students.component';
import { StudentCardComponent } from '../components/student-card/student-card.component';
import { StudentDetailComponent } from '../components/student-detail/student-detail.component';


@NgModule({
  declarations: [StudentsComponent, StudentDetailComponent, StudentCardComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
