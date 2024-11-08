import { Component, inject } from '@angular/core';
import { SentimentResponse } from '../../model/sentiment.response';
import { GeminiGoogleSentimentAiService } from '../../services/gemini-google-ai/gemini-google-sentiment-ai.service';
import { FormsModule } from '@angular/forms';
import { catchError, EMPTY, take } from 'rxjs';
import { CommonModule } from '@angular/common';

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
  isLoading: boolean = false;

  readonly #sentimentService: GeminiGoogleSentimentAiService = inject(
    GeminiGoogleSentimentAiService,
  );

  onSubmit(): void {
    if (!this.userInput.trim()) return;

    this.isLoading = true;

    this.messages.push({ text: this.userInput, isUser: true });

    const userMessage = this.userInput;
    this.userInput = '';

    this.#sentimentService
      .generateSentimentAnalysis(userMessage)
      .pipe(
        catchError((err) => {
          this.isLoading = false;
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
        this.isLoading = false;
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
