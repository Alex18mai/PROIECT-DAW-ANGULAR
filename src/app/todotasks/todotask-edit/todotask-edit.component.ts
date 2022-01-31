import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToDoTask } from 'src/app/models/todotask';
import { TodotaskEditService } from './todotask-edit.service';

@Component({
  selector: 'app-todotask-edit',
  templateUrl: './todotask-edit.component.html',
  styleUrls: ['./todotask-edit.component.css']
})
export class TodotaskEditComponent implements OnInit {

  todotask?: ToDoTask;

  editForm = this.fb.group({
    id: [''],
    name: [''],
    description: [''],
    toDoDate: [''],
    doneStatus: ['']
  });

  constructor(
    private route: ActivatedRoute,
    private todotaskEditService: TodotaskEditService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getToDoTask();
  }

  getToDoTask(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todotaskEditService.getToDoTask(id)
      .subscribe(todotask => {this.todotask = todotask; this.editForm.patchValue(this.todotask)});
  }

  editToDoTask(): void {
    this.todotaskEditService.editToDoTask(this.editForm.value);
  }

}
