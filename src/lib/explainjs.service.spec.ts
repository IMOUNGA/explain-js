import { TestBed } from '@angular/core/testing';

import { ExplainjsService } from './explainjs.service';

describe('ExplainjsService', () => {
  let service: ExplainjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplainjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
