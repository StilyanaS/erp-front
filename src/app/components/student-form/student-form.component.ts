import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Student } from '../../models/student';
import { DataService } from '../../service/data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  constructor(private dataservice: DataService, private http: HttpClient){}
  student = new Student;

  ngOnInit() {
    this.dataservice.getToken().subscribe(res => console.log(res.csrfToken))
  }

  insertStudent(form: NgForm) {

      this.dataservice.insertData(this.student).subscribe((res: Student) => console.log(''))

 }
}
