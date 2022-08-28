import { TestBed } from '@angular/core/testing';

import { DodiLibService } from './dodi-lib.service';

describe('DodiLibService', () => {
  let service: DodiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DodiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
