import { TestBed } from '@angular/core/testing';

import { ImageHelperService } from './image-helper.service';

describe('ImageHelperService', () => {
  let service: ImageHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
