import { TestBed } from '@angular/core/testing';

import { Cals } from './cals';

describe('Cals', () => {
  let service: Cals;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cals);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
