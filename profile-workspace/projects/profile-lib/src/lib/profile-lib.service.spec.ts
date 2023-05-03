import { TestBed } from '@angular/core/testing';

import { ProfileLibService } from './profile-lib.service';

describe('ProfileLibService', () => {
  let service: ProfileLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
