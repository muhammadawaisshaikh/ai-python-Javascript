import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../environments/environment';
import { asyncScheduler, from, map, Observable, of, scheduled } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiGoogleAiService {

  // instance to initiate Gemini - Google Ai with API_KEY
  private genAI: GoogleGenerativeAI;

  constructor() {
    this.genAI = new GoogleGenerativeAI(environment.googleAiKey);
  }

  /**
   * Communicate with Gemini - Google Ai using text prompt
   */
  askGemini(prompt: string): Observable<string> {
    const model: any = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // converting Promise to Observable - latest way "After Deprecation"
    return scheduled(from(model.generateContent(prompt)), asyncScheduler).pipe(
      map((result: any) => result.response.text())
    );
  }
}
