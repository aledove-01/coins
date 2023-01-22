import { TestBed } from '@angular/core/testing';

import { ConversorCoinsService } from './conversor-coins.service';

describe('ConversorCoinsService', () => {
  let service: ConversorCoinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversorCoinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
