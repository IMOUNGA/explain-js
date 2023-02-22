import { TestBed } from '@angular/core/testing';

import { NgExplainService } from './ng-explain.service';

describe('NgExplainService', () => {
  let service: NgExplainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgExplainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
