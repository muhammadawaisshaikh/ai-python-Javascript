import { Component, inject } from '@angular/core';
import { SentimentResponse } from '../../model/sentiment.response';
import { GeminiGoogleSentimentAiService } from '../../services/gemini-google-ai/gemini-google-sentiment-ai.service';
import { FormsModule } from '@angular/forms';
import { catchError, EMPTY, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-sentiment-analyzer',
  templateUrl: './sentiment-analyzer.component.html',
  styleUrls: ['./sentiment-analyzer.component.scss'],
})
export class SentimentAnalyzerComponent {
  messages: {
    text?: string;
    isUser: boolean;
    response?: SentimentResponse;
    error?: string;
  }[] = [];

  userInput: string = '';

  readonly #sentimentService: GeminiGoogleSentimentAiService = inject(
    GeminiGoogleSentimentAiService,
  );

  readonly loadingService: LoadingService = inject(LoadingService);

  onSubmit(): void {
    if (!this.userInput.trim()) return;

    this.loadingService.onLoadingToggle();

    this.messages.push({ text: this.userInput, isUser: true });

    const userMessage = this.userInput;
    this.userInput = '';

    this.#sentimentService
      .generateSentimentAnalysis(userMessage)
      .pipe(
        catchError((err) => {
          this.loadingService.onLoadingToggle();
          this.messages.push({
            error:
              'Failed to analyze sentiment. Please ensure that you have added your API key and try again.',
            isUser: false,
          });
          return EMPTY;
        }),
        take(1),
      )
      .subscribe((response) => {
        this.loadingService.onLoadingToggle();
        this.messages.push({ response: response, isUser: false });
      });
  }

  // Helper method to get CSS class based on sentiment score
  getSentimentClass(score: number | undefined): string {
    if (score === undefined) {
      return '';
    }

    if (score > 0) {
      return 'positive';
    } else if (score < 0) {
      return 'negative';
    } else {
      return 'neutral';
    }
  }
}
