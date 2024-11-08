import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SentimentResponse } from '../../model/sentiment.response';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeminiGoogleSentimentAiService {
  readonly #httpClient = inject(HttpClient);
  readonly #sentimentApiUrl = `https://language.googleapis.com/v1/documents:analyzeSentiment?key=${environment.sentimentKey}`;

  generateSentimentAnalysis(prompt: string): Observable<SentimentResponse> {
    const body = {
      document: {
        type: 'PLAIN_TEXT',
        content: prompt,
      },
      encodingType: 'UTF8',
    };

    return this.#httpClient.post<SentimentResponse>(
      this.#sentimentApiUrl,
      body,
    );
  }
}
