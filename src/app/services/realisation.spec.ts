import { TestBed } from '@angular/core/testing';

import { Realisation } from './realisation';

describe('Realisation', () => {
  let service: Realisation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Realisation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
