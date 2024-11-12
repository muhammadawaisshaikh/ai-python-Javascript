import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeminiGoogleAiService } from '../../services/gemini-google-ai/gemini-google-ai.service';
import { ImageHelperService } from '../../helpers/image-helper.service';
import { IVisionAi } from '../../interfaces/image-ai';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-heath-report-ai',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './heath-report-ai.component.html',
})
export class HeathReportAiComponent {
  image: string = '';
  inlineImageData: IVisionAi = {};
  imageFile: File | null = null;
  result: any | null = null;

  readonly #geminiAiService: GeminiGoogleAiService = inject(
    GeminiGoogleAiService,
  );
  readonly #imageHelper: ImageHelperService = inject(ImageHelperService);
  readonly #loadingService: LoadingService = inject(LoadingService);

  onFileChange(e: Event) {
    const input = e.target as HTMLInputElement;

    if (input?.files && input.files[0]) {
      const file = input.files[0];

      // Getting base64 from file to render in DOM
      this.#imageHelper
        .getBase64(file)
        .then((result: any) => {
          this.image = result;
        })
        .catch((e) => console.log(e));

      // Generating content model for Gemini Google AI
      this.#imageHelper.fileToGenerativePart(file).then((image: IVisionAi) => {
        this.inlineImageData = image;
      });
    } else {
      console.log('No file selected.');
    }
  }

  onHealthReportAnalysis() {
    this.#loadingService.onLoadingToggle();

    this.#geminiAiService
      .onImagePrompt(
        'Analyse the provided health report of a patient and give feedback on the disease and some first aid treatment and also provide the best hospital to consult with doctor category to consult.',
        this.inlineImageData,
      )
      .then((response) => {
        this.result = response;
        this.#loadingService.onLoadingToggle();
      })
      .catch((e) => console.log(e));
  }
}
