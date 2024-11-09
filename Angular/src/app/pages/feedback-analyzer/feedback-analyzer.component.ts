import { Component, inject } from '@angular/core';

import { GeminiResponse } from '../../model/gemini-response.model';
import { GoogleGeminiVisionAiService } from '../../services/gemini-google-ai/gemini-google-vision-ai.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-feedback-analyzer',
  imports: [FormsModule],
  templateUrl: './feedback-analyzer.component.html',
  styleUrls: ['./feedback-analyzer.component.scss'],
})
export class FeedbackAnalyzerComponent {
  imageFile: File | null = null;
  textReview: string = '';
  result: GeminiResponse | null = null;

  private geminiService = inject(GoogleGeminiVisionAiService);

  onFileChange(event: any) {
    this.imageFile = event.target.files[0];
  }

  analyzeFeedback() {
    if (this.imageFile && this.textReview) {
      this.geminiService
        .analyzeImageAndText(this.imageFile, this.textReview)
        .subscribe((response) => {
          this.result = response;
        });
    }
  }
}
