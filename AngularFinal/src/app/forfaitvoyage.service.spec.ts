import { TestBed } from '@angular/core/testing';

import { ForfaitvoyageService } from './forfaitvoyage.service';

describe('ForfaitvoyageService', () => {
  let service: ForfaitvoyageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForfaitvoyageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
