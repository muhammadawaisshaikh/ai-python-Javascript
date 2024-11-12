import { TestBed } from '@angular/core/testing';

import { AwsBedrockService } from './aws-bedrock.service';

describe('AwsBedrockService', () => {
  let service: AwsBedrockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsBedrockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
