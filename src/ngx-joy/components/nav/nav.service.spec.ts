import {TestBed} from '@angular/core/testing';

import {JNavService} from './nav.service';

describe('JNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JNavService = TestBed.get(JNavService);
    expect(service).toBeTruthy();
  });
});
