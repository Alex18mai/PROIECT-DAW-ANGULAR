import { TestBed } from '@angular/core/testing';

import { TodotaskDetailService } from './todotask-detail.service';

describe('TodotaskDetailService', () => {
  let service: TodotaskDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodotaskDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
