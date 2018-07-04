import { TestBed, inject } from '@angular/core/testing';

import { AsadoService } from './asado.service';

describe('AsadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsadoService]
    });
  });

  it('should be created', inject([AsadoService], (service: AsadoService) => {
    expect(service).toBeTruthy();
  }));
});
