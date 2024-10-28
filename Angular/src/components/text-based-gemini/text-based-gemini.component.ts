import { Component } from '@angular/core';
import { GeminiGoogleAiService } from '../../services/gemini-google-ai/gemini-google-ai.service';

@Component({
  selector: 'app-text-based-gemini',
  standalone: true,
  imports: [],
  templateUrl: './text-based-gemini.component.html',
  styleUrl: './text-based-gemini.component.scss'
})
export class TextBasedGeminiComponent {
  constructor(
    private genAiService: GeminiGoogleAiService
  ) { }

  askGemini() {
    // consume service method to interact with gemini
  }
}
