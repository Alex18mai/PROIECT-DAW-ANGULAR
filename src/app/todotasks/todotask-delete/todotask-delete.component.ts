import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodotaskDeleteService } from './todotask-delete.service';

@Component({
  selector: 'app-todotask-delete',
  templateUrl: './todotask-delete.component.html',
  styleUrls: ['./todotask-delete.component.css']
})
export class TodotaskDeleteComponent implements OnInit {

  deleteForm = this.fb.group({
    deleteValue: ['no'],
  });

  message = "";

  constructor(
    private route: ActivatedRoute,
    private todotaskDeleteService: TodotaskDeleteService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void { }

  deleteToDoTask(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.deleteForm.value);
    if (this.deleteForm.value.deleteValue == 'yes'){
      this.message = "The task has been deleted. Click here to go back.";
      this.todotaskDeleteService.deleteToDoTask(id);
    }
    else{
      this.message = "The task has not been deleted.";
    }
  }

  goBack(): void {
    this.router.navigate([`/todotasks`]);
  }

}
