import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoTask } from 'src/app/models/todotask';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodotaskDeleteService {

  private todotasksURL = `${environment.API_URL}/ToDoTask`;
  private token = localStorage.getItem('token') || "";
  private headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
  })
  
  constructor(private http: HttpClient) { }

  deleteToDoTask(id: number): void {
      const URL = `${this.todotasksURL}/delete-todotask/${id}`;
      this.http.delete(URL, { headers: this.headers }).subscribe(() => console.log("ToDoTask deleted"));
  }
}
