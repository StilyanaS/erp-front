import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../models/student';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit, OnDestroy {
  student$?: Observable<Student>;
  student?: Student;
  private subscription?: Subscription;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    const studentId = this.route.snapshot.paramMap.get('id');
    this.getStudentInfo(studentId);
  }

  getStudentInfo(id: string | null) {
    if (id) {
      this.student$ = this.dataService.getStudent(id);
      this.subscription = this.student$.subscribe({
        next: (studentData) => {
          this.student = studentData;
          this.cdr.detectChanges(); // Detectar cambios si es necesario
        },
        error: (err) => console.error('Error al recibir los datos del estudiante:', err)
      });
    }
  }

  sendUpdatedStudent() {
    if (this.student) {
      console.log(this.student);

      this.dataService.updateData(this.student.id, this.student).subscribe({
        next: (res: Student) => {
          console.log('Estudiante actualizado:', res);
          this.getStudentInfo(this.student?.id ? this.student.id.toString() : null);
        },
        error: (err) => {
          console.error('Error al actualizar el estudiante:', err);
        }
      });
    }
  }

  updateStudent(form: NgForm) {
    if (form.valid) {
      this.sendUpdatedStudent();
    } else {
      console.log('Formulario inválido');
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
