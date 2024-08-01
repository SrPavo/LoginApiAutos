import { TestBed } from '@angular/core/testing';

import { UserBottomSheetService } from './user-bottom-sheet.service';

describe('UserBottomSheetService', () => {
  let service: UserBottomSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBottomSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
