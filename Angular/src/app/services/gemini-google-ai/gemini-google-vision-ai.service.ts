import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FaceAnnotationResponse } from '../../model/face-annotation-response.model';

@Injectable({
  providedIn: 'root',
})
export class GoogleGeminiVisionAiService {
  private httpClient = inject(HttpClient);
  private readonly geminiApiUrl = `https://vision.googleapis.com/v1/images:annotate?key=${environment.visionKey}`;

  detectMood(imageAsBase64: string): Observable<FaceAnnotationResponse> {
    const body = {
      requests: [
        {
          image: {
            content: this.removeImageBase64Label(imageAsBase64),
          },
          features: [
            {
              type: 'FACE_DETECTION',
              maxResults: 1,
            },
          ],
        },
      ],
    };

    return this.httpClient.post<FaceAnnotationResponse>(
      this.geminiApiUrl,
      body,
    );
  }

  private removeImageBase64Label(base64Image: string) {
    let imageWithoutLabel = base64Image;
    ['jpeg', 'jpg', 'png', 'gif'].forEach((imageType) => {
      imageWithoutLabel = imageWithoutLabel.replace(
        `data:image/${imageType};base64,`,
        '',
      );
    });

    return imageWithoutLabel;
  }
}
