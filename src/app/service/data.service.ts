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
    return this.httpClient.get('http://127.0.0.1:8000/studentsJson')
  }

  /*insertData(data: Student) {

    this.getToken().subscribe(dataToken => {
      const headers = new HttpHeaders({
        'X-CSRF-TOKEN': dataToken.csrfToken
      })
      return this.httpClient.post('http://127.0.0.1:8000/newStudent', data, { headers: headers, withCredentials: true })
    })
  }*/
  insertData(data: Student): Observable<any>{
    return this.httpClient.post('http://127.0.0.1:8000/newStudent', data, { withCredentials: true });
  }

  getToken(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8000/csrf-token')
      .pipe(map(response => response || 'default_token'));
  }
  initializeCsrfToken(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8000/sanctum/csrf-cookie', { withCredentials: true });
  }
}
