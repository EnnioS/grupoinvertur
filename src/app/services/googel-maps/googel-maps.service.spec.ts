import { TestBed } from '@angular/core/testing';

import { GoogelMapsService } from './googel-maps.service';

describe('GoogelMapsService', () => {
  let service: GoogelMapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogelMapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
