import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { GeminiGoogleAiService } from '../../services/gemini-google-ai/gemini-google-ai.service';

@Component({
  selector: 'app-text-based-gemini',
  standalone: true,
  templateUrl: './text-based-gemini.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextBasedGeminiComponent implements OnInit {
  response = signal('');

  constructor(private genAiService: GeminiGoogleAiService) {}

  ngOnInit(): void {
    this.askGemini('Hey, How are you doing today?');
  }

  /**
   * Communication with Gemini using Frontend Compatible Service
   * @param text
   */
  askGemini(text: string) {
    this.genAiService.askGemini(text).then(
      (result: string) => {
        this.response.set(result);
      },
      (error: Error) => {
        alert(error);
      },
    );
  }
}
