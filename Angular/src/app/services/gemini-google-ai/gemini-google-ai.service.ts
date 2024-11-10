import { Injectable } from '@angular/core';
import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeminiGoogleAiService {
  // instance to initiate Gemini - Google Ai with API_KEY
  readonly #genAI: GoogleGenerativeAI = new GoogleGenerativeAI(
    environment.googleAiKey,
  );

  /**
   * Communicate with Gemini - Google Ai using text prompt
   */
  async askGemini(prompt: string): Promise<string> {
    const model: GenerativeModel = this.#genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
    });

    const content = await model.generateContent(prompt);
    return content.response.text();
  }

   /**
   * Communicate with Gemini - Google Ai using image prompt
   */
   async onImagePrompt(prompt: string, imageinlineData: any): Promise<any> {
    try {
      const model: GenerativeModel = this.#genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
      });
  
      const result = await model.generateContent([prompt, imageinlineData]);
  
      if (!result || !result.response) {
        throw new Error('Failed to get a valid response from the model');
      }
  
      return result.response.text();
    } catch (error) {
      console.error('Error generating content:', error);
      throw new Error('Failed to generate content with Gemini - Google AI.');
    }
  }
}
