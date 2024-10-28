import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class GeminiGoogleAiService {

  constructor(
    private genAi: GoogleGenerativeAI
  ) { }

  geminiText(){
    // get data from gemini using text prompt
  }
}
