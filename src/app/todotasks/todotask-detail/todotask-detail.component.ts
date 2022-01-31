import { Component, OnInit, Input } from '@angular/core';
import { ToDoTask } from '../../models/todotask';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TodotaskDetailService } from './todotask-detail.service';

@Component({
  selector: 'app-todotask-detail',
  templateUrl: './todotask-detail.component.html',
  styleUrls: ['./todotask-detail.component.css']
})
export class TodotaskDetailComponent implements OnInit {

  todotask: ToDoTask | undefined;

  constructor(
    private route: ActivatedRoute,
    private todotaskDetailService: TodotaskDetailService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getToDoTask();
  }

  getToDoTask(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todotaskDetailService.getToDoTask(id)
      .subscribe(todotask => this.todotask = todotask);
  }

  goBack(): void {
    this.location.back();
  }

}
