import { Injectable } from '@angular/core';
import { IVisionAi } from '../interfaces/image-ai';

@Injectable({
  providedIn: 'root',
})
export class ImageHelperService {
  getBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(`Error: ${error}`);
    });
  }

  async fileToGenerativePart(file: File): Promise<IVisionAi> {
    const base64EncodedData = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        const base64Data = result.split(',')[1]; // Extract base64 data part only
        resolve(base64Data);
      };
      reader.onerror = (error) => reject(`File reading error: ${error}`);
      reader.readAsDataURL(file);
    });

    return {
      inlineData: { data: base64EncodedData, mimeType: file.type },
    };
  }
}
