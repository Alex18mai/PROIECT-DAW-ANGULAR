import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToDoTask } from 'src/app/models/todotask';
import { ToDoTaskService } from '../todotask.service';
import { TodotaskAddService } from './todotask-add.service';

@Component({
  selector: 'app-todotask-add',
  templateUrl: './todotask-add.component.html',
  styleUrls: ['./todotask-add.component.css']
})
export class TodotaskAddComponent implements OnInit {

  todotask?: ToDoTask;

  createForm = this.fb.group({
    id: [this.todotaskService.maxId],
    name: [' '],
    description: [' '],
    toDoDate: ['2020-01-01T00:00:00'],
    doneStatus: [false]
  });

  constructor(
    private route: ActivatedRoute,
    private todotaskAddService: TodotaskAddService,
    private todotaskService: ToDoTaskService,
    public dialogRef: MatDialogRef<TodotaskAddComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  addToDoTask(): void {
    this.todotaskAddService.addToDoTask(this.createForm.value);
    this.dialogRef.close();
  }

}
