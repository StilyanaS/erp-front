import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../models/student';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css'
})
export class StudentUpdateComponent {
  constructor (private dataservice: DataService, private http: HttpClient){}
  student = new Student;
  updateStudent(form: NgForm) {
    console.log(this.student)
/*       this.dataservice.insertData(this.student).subscribe((res: Student) => console.log('')) */

 }
}
