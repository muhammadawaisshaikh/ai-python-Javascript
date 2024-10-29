import { Injectable } from '@angular/core';
import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
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
  async askGemini(prompt: string): Promise<string> {
    const model: GenerativeModel = this.genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
    });

    const content = await model.generateContent(prompt);
    return content.response.text();
  }
}
