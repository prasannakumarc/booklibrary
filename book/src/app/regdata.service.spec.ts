import { TestBed } from '@angular/core/testing';

import { RegdataService } from './regdata.service';

describe('RegdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegdataService = TestBed.get(RegdataService);
    expect(service).toBeTruthy();
  });
});
