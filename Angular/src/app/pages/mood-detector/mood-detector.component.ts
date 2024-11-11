import { Component, inject } from '@angular/core';

import { FaceAnnotation } from '../../model/face-annotation-response.model';
import { GoogleGeminiVisionAiService } from '../../services/gemini-google-ai/gemini-google-vision-ai.service';
import { FormsModule } from '@angular/forms';
import { ImageHelperService } from '../../helpers/image-helper.service';
import { IVisionAi } from '../../interfaces/image-ai';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-mood-detector',
  imports: [FormsModule, CommonModule],
  templateUrl: './mood-detector.component.html',
  styleUrls: ['./mood-detector.component.scss'],
})
export class MoodDetectorComponent {
  imageAsBase64!: string;
  result: FaceAnnotation | null = null;
  inlineImageData: IVisionAi = {};

  private geminiService = inject(GoogleGeminiVisionAiService);
  private imageHelper = inject(ImageHelperService);

  onFileChange(event: any) {
    const input = event.target as HTMLInputElement;

    if (input?.files && input.files[0]) {
      const file = input.files[0];

      // Getting base64 from file to render in DOM
      this.imageHelper
        .getBase64(file)
        .then((result: any) => {
          this.imageAsBase64 = result;
        })
        .catch((e) => console.log(e));

      // Generating content model for Gemini Google AI
      this.imageHelper.fileToGenerativePart(file).then((image: IVisionAi) => {
        this.inlineImageData = image;
      });
    } else {
      console.log('No file selected.');
    }
  }

  detectMood() {
    if (this.imageAsBase64) {
      this.geminiService
        .detectMood(this.imageAsBase64)
        .pipe(take(1))
        .subscribe((response) => {
          this.result = response.responses[0].faceAnnotations[0];
        });
    }
  }

  getMoodLabel(likelihood: string): string {
    switch (likelihood) {
      case 'VERY_LIKELY':
        return 'High';
      case 'LIKELY':
        return 'Moderate';
      case 'POSSIBLE':
        return 'Possible';
      case 'UNLIKELY':
        return 'Low';
      case 'VERY_UNLIKELY':
        return 'None';
      default:
        return 'Unknown';
    }
  }
}
