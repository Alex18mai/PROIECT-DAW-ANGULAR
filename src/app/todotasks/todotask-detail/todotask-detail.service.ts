import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoTask } from 'src/app/models/todotask';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodotaskDetailService {

  
  private todotasksURL = `${environment.API_URL}/ToDoTask`;
  private token = localStorage.getItem('token') || "";
  private headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
  })
  
  constructor(private http: HttpClient) { }

  getToDoTask(id: number): Observable<ToDoTask> {
      const URL = `${this.todotasksURL}/get-todotask-by-id/${id}`;
      const todotask = this.http.get(URL, { headers: this.headers }) as Observable<ToDoTask>
      return todotask;
  }
}
