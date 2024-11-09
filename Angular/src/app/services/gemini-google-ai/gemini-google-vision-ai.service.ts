import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GeminiResponse } from '../../model/gemini-response.model';

@Injectable({
  providedIn: 'root',
})
export class GoogleGeminiVisionAiService {
  private httpClient = inject(HttpClient);
  private readonly geminiApiUrl = `https://vision.googleapis.com/v1/images:annotate?key=${environment.visionKey}`;

  analyzeImageAndText(
    imageFile: File,
    text: string,
  ): Observable<GeminiResponse> {
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('text', text);

    return this.httpClient.post<GeminiResponse>(this.geminiApiUrl, formData);
  }
}
