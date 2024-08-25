import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { StudentCardComponent } from '../student-card/student-card.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [StudentCardComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  public students: any[] = [];
  public booleanVar: boolean=true;
  constructor(private dataService: DataService) { }

  ngOnInit():void{
    this.getDataService();
  }

  getDataService() {
    this.dataService.getData().subscribe(res => {
      this.students = res;
      console.log(this.students)
    },(error) => {
        console.error('Error fetching students', error);
      });
  }
}
