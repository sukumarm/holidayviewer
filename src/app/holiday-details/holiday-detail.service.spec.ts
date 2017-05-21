import { TestBed, inject } from '@angular/core/testing';

import { HolidayDetailService } from './holiday-detail.service';

describe('HolidayDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HolidayDetailService]
    });
  });

  it('should ...', inject([HolidayDetailService], (service: HolidayDetailService) => {
    expect(service).toBeTruthy();
  }));
});
