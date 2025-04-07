import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeminiGoogleImageGenService {

  private readonly API_KEY = environment.googleAiKey;
  private readonly ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${this.API_KEY}`;

  constructor(
    private http: HttpClient
  ) { }

  generateImage(prompt: string): Observable<string> {
    const body = {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        responseModalities: ['Text', 'Image'],
      },
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.ENDPOINT, body, { headers }).pipe(
      map((response) => {
        const parts = response?.candidates?.[0]?.content?.parts || [];
        const imagePart = parts.find((part: any) => part?.inlineData?.mimeType?.startsWith('image/'));
        return imagePart?.inlineData?.data || null; // Base64 image string
      })
    );
  }
}
