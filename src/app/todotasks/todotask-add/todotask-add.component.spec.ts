import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodotaskAddComponent } from './todotask-add.component';

describe('TodotaskAddComponent', () => {
  let component: TodotaskAddComponent;
  let fixture: ComponentFixture<TodotaskAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodotaskAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodotaskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
