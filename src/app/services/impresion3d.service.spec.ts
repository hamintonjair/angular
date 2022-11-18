import { TestBed } from '@angular/core/testing';

import { Impresion3dService } from './impresion3d.service';

describe('Impresion3dService', () => {
  let service: Impresion3dService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Impresion3dService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
