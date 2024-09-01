import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Student } from '../models/student';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }
  private csrfToken: any;
  getData(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8000/api/studentsJson')
  }

  getStudent(id: string): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:8000/api/showStudent/${id}`)
  }

  insertData(data: Student): Observable<any>{
    return this.httpClient.post('http://127.0.0.1:8000/api/new-student', data);
  }

  updateData(id: number, data: Student): Observable<any>{
    return this.httpClient.put('http://127.0.0.1:8000/api/update-student/' + id, data);
  }

  getToken(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8000/api/csrf-token')
      .pipe(map(response => response || 'default_token'));
  }
  initializeCsrfToken(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8000/sanctum/csrf-cookie', { withCredentials: true });
  }
}
