import { Component, Renderer2 } from '@angular/core';
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
  teacher$?: Observable<Teacher | null>;
  teacher?: Teacher;
  constructor(private route: ActivatedRoute,
  private router: Router, private dataService: DataService, private renderer: Renderer2) { }

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

  deleteTeacher() {
    console.log('delete');
    if (this.teacher) {
      this.dataService.deleteTeacher(this.teacher.id).subscribe({
        next: (res) => console.log(''),
        complete: () => {
          this.hideInfo();
        }
      });

    }
  }

  hideInfo() {
    const container = document.querySelector('.teacher-data__container');
    const message = document.querySelector('.teacher-data__message');
    this.renderer.addClass(container, 'hidden');
    this.renderer.removeClass(message, 'hidden');
  }
}
