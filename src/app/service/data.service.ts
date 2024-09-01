import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Student } from '../models/student';
import { Teacher } from '../models/teacher';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }
  private csrfToken: any;
  getData(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8000/api/studentsJson')
  }

  getTeacherData(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8000/api/teachersJson')
  }

  getStudent(id: string): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:8000/api/showStudent/${id}`)
  }

  getTeacher(id: string): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:8000/api/showTeacher/${id}`)
  }

  deleteStudent(id: number): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:8000/api/delete-student/${id}`)
  }

  insertData(data: Student): Observable<any>{
    return this.httpClient.post('http://127.0.0.1:8000/api/new-student', data);
  }
  deleteTeacher(id: number): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:8000/api/delete-teacher/${id}`)
  }

  insertTeacher(data: Teacher): Observable<any>{
    return this.httpClient.post('http://127.0.0.1:8000/api/new-student', data);
  }

  updateData(id: number, data: Student): Observable<any>{
    return this.httpClient.put('http://127.0.0.1:8000/api/update-student/' + id, data);
  }

  updateDataTeacher(id: number, data: Teacher): Observable<any>{
    return this.httpClient.put('http://127.0.0.1:8000/api/update-teacher/' + id, data);
  }

  getToken(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8000/api/csrf-token')
      .pipe(map(response => response || 'default_token'));
  }
  initializeCsrfToken(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8000/sanctum/csrf-cookie', { withCredentials: true });
  }
}
