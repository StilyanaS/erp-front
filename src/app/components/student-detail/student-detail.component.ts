import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private cdr: ChangeDetectorRef
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
        console.log('Valor del estudiante:', this.student);
      },
      error: (err) => console.error('Error al recibir los datos del estudiante:', err),
      complete: () => console.log('Recepción completa de los datos del estudiante')
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
