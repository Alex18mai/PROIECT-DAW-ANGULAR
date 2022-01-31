import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { ToDoTask } from '../models/todotask';


@Injectable({
  providedIn: 'root',
})
export class ToDoTaskService {

    private todotasksURL = `${environment.API_URL}/ToDoTask`;
    private token = localStorage.getItem('token') || "";
    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
    })

    public maxId = '0';
    
    constructor(private http: HttpClient) { }

    getToDoTasks(): Observable<ToDoTask[]> {
        const URL = `${this.todotasksURL}/get-todotasks`;
        const todotasks = this.http.get(URL, { headers: this.headers }) as Observable<ToDoTask[]>
        return todotasks;
    }
}