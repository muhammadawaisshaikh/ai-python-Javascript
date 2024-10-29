import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeminiGoogleAiService } from '../../services/gemini-google-ai/gemini-google-ai.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-text-based-gemini',
  standalone: true,
  imports: [],
  templateUrl: './text-based-gemini.component.html',
  styleUrl: './text-based-gemini.component.scss',
})
export class TextBasedGeminiComponent implements OnInit, OnDestroy {
  private subscription: Subscription | null = null;

  constructor(private genAiService: GeminiGoogleAiService) {}

  ngOnInit(): void {
    this.askGemini('Hey, How are you doing today?');
  }

  /**
   * Communication with Gemini using Frontend Compatible Service
   * @param text
   */
  askGemini(text: string) {
    // this.subscription = this.genAiService.askGemini(text).subscribe({
    //   next: (response: string) => {
    //     console.log(response);
    //     alert(`Response from Gemini: ${response}`);
    //   },
    //   error: (error: any) => {
    //     console.error('Error:', error);
    //     alert('An error occurred while fetching the response from Gemini.');
    //   },
    //   complete: () => {
    //     console.log('Gemini response completed successfully.');
    //   }
    // });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the Observable if it exists
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
