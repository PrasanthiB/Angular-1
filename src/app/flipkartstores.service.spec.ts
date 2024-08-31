import { TestBed } from '@angular/core/testing';

import { FlipkartstoresService } from './flipkartstores.service';

describe('FlipkartstoresService', () => {
  let service: FlipkartstoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartstoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
