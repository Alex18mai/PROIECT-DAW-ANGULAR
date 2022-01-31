import { TestBed } from '@angular/core/testing';

import { TodotaskEditService } from './todotask-edit.service';

describe('TodotaskEditService', () => {
  let service: TodotaskEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodotaskEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
