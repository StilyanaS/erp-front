import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{
  constructor(private dataService: DataService) { }

  ngOnInit():void{
    this.getDataService();
  }

  getDataService() {
    this.dataService.getData().subscribe(res => {
      console.log(res);
    });
    console.log('data received');
  }
}
