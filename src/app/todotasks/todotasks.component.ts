import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToDoTask } from '../models/todotask';
import { TodotaskAddComponent } from './todotask-add/todotask-add.component';
import { ToDoTaskService } from './todotask.service';

@Component({
  selector: 'app-todotasks',
  templateUrl: './todotasks.component.html',
  styleUrls: ['./todotasks.component.css']
})
export class TodotasksComponent implements OnInit {

  todotasks: ToDoTask[] = [];
public displayedColumns: string[] = ['id', 'name', 'details', 'edit', 'delete'];

  constructor(private todotaskService: ToDoTaskService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getToDoTasks();
  }

  getToDoTasks(): void {
    this.todotaskService.getToDoTasks()
        .subscribe(todotasks => this.todotasks = todotasks);
  }

  public goToToDoTaskDetails(id: string): void{
    this.router.navigate([`/todotasks/${id}`]);
  }

  public goToToDoTaskEdit(id: string): void{
    this.router.navigate([`/todotasks/edit/${id}`]);
  }

  public goToToDoTaskDelete(id: string): void{
    this.router.navigate([`/todotasks/delete/${id}`]);
  }

  public addToDoTask(): void{
    const maxId = String(Math.max.apply(Math, this.todotasks.map(function(o) { return Number(o.id); })) + 1);
    this.todotaskService.maxId = maxId;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    const dialogRef = this.dialog.open(TodotaskAddComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {this.getToDoTasks();})
  }
  

}
