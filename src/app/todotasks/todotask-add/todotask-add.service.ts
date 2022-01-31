import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoTask } from 'src/app/models/todotask';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodotaskAddService {

  private todotasksURL = `${environment.API_URL}/ToDoTask`;
  private token = localStorage.getItem('token') || "";
  private headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
  })
  
  constructor(private http: HttpClient) { }

  addToDoTask(todotask: ToDoTask): void {
      console.log(todotask);
      const URL = `${this.todotasksURL}/create-todotask`;
      this.http.post(URL, todotask, { headers: this.headers }).subscribe(() => console.log("ToDoTask added"));
  }
}
