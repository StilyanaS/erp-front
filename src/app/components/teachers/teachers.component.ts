import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { TeacherCardComponent } from '../teacher-card/teacher-card.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Teacher } from '../../models/teacher';

@Component({
  selector: 'app-teachers',
  standalone: false,
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent implements OnInit{
  teachers$ ?: Observable<Teacher[]>;
  selectedId: number = 0;
  public teachers: any[] = [];
  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  ngOnInit():void{
    this.getDataService();
    this.teachers$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        return this.dataService.getData();
      })
  );
}
  getDataService() {
    this.dataService.getData().subscribe(res => {
      this.teachers = res;
      console.log(this.teachers)
    },(error) => {
        console.error('Error fetching teachers', error);
      });
  }
}
