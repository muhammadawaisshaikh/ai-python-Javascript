import { Component, OnInit } from '@angular/core';
import { GeminiGoogleAiService } from '../../services/gemini-google-ai/gemini-google-ai.service';

@Component({
  selector: 'app-text-based-gemini',
  standalone: true,
  imports: [],
  templateUrl: './text-based-gemini.component.html',
  styleUrl: './text-based-gemini.component.scss'
})
export class TextBasedGeminiComponent implements OnInit {
  constructor(
    private genAiService: GeminiGoogleAiService
  ) { }

  ngOnInit(): void {
    this.askGemini('Hey, How are you doing today?');
  }

  /**
   * Communication with Gemini using Frontend Compatible Service
   * @param text 
   */
  askGemini(text: string) {
    this.genAiService.geminiText(text).then(result => {
      console.log(result);
      alert(`Response from Gemini: ${result}`)
    })
  }
}
