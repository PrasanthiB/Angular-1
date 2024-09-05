import { TestBed } from '@angular/core/testing';

import { TodoCommonService } from './todo-common.service';

describe('TodoCommonService', () => {
  let service: TodoCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
