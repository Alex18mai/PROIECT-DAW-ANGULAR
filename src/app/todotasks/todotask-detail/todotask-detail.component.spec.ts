import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodotaskDetailComponent } from './todotask-detail.component';

describe('TodotaskDetailComponent', () => {
  let component: TodotaskDetailComponent;
  let fixture: ComponentFixture<TodotaskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodotaskDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodotaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
