import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8000/studentsJson')


  }
}
