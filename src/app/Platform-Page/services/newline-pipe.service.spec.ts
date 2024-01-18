import { TestBed } from '@angular/core/testing';

import { NewlinePipeService } from './newline-pipe.service';

describe('NewlinePipeService', () => {
  let service: NewlinePipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewlinePipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
