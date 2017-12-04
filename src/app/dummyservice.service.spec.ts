import { TestBed, inject } from '@angular/core/testing';

import { DummyserviceService } from './dummyservice.service';

describe('DummyserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DummyserviceService]
    });
  });

  it('should be created', inject([DummyserviceService], (service: DummyserviceService) => {
    expect(service).toBeTruthy();
  }));
});
