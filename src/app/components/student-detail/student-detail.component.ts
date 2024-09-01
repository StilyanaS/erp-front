import { Component, OnInit, ChangeDetectorRef, OnDestroy, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Student } from '../../models/student';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-student-detail',
  standalone: false,
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnDestroy {
  student$?: Observable<Student>;
  student?: Student;
  private subscription?: Subscription;
  isActive = false;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    const studentId = this.route.snapshot.paramMap.get('id');
    this.getStudentInfo(studentId);
  }

  getStudentInfo(id: string | null) {
    this.student$ = this.dataService.getStudent(id ?? '');

    this.subscription = this.student$.subscribe({
      next: (studentData) => {
        this.student = studentData;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error al recibir los datos del estudiante:', err),
      complete: () => console.log('Recepción completa de los datos del estudiante')
    });
  }

  deleteStudent() {
    console.log('delete');
    if (this.student) {
      console.log(this.student.id);
      this.dataService.deleteStudent(this.student.id).subscribe({
        next: (res) => console.log(''),
        complete: () => {
          this.hideInfo();
        }
      });

    }
  }

  hideInfo() {
    const container = document.querySelector('.student-data__container');
    const message = document.querySelector('.student-data__message');
    this.renderer.addClass(container, 'hidden');
    this.renderer.removeClass(message, 'hidden');
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
