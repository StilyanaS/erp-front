import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Teacher } from '../../models/teacher';
import { DataService } from '../../service/data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent {
  constructor(private dataservice: DataService, private http: HttpClient){}
  teacher = new Teacher;

  ngOnInit() {
    this.dataservice.getToken().subscribe(res => console.log(res.csrfToken))
  }

  insertTeacher(form: NgForm) {

      this.dataservice.insertData(this.teacher).subscribe((res: Teacher) => console.log(''))

 }
}
