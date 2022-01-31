import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodotaskEditComponent } from './todotask-edit.component';

describe('TodotaskEditComponent', () => {
  let component: TodotaskEditComponent;
  let fixture: ComponentFixture<TodotaskEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodotaskEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodotaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
