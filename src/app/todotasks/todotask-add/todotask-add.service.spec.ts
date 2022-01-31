import { TestBed } from '@angular/core/testing';

import { TodotaskAddService } from './todotask-add.service';

describe('TodotaskAddService', () => {
  let service: TodotaskAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodotaskAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
