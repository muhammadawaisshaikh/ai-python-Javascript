export interface GeminiResponse {
  imageSentiment: {
    score: number;
    magnitude: number;
  };
  textSentiment: {
    score: number;
    magnitude: number;
  };
  detectedFeatures: string[];
}
