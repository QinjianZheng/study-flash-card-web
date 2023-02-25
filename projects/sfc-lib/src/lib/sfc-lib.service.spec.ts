import { TestBed } from '@angular/core/testing';

import { SfcLibService } from './sfc-lib.service';

describe('SfcLibService', () => {
  let service: SfcLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfcLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
