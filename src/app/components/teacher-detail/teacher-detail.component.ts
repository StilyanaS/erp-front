import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Teacher } from '../../models/teacher';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-teacher-detail',
  standalone: false,
  templateUrl: './teacher-detail.component.html',
  styleUrl: './teacher-detail.component.css'
})
export class TeacherDetailComponent {
  teacher$ ?: Observable<Teacher[] | null >;
  constructor(private route: ActivatedRoute,
  private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  gotoItems(teacher: Teacher | null) {
     if (teacher) {
      this.router.navigate(['/teacher-detail', teacher.id]);
    } else {
      // Handle case where teacher is null or undefined
      console.error('Teacher not found!');
    }
}
}
