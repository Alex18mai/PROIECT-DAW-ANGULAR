import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodotaskDeleteComponent } from './todotask-delete.component';

describe('TodotaskDeleteComponent', () => {
  let component: TodotaskDeleteComponent;
  let fixture: ComponentFixture<TodotaskDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodotaskDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodotaskDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
