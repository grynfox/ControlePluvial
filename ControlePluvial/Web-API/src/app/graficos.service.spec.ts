import { TestBed, inject } from '@angular/core/testing';

import { GraficosService } from './graficos.service';

describe('GraficosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraficosService]
    });
  });

  it('should be created', inject([GraficosService], (service: GraficosService) => {
    expect(service).toBeTruthy();
  }));
});
