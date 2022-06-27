import { TestBed } from '@angular/core/testing';

import { ConsultarLatitudeLongitudeService } from './consultar-latitude-longitude.service';

describe('ConsultarLatitudeLongitudeService', () => {
  let service: ConsultarLatitudeLongitudeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarLatitudeLongitudeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
