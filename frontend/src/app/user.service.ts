

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8081/demoproject/api/auth';


  constructor(private http: HttpClient) {}

  signUp(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  signIn(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, user);
  }
}