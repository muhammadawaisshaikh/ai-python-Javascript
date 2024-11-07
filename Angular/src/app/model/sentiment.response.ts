export interface SentimentResponse {
  documentSentiment: DocumentSentiment;
  languageCode: string;
  sentences: Sentence[];
  languageSupported: boolean;
}

export interface DocumentSentiment {
  magnitude: number;
  score: number;
}

export interface Sentence {
  text: Text;
  sentiment: Sentiment;
}

export interface Text {
  content: string;
  beginOffset: number;
}

export interface Sentiment {
  magnitude: number;
  score: number;
}
