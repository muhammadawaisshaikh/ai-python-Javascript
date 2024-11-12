import { Component } from '@angular/core';
import { IRecipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-recipes-listing',
  standalone: true,
  templateUrl: './recipes-listing.component.html',
})
export class RecipesListingComponent {
  recipes: IRecipe[] = [
    {
      title: 'Starter Recipe',
      img: 'assets/img/getting-started-with-gemini.png',
      desc: 'Actionable Recipe to show the proper integration of Gemini with Angular.',
      url: '/starter',
      github:
        'https://github.com/muhammadawaisshaikh/ai-python-Javascript/tree/main/Angular/src/app/components/text-based-gemini',
    },
    {
      title: 'Building Ai Powered Chat App',
      img: 'assets/img/ai-powered-chat-app.png',
      desc: 'Step-by-Step Guide for Seamless Integration of Gemini with Angular in an AI-Powered Chat App',
      url: '/chat',
      github:
        'https://github.com/muhammadawaisshaikh/ai-python-Javascript/tree/main/Angular/src/app/pages/chat',
    },
    {
      title: 'Ai Powered Skill Quiz Generator',
      img: 'assets/img/skill-quiz-generator-ai-app.png',
      desc: 'AI-Driven Skill Quiz Generator for Enhanced Learning and Assessment for Organizations.',
      url: '/skill-quiz-generator',
      github:
        'https://github.com/muhammadawaisshaikh/ai-python-Javascript/tree/main/Angular/src/app/pages/skill-quiz-generator',
    },
    {
      title: 'Sentiment Analysis Tool',
      img: 'assets/img/sentiment-analysis-using-ai.png',
      desc: 'AI-Powered Sentiment Analysis on Data/Text for Enhanced Insights on reviews/ratings/messages.',
      url: '/sentiment-analyzer',
      github:
        'https://github.com/muhammadawaisshaikh/ai-python-Javascript/tree/main/Angular/src/app/pages/sentiment-analyzer',
    },
    {
      title: 'Ai Powered Plant Identifier',
      img: 'assets/img/plat-identifier-using-ai.png',
      desc: 'AI-Powered Plant Identification Tool for Instant Recognition and Information.',
      url: '/recognize-plant',
      github:
        'https://github.com/muhammadawaisshaikh/ai-python-Javascript/tree/main/Angular/src/app/pages/recognise-plant-ai',
    },
    {
      title: 'Mood Detector',
      img: 'assets/img/ai-powered-mood-detector.png',
      desc: 'AI-Powered detector to analyze the mood from an image.',
      url: '/mood-detector',
      github:
        'https://github.com/muhammadawaisshaikh/ai-python-Javascript/tree/main/Angular/src/app/pages/recognize-plant',
    },
    {
      title: 'Health Report Analysis',
      img: 'assets/img/health-report-ai.png',
      desc: 'AI-Powered analysis to your health or laboratory reports like CBC, CRP, CP and many more',
      url: '/health-report-ai',
      github:
        'https://github.com/muhammadawaisshaikh/ai-python-Javascript/tree/main/Angular/src/app/pages/heath-report-ai',
    },
    {
      title: 'Sentiment Analysis Python',
      img: 'assets/img/sentiment-analysis-python-kaggle.png',
      desc: 'AI-Powered Sentiment Analysis on Product Ratings available on Twitter Dataset available on Kaggle.',
      url: 'https://github.com/muhammadawaisshaikh/ai-python-Javascript/blob/main/Python/sentiment-analysis-python-kaggle/demo/wordcloud.png',
      github:
        'https://github.com/muhammadawaisshaikh/ai-python-Javascript/tree/main/Python/sentiment-analysis-python-kaggle',
    },
    {
      title: 'Ai Powered REST Api - Flask',
      img: 'assets/img/ai-powered-api-python-flask.png',
      desc: 'AI-powered REST API using Flask, integrated with Google AI Gemini.',
      url: 'https://github.com/muhammadawaisshaikh/ai-python-Javascript/blob/main/Python/genAi-gemini-api/README.md',
      github:
        'https://github.com/muhammadawaisshaikh/ai-python-Javascript/tree/main/Python/genAi-gemini-api',
    },
  ];
}
