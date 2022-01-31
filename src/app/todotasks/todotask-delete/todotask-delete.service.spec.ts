import { TestBed } from '@angular/core/testing';

import { TodotaskDeleteService } from './todotask-delete.service';

describe('TodotaskDeleteService', () => {
  let service: TodotaskDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodotaskDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
