import { TestBed } from '@angular/core/testing';

import { StudentsIdService } from './students-id.service';

describe('StudentsIdService', () => {
  let service: StudentsIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
