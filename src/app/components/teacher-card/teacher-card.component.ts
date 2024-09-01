import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teacher-card',
  standalone: false,
  templateUrl: './teacher-card.component.html',
  styleUrl: './teacher-card.component.css'
})
export class TeacherCardComponent {
  @Input() teacherInfo: any;
}
