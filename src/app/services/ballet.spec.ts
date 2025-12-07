import { TestBed } from '@angular/core/testing';

import { Ballet } from './ballet';

describe('Ballet', () => {
  let service: Ballet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ballet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
