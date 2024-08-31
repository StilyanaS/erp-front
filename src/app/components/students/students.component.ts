import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { StudentCardComponent } from '../student-card/student-card.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Student } from '../../models/student';
@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  students$ ?: Observable<Student[]>;
  selectedId: number = 0;
  public students: any[] = [];
  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  ngOnInit():void{
    this.getDataService();
    this.students$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        return this.dataService.getData();
      })
  );
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
