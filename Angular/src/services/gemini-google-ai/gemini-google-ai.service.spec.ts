import { TestBed } from '@angular/core/testing';

import { GeminiGoogleAiService } from './gemini-google-ai.service';

describe('GeminiGoogleAiService', () => {
  let service: GeminiGoogleAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeminiGoogleAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
