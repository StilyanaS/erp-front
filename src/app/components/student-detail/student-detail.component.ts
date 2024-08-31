import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../../models/student';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-student-detail',
  standalone: false,
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent {
  student$ ?: Observable<Student[] | null >;
  constructor(private route: ActivatedRoute,
  private router: Router, private dataService: DataService) { }

  ngOnInit() {
  /*  const studentId = this.route.snapshot.paramMap.get('id');
    this.student$ = this.dataService.getStudent(studentId ?? '');
     this.student$.subscribe(student => this.gotoItems(student));*/
  }

  gotoItems(student: Student | null) {
     if (student) {
      this.router.navigate(['/student-detail', student.id]);
    } else {
      // Handle case where student is null or undefined
      console.error('Student not found!');
    }
}

}
